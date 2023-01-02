import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarRatingComponent } from './component/star-rating/star-rating.component';



@NgModule({
  declarations: [
    StarRatingComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarRatingComponent,
  ]
})
export class SharedModule { }
