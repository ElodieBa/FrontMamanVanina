import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from '../client-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../shared/IClient';

@Component({
  selector: 'app-client-modif',
  templateUrl: './client-modif.component.html',
  styleUrls: ['./client-modif.component.css']
})
export class ClientModifComponent implements OnInit {

   
  client : Client;
  idClient: number;
  
  constructor(   private clientService : ClientServiceService, 
    private route: ActivatedRoute,
    private router: Router) {
 
   }

  ngOnInit() {
    let param = this.route.snapshot.params['id'];
    if(param) {
        this.idClient = param;
        this.getCommandeById(this.idClient);
  }
}

  getCommandeById(id : number) {
    this.clientService.getClient(id).subscribe(
        data => this.client = data
    );
  }

  saveClient() : void{
    this.clientService.saveClients(this.client).subscribe(
      data => this.router.navigate(['/Clients'])
    );
  }
}
