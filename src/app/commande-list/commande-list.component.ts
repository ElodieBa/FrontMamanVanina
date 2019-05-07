import { Component, OnInit } from '@angular/core';
import { ICommande } from '../shared/ICommande';
import { IProduit } from '../shared/IProduit';
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
    produits:IProduit []=[
      {
      "idProduit":1,
      "taille":"38/40",
      "couleur":"rose",
      
     "prix":25,
       "quantiteProduit":5,
      }
      ];
      produits2:IProduit []=[      {
        "idProduit":2,
        "taille":"38/40",
        "couleur":"vert",
        
       "prix":25,
         "quantiteProduit":5,
        }];
 
    filteredCommands : ICommande[];
    commands : ICommande[] = [{

      "id": 1,
      "coupeEnBout": true,
      "thermo" : true,
      "empdbl": true,
      "thermoType": "string",
      "faconnier":"string",
      "societe": "STTtring",
      "receptionneur": "string",
      "fabricant": "string",

      "modele": "string",

      "date": "31/05/2019",
      "produits":this.produits,
    },
    {

      "id": 2,
      "coupeEnBout": true,
      "thermo" : true,
      "empdbl": true,
      "thermoType": "string",
      "faconnier":"string",
      "societe": "abb",
      "receptionneur": "string",
  
      "fabricant": "string",

      "modele": "string",

      "date": "31/05/2019",
      "produits":this.produits2,
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
  

  performFilter(filterBy: string) : ICommande[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.commands.filter((commande : ICommande) => 
    commande.societe.toLocaleLowerCase().indexOf(filterBy) !== -1);
}
deleteCommande(id : number): void {};
ModifCommande(id : number): void {};
detailCommande(id : number): void {
  this.router.navigate(['/detail/',id]);
}
}
