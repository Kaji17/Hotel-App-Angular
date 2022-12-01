import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HotelListComponent } from './hotels/hotel-list/hotel-list.component';
import { registerLocaleData } from '@angular/common';
import { NgPipesModule } from 'ngx-pipes';
import { HttpClientModule } from "@angular/common/http";

import localFr from '@angular/common/locales/fr';
import { StarRatingComponent } from './shared/component/star-rating/star-rating.component';
import { HomeComponent } from './home/home.component';
import { HotelDetailComponent } from './hotels/hotel-detail/hotel-detail.component';
import { RouterModule } from '@angular/router';
import { HotelDetailGuard } from './hotels/shared/guard/hotel-detail.guard';

registerLocaleData(localFr, 'fr')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HotelListComponent,
    StarRatingComponent,
    HomeComponent,
    HotelDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgPipesModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "home", component: HomeComponent},
      {path: "hotels", component: HotelListComponent},
      {
        path: "hotels/:id", component: HotelDetailComponent,
        canActivate: [HotelDetailGuard]
      },
      {path: "", redirectTo: "home", pathMatch: "full"},
      {path: "**", redirectTo: "home", pathMatch: "full"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
