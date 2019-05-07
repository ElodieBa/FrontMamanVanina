import { Component, OnInit } from '@angular/core';
import { IFacture } from './facture';
import { Router, ActivatedRoute } from '@angular/router';
import { FactureService } from './facture.service'; 

@Component({
    selector: 'app-facture-detail',
    templateUrl: './facture-detail.component.html',
    styleUrls: ['./facture-detail.component.css']
  })

  export class FactureDetailComponent {

    pageTitle = 'Facture Detail'
    facture: IFacture | undefined; 
    numero: number; 

    constructor(//private router: Router, 
       // private route : ActivatedRoute, 
        private factureService : FactureService){

    }

      ngOnInit(): void {
     //   let param = this.route.snapshot.params['id'];
     //  if(param) {
     //      this.id = param;
     //       this.getFactures(this.id);
     //  }
    }

  //  getFactures(factureId : number) {
     //   this.factureService.getFactureById(id).subscribe(
      //      data => this.facture = data
      //  );
 //   }
  //  onBack(): void {
    //    this.router.navigate(['/factures']);
  //  }

  //  onRatingClicked(message: string) {
    //    this.pageTitle = 'Facture Detail : '+message;
 //   }
  }