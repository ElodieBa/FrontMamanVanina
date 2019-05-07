import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CommandeListComponent } from './commande-list/commande-list.component';
import { CommandeDetailComponent } from './commande-detail/commande-detail.component';
import { RoutModule } from './rout/rout.module';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandeListComponent,
    CommandeDetailComponent,
    MenuComponent,
    AccueilComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
