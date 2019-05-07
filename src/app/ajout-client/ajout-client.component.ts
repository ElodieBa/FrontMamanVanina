import { Component, OnInit } from '@angular/core';
import { Client } from '../shared/IClient';
import { ClientServiceService } from '../client-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.css']
})
export class AjoutClientComponent implements OnInit {
  pageTitle = 'Ajouter un client'
  client : Client= {idClient:0, 
    nomClient:"", 
    prenomClient:"",
    nomSociete:"", 
    dateNaissance:"", 
    adresse:"", 
    ville:"", 
    zipcode:"",  
    mail:"", 
    numTel:"",
    fax:""}
    // constructor(private clientService : ClientServiceService,
    //   private router: Router) { }
    constructor (private clientService : ClientServiceService, private router : Router) {}
 
    ngOnInit() {
  }
  saveClient() : void{
    this.clientService.saveClients(this.client).subscribe(
      data => this.router.navigate(['/Clients'])
    );
  }
  

}
