import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { registerLocaleData } from '@angular/common';
import {NgPipesModule} from 'ngx-pipes';

import localFr from '@angular/common/locales/fr';
import { StarRatingComponent } from './shared/component/star-rating/star-rating.component';

registerLocaleData(localFr, 'fr')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HotelListComponent,
    StarRatingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgPipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
