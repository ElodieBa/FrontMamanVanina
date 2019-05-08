import { Component, OnInit } from '@angular/core';
import { Commande } from '../shared/ICommande';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { OrdreServiceService } from '../ordre-service.service';
import { Produit } from '../shared/IProduit';

@Component({
  selector: 'app-command-modif',
  templateUrl: './command-modif.component.html',
  styleUrls: ['./command-modif.component.css']
})
export class CommandModifComponent implements OnInit {

  produits: Produit[];
  produit : Produit = {idProduit:0, quantiteProduit:0, taille:"",couleur:"",prix:0};  
  id: number;
  commande : Commande;
  constructor(private ordreService: OrdreServiceService, 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    let param = this.route.snapshot.params['id'];
    if(param) {
        this.id = param;
        this.getCommandeById(this.id);
    }
  }
  getCommandeById(id : number) {
    this.ordreService.getCommande(id).subscribe(
        data => this.commande = data
    );
  }
  
  EnregistreCommande(): void {
    this.ordreService.ajouterCommande(this.commande).subscribe(
      data => this.ngOnInit()
    );
    this.router.navigate(['/commandes/']);
  }
  }

