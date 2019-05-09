import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';

import { AjoutClientComponent } from '../ajout-client/ajout-client.component';
import { DetailClientComponent } from '../detail-client/detail-client.component';

import { CommandeListComponent } from '../commande-list/commande-list.component';
import { CommandeDetailComponent } from '../commande-detail/commande-detail.component';

import { AccueilComponent } from '../accueil/accueil.component';
import { ClientListComponent } from '../client-list/client-list.component';

import { FactureListComponent } from '../facture-list/facture-list.component';
import { FactureDetailComponent } from '../facture-list/facture-detail.component';
import { FormFactureComponent } from '../form-facture/form-facture.component';
import { CommandeListElodieComponent } from '../commande-list-elodie/commande-list-elodie.component';
import { CommandModifComponent } from '../command-modif/command-modif.component';
import { ClientModifComponent } from '../client-modif/client-modif.component';
import { FactureModifComponent } from '../facture-modif/facture-modif.component';
const appRoutes: Routes = [
  { path : 'accueil', component : AccueilComponent },

  { path : 'commandes', component : CommandeListComponent },
  { path : 'AjoutCommande', component : CommandeListElodieComponent },
  { path : 'detailCommande/:id', component : CommandeDetailComponent },
  { path : 'modifCommande/:id', component : CommandModifComponent },

  { path : 'Clients', component : ClientListComponent},
  { path : 'Ajoutclients', component : AjoutClientComponent},
  { path : 'detailClient/:id', component: DetailClientComponent},
  { path : 'modifClient/:id', component: ClientModifComponent},
  

  { path : 'Factures', component : FactureListComponent},
  { path : 'AjoutFactures', component : FormFactureComponent},
  { path : 'detailFactures/:id', component: FactureDetailComponent},
  { path : 'modifFacture/:id', component : FactureModifComponent },

  { path : '', redirectTo : 'accueil', pathMatch : 'full'}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports : [
    RouterModule
  ]
})

export class RoutModule { }

