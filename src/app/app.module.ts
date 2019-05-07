import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';
import { DetailClientComponent } from './detail-client/detail-client.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClientServiceService } from './client-service.service';
import { RoutModule } from './rout/rout.module';

@NgModule({
  declarations: [
    AppComponent,
    AjoutClientComponent,
    DetailClientComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutModule
  ],
  providers: [ClientServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
