import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CommandeComponent } from './commande/commande.component';
import { CommandeListElodieComponent } from './commande-list-elodie/commande-list-elodie.component';
import { OrdreServiceService } from './ordre-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CommandeComponent,
    CommandeListElodieComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [OrdreServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
