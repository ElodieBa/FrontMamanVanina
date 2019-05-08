import { Component, OnInit } from '@angular/core';
import { Client } from '../shared/IClient';
import { ClientServiceService } from '../client-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {
  pageTitle='Détail du client';
 
  client : Client;
  idClient: number;
  constructor(private clientService : ClientServiceService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.idClient=this.route.snapshot.params['idClient'];
    this.clientService.getClient(this.idClient).subscribe(
      data => this.client = data
    );
  }

}
