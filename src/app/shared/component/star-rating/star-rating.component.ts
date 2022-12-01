import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnChanges {
  public starWidth!: number;
  

  @Input()
  public rating = 2;

  ngOnChanges() {
    this.starWidth = this.rating * 125 / 5;
  }


}
