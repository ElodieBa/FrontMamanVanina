import { Component, OnInit } from '@angular/core';
import { Produit } from '../shared/IProduit';
import { OrdreServiceService } from '../ordre-service.service';
import { Commande } from '../shared/ICommande';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list-elodie.component.html',
  styleUrls: ['./commande-list-elodie.component.css']
})
export class CommandeListElodieComponent implements OnInit {
  produits: Produit[];
  produit : Produit = {idProduit:0, quantiteProduit:0, taille:"",couleur:"",prix:0};  
  commande : Commande = {
    id : 0, 
    coupeEnBout : true,
    thermo : true,
    emplDbl : true,
    thermoType : "",
    faconnier : "",
    societe : "",
    receptionneur : "",
    date: "",
    fabricant : "",
    modele : "",
    ListProduits : [] 

  };


  constructor(private ordreService : OrdreServiceService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  ajouterProduit() : void {
    this.ordreService.ajouterProduit(this.produit).subscribe(
      data => this.ngOnInit()
    );
  }
  ajouterCommande() : void {
    this.ordreService.ajouterCommande(this.commande).subscribe(
      data => this.ngOnInit()
    );
    this.router.navigate(['/commandes/']);
  }



  }
