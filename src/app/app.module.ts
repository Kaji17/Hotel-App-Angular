import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import localFr from '@angular/common/locales/fr';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HotelModule } from './hotels/hotel.module';
import { AppRoutingModule } from './app-routing.module';
registerLocaleData(localFr, 'fr')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HotelModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
