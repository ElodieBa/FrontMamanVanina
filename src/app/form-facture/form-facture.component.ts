import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Facture } from '../shared/IFacture';
import { FactureService } from '../facture-service.service';


@Component({
  selector: 'app-form-facture',
  templateUrl: './form-facture.component.html',
  styleUrls: ['./form-facture.component.css']
})
export class FormFactureComponent implements OnInit {

  pageTitle = 'Ajouter une Facture'

  facture : Facture = {
    numCommande:0,
    modeReglement:"",
    date:null,
    numTVA:0,
    dateLivraison:null,
    tva:0,
    dateEcheance:null,
    remise:0,
    acomptes:0,
    montantEcheance:0,
    escompte:0,
    ordredecommande:null
   
  }
  constructor(private factureService : FactureService,
    private router: Router) { }

  ngOnInit() {

  }

  saveFacture() : void {
    this.factureService.saveFacture(this.facture).subscribe(
      data => this.router.navigate(['/Factures'])
    );
  }
 

}
