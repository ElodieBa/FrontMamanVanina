import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CommandeComponent } from './commande/commande.component';
import { CommandeListComponent } from './commande-list/commande-list.component';
import { OrdreServiceService } from './ordre-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CommandeComponent,
    CommandeListComponent
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
