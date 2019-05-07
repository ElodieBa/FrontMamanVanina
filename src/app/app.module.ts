import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {  HttpClientModule } from '@angular/common/http';

import { CommandeComponent } from './commande/commande.component';
import { CommandeListElodieComponent } from './commande-list-elodie/commande-list-elodie.component';
import { OrdreServiceService } from './ordre-service.service';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CommandeListComponent } from './commande-list/commande-list.component';
import { CommandeDetailComponent } from './commande-detail/commande-detail.component';
import { RoutModule } from './rout/rout.module';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';

import { AdresseclientComponent } from './adresseclient/adresseclient.component';
import { AdresseVaninaComponent } from './adresse-vanina/adresse-vanina.component';
import { FormFactureComponent } from './form-facture/form-facture.component';

import { FactureListComponent } from './facture-list/facture-list.component';
import { FactureDetailComponent } from './facture-list/facture-detail.component';
import { FactureService } from './facture-list/facture.service';

import { ClientListComponent} from './client-list/client-list.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { NavigationComponent } from './navigation/navigation.component'


@NgModule({
  declarations: [
    AppComponent,
    CommandeComponent,
    CommandeListElodieComponent,
    CommandeListComponent,
    CommandeDetailComponent,
    MenuComponent,
    AccueilComponent,
    AdresseclientComponent,
    AdresseVaninaComponent,
    FormFactureComponent
    FactureListComponent,
    FactureDetailComponent,
    ClientListComponent,
    AuthentificationComponent,
    NavigationComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutModule,
  ],
  providers: [OrdreServiceService,
              FactureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
