import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHotel } from 'src/app/hotels/shared/model/hotel';
import { HotelListService } from 'src/app/hotels/shared/service/hotelList.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit {
  public hotel : IHotel = <IHotel>{};

  constructor(
    private hotelslistservice: HotelListService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }


  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.hotelslistservice.getHotels().subscribe((hotels: IHotel[])=>{
      this.hotel = hotels.find(hotel=> hotel.hotelId === id)!;
      console.log("Hotel:", this.hotel)
    })
  }

  public backToList(): void{
    this.router.navigate(['/hotels']);
  }

}
