import { Component, OnInit } from '@angular/core';
import { Client } from '../shared/IClient';
import { ClientServiceService } from '../client-service.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router
    ) { }

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
 


  onBack(): void {
    this.router.navigate(['clients']);
}

}
