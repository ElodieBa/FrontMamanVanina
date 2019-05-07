import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';

import { AppComponent } from '../app.component';
import { AjoutClientComponent } from '../ajout-client/ajout-client.component';
import { DetailClientComponent } from '../detail-client/detail-client.component';
const appRoutes: Routes = [
//   { path : 'home', component : ContactListComponent},
  { path : 'Ajoutclients', component : AjoutClientComponent},
  { path : 'detail/:id', component: DetailClientComponent}
 // { path : 'home', component: AppComponent },
  //{ path : '*', redirectTo: 'home'}
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