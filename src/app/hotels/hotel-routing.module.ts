import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailGuard } from './shared/guard/hotel-detail.guard';



@NgModule({
  imports: [
    RouterModule.forChild(
      [
        { path: "hotels", component: HotelListComponent },
        {
          path: "hotels/:id", component: HotelDetailComponent,
          canActivate: [HotelDetailGuard]
        }]
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class HotelRoutingModule { }
