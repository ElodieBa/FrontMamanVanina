import { Component, OnInit } from '@angular/core';
import { Facture } from './facture';
import { ActivatedRoute, Router } from '@angular/router';
import { FactureService } from './facture.service'; 

@Component({
    selector: 'app-facture-detail',
    templateUrl: './facture-detail.component.html',
    styleUrls: ['./facture-detail.component.css']
  })

  export class FactureDetailComponent implements OnInit{

    pageTitle = 'Facture Detail'
    facture: Facture; 
    numCommande: number; 

    constructor(private route : ActivatedRoute, private factureService : FactureService, private router : Router){

    }

    onBack(): void{
      this.router.navigate(['factures']);
    }
    factureById(id: number){
      this.factureService.getFacture(this.numCommande).subscribe(
        data => this.facture = data
      );

    }

    ngOnInit () {
      let param = this.route.snapshot.params['id'];
        if (param) {
          this.numCommande= param; 
          this.factureById(this.numCommande);
    }
  }

    

  }