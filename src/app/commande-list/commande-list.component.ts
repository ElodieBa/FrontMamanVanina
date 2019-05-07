import { Component, OnInit } from '@angular/core';
import { Produit } from '../shared/IProduit';
import { OrdreServiceService } from '../ordre-service.service';

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit {

  produit : Produit = {produitId:0, quantiteProduit:0, produitTaille:"",produitCouleur:"",produitPrix:0};  
  
  constructor(private ordreService : OrdreServiceService) { }

  ngOnInit() {
  }

  ajouterProduit() : void {
    this.ordreService.ajouterProduit(this.produit).subscribe(
      data => this.ngOnInit()
    );
  }

  }
