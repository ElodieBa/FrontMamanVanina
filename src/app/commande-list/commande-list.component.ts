import { Component, OnInit } from '@angular/core';
import { Commande } from '../shared/ICommande';
import { Produit } from '../shared/IProduit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit {

  pageTitle = 'Liste de commandes'

  _filter: string;
    get filter(): string {
        return this._filter;
    }
    set filter(value : string) {
        this._filter = value;
        
    }
    produits:Produit []=[
      {
      "produitId":1,
      "produitTaille":"38/40",
      "produitCouleur":"rose",
      "produitPrix":25,
      "quantiteProduit":5,
      }
      ];
      produits2:Produit []=[      {
        "produitId":2,
        "produitTaille":"38/40",
        "produitCouleur":"vert",
        
       "produitPrix":25,
         "quantiteProduit":5,
        }];
 
    filteredCommands : Commande[];
    commands : Commande[] = [{

      "commandeId": 1,
      "commandeCoupeEnBout": true,
      "commandeThermo" : true,
      "commandeEmplDbl": true,
      "commandeThermoType": "string",
      "commandeFaconnier":"string",
      "commandeSociete": "STTtring",
      "commandeReceptionneur": "string",
      "commandeFabricant": "string",

      "commandeModele": "string",

      "date": "31/05/2019",
      "ListeProduits":this.produits,
    },
    {

      "commandeId": 2,
      "commandeCoupeEnBout": true,
      "commandeThermo" : true,
      "commandeEmplDbl": true,
      "commandeThermoType": "string",
      "commandeFaconnier":"string",
      "commandeSociete": "abb",
      "commandeReceptionneur": "string",
  
      "commandeFabricant": "string",

      "commandeModele": "string",

      "date": "31/05/2019",
      "ListeProduits":this.produits2,
    }];


  constructor(private router: Router) {
    this.filteredCommands = this.commands;
    this.filter = '';
   }

  ngOnInit() {

  }
  search (value : string) {
    this.filteredCommands = this._filter ? this.performFilter(this._filter) : this.commands;
  }
  

  performFilter(filterBy: string) : Commande[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.commands.filter((commande : Commande) => 
    commande.commandeSociete.toLocaleLowerCase().indexOf(filterBy) !== -1);
}
deleteCommande(id : number): void {};
ModifCommande(id : number): void {};
detailCommande(id : number): void {
  this.router.navigate(['/detailCommande/',id]);
}
}
