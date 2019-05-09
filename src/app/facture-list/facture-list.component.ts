import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { FactureService } from '../facture-service.service';
import { Facture } from '../shared/IFacture';

@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css']
})
export class FactureListComponent implements OnInit {

  pageTitle = 'Liste des factures';
  _filter: string;
  get filter(): string {
    return this._filter;
  }
  set filter(value: string) {
    this._filter = value;

  }

  filteredFactures: Facture[];
  factures: Facture[];

  // = [
  //   {
  // "numCommande": 5, 
  // "codeClient": 0, 
  // "numTVA": 2, 
  // "dateLivraison": "2019-05-08T15:30:30.000+0000", 
  // "codeProduit": 0, 
  // "description": "blabla", 
  // "quantite": 0, 
  // "prixUnitaireHT": 50.0, 
  // "tva": 2.0, 
  // "dateEcheance": "2019-05-08T15:30:30.000+0000", 
  // "remise": 2.0, 
  // "accomptes": 30.0, 
  // "ordredecommande": null,
  //   {
  //     "numCommande": 2,
  //     "codeProduit": 456, 
  //     "codeClient": 222, 
  //     "dateEcheance": "10 avril 2019", 
  //     "nomSociete": "Vanina", 
  //     "montant": 35, 
  //     "statut": "validé",

  //   },

  // ];

  constructor(private factureService : FactureService, private router: Router) {
    this.filter = '';
  }

  ngOnInit(){
    this.factureService.getAllFactures().subscribe(data => {
      console.log(data);
      this.factures = data;
      this.filteredFactures = this.factures;
    });
  }

  deleteFacture(id: number): void {
    this.factureService.deleteFacture(id).subscribe(
      data => this.ngOnInit()
    );
  }

  detailFacture(id: number): void {
    this.router.navigate(['/detailFactures/', id]);
  }
  modifFacture(id: number): void {
    this.router.navigate(['/modifFacture/', id]);
  }

  search(value:string) {
  this.filteredFactures = this._filter ? this.performFilter(this._filter) : this.factures;
  }

  performFilter(filterBy: string): Facture[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.factures.filter((facture: Facture) =>
      facture.modeReglement.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
