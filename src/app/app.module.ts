import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdresseclientComponent } from './adresseclient/adresseclient.component';
import { AdresseVaninaComponent } from './adresse-vanina/adresse-vanina.component';
import { FormFactureComponent } from './form-facture/form-facture.component';

@NgModule({
  declarations: [
    AppComponent,
    AdresseclientComponent,
    AdresseVaninaComponent,
    FormFactureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
