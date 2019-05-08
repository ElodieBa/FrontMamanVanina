import { Component, OnInit } from '@angular/core';
import { Commande } from '../shared/ICommande';
import { Produit } from '../shared/IProduit';
import { Router } from '@angular/router';
import { OrdreServiceService } from '../ordre-service.service';

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
    produits:Produit [];
 
    filteredCommands : Commande[];
    commands : Commande[];


  constructor(private ordreService: OrdreServiceService, private router: Router) {
    
    this.filter = '';
   }

  ngOnInit() {
    this.ordreService.getAllCommandes().subscribe( data=> 
      {this.commands = data
        this.filteredCommands = this.commands},
        error => { console.log(error) });
  }
  search (value : string) {
    this.filteredCommands = this._filter ? this.performFilter(this._filter) : this.commands;
  }
  

  performFilter(filterBy: string) : Commande[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.commands.filter((commande : Commande) => 
    commande.societe.toLocaleLowerCase().indexOf(filterBy) !== -1);
}
deleteCommande(id : number): void {};
ModifCommande(id : number): void {};
detailCommande(id : number): void {
  this.router.navigate(['/detailCommande/',id]);
}
}
