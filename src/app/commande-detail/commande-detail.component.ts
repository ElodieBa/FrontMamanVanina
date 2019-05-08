import { Component, OnInit } from '@angular/core';
import { Commande } from '../shared/ICommande';
import { Produit } from '../shared/IProduit';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdreServiceService } from '../ordre-service.service';

@Component({
  selector: 'app-commande-detail',
  templateUrl: './commande-detail.component.html',
  styleUrls: ['./commande-detail.component.css']
})
export class CommandeDetailComponent implements OnInit {
  pageTitle = 'Détail commande'
 


  id: number;
  commande : Commande;

 

  constructor(private ordreService: OrdreServiceService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
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
  onBack(): void {
    this.router.navigate(['commandes']);
}

}
