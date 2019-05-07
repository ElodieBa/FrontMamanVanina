import { Component, OnInit } from '@angular/core';
import { IClient } from './client';

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

  filteredClients: IClient[];
  clients: IClient[] = [
    {
      clientId: 1,
      clientName: "aaaa",
      clientPrenom: "Client1",
      clientDn: "17 juin 1995",
      clientAdresse: "Nantes",
      clientNomSociete: "societe",
      clientTel: "0556245645",
      clientFax: "0561561563",
      clientMail: "lg@gmail.com",
    },
    {
      clientId: 2,
      clientName: "bbbbb",
      clientPrenom: "Client2",
      clientDn: "15 mai 1990",
      clientAdresse: "Nantes",
      clientNomSociete: "societe",
      clientTel: "0556245645",
      clientFax: "0561561563",
      clientMail: "al@gmail.com",
    }
  ];




  constructor() {
    this.filteredClients = this.clients;
    this.filter = '';
  }

  ngOnInit() {
    console.log('Person : ')
  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.clients.filter((client: IClient) =>
      client.clientName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  search(value:string){
      this.filteredClients = this._filter ? this.performFilter(this._filter) : this.clients;
  }



}
