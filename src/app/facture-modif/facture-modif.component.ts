import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Facture } from '../shared/IFacture';
import { FactureService } from '../facture-service.service';

@Component({
  selector: 'app-facture-modif',
  templateUrl: './facture-modif.component.html',
  styleUrls: ['./facture-modif.component.css']
})
export class FactureModifComponent implements OnInit {

  pageTitle = 'Ajouter une Facture'

  numCommande: number
  facture : Facture;
  
  constructor(private factureService : FactureService,
    private router: Router, private route : ActivatedRoute) { }

    factureById(id: number){
      this.factureService.getFacture(this.numCommande).subscribe(
        data => this.facture = data
      );

    }
    ngOnInit(){
      let param = this.route.snapshot.params['id'];
        if (param) {
          this.numCommande= param; 
          this.factureById(this.numCommande);
    }
    }

    onBack(): void{
      this.router.navigate(['Factures']);
    }
  saveFacture() : void {
    this.factureService.saveFacture(this.facture).subscribe(
      data => this.router.navigate(['/factures'])
    );
  }
 

}
