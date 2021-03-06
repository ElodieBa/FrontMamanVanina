import { Component, OnInit } from '@angular/core';
import { IClient } from './client';
import { ClientServiceService } from '../client-service.service';
import { Router } from '@angular/router';
import { Client } from '../shared/IClient';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  pageTitle = 'Liste de clients';
  _filter: string;
  get filter(): string {
    return this._filter
  }
  set filter(value: string) {
    this._filter = value;
     }

  filteredClients: Client[];
  clients: Client[] ;




  constructor(private clientService : ClientServiceService, private router: Router) {
    this.filter = '';
  }

  ngOnInit() {
    this.clientService.getAllClients().subscribe(
      data => {
        this.clients = data;
        this.filteredClients= this.clients;})
  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.clients.filter((client: Client) =>
      client.nomClient.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  search(value:string){
      this.filteredClients = this._filter ? this.performFilter(this._filter) : this.clients;
  }

  deleteClient(id : number): void {
    this.clientService.deleteClient(id).subscribe(
      data => this.ngOnInit()
    );
  };
ModifClient(id : number): void {
  this.router.navigate(['/modifClient/',id]);
};
detailClient(id : number): void {
  this.router.navigate(['/detailClient/',id]);
}


}
