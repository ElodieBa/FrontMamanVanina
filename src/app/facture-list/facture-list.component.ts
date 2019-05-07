import { Component, OnInit } from '@angular/core';
import { IFacture } from './facture';
import { FactureService } from './facture.service'; 

@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css']
})
export class FactureListComponent {

  pageTitle = 'Liste des factures'; 
  _filter: string; 
  get filter(): string {
    return this._filter; 
  }
  set filter(value : string) {
    this._filter = value; 
    this.filteredFactures = this._filter ? this.performFilter(this._filter) : this.factures; 
  }

  filteredFactures : IFacture[]; 
  factures : IFacture[]= [
    {
      "factureId": 1,
      "numero": 123,
      "code": "A123", 
      "codeClient": "client123", 
      "date": "7 mai 2019", 
      "societe": "Vanina", 
      "montant": 50, 
      "statut": "validé",
      "options": ""
    },
    {
      "factureId": 2,
      "numero": 456,
      "code": "A456", 
      "codeClient": "client456", 
      "date": "10 avril 2019", 
      "societe": "Vanina", 
      "montant": 35, 
      "statut": "validé",
      "options": ""
    },

  ];

  constructor(private factureService: FactureService) {
    this.filteredFactures = this.factures; 
    this.filter=''; 
   }

   ngOnInit(): void {
    this.factureService.getFactures().subscribe(
      data => {   
          this.factures = data;
          this.filteredFactures = this.factures;  
              },
      error => { console.log(error) }
  );
   }

   performFilter(filterBy: string) : IFacture[]{
    filterBy = filterBy.toLocaleLowerCase(); 
    return this.factures.filter((facture : IFacture) =>
        facture.code.toLocaleLowerCase().indexOf(filterBy) !== -1); 
}

}
