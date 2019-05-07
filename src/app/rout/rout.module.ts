import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';

import { CommandeListComponent } from '../commande-list/commande-list.component';
import { CommandeDetailComponent } from '../commande-detail/commande-detail.component';
import { AppComponent } from '../app.component';
import { AccueilComponent } from '../accueil/accueil.component';
const appRoutes: Routes = [
    { path : 'commandes', component : CommandeListComponent },
    { path : 'detail/:id', component : CommandeDetailComponent },
    { path : 'accueil', component : AccueilComponent },
    { path : '', redirectTo : 'accueil', pathMatch : 'full'},
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
