import { Component, OnInit } from '@angular/core';
import { IClient } from './client';
import { ClientServiceService } from '../client-service.service';
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




  constructor(private clientService : ClientServiceService) {
    this.filteredClients = this.clients;
    this.filter = '';
  }

  ngOnInit() {
    console.log('Person : ')
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



}
