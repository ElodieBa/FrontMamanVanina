import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AdresseclientComponent } from './adresseclient/adresseclient.component';
import { AdresseVaninaComponent } from './adresse-vanina/adresse-vanina.component';
import { FormFactureComponent } from './form-facture/form-facture.component';

import { FactureListComponent } from './facture-list/facture-list.component';
import { FactureDetailComponent } from './facture-list/facture-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FactureService } from './facture-list/facture.service';

import { ClientListComponent} from './client-list/client-list.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { NavigationComponent } from './navigation/navigation.component'


@NgModule({
  declarations: [
    AppComponent,
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
    HttpClientModule
  ],

  ],
  providers: [FactureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
