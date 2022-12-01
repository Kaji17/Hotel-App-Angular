import { Component, OnInit } from '@angular/core';
import { IHotel } from '../shared/model/hotel';
import { HotelListService } from '../shared/service/hotelList.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {
  public errorMsg!: string;

  constructor(private hotellist: HotelListService){};
  public hotels: IHotel[]= [];
  // Listes D'hotels retourner après recherche
  public filterHotelList: IHotel[] = [];
  private _hotelFilter = "mot";
  ngOnInit(): void {

    this.hotellist.getHotels().subscribe({
      next: hotels=> {
        this.hotels = hotels
        this.filterHotelList = this.hotels;
      },
      error: err=> this.errorMsg= err
    });
    // Initialisation de la liste de recherche a la liste de tout les hotels au debut du prog

    this.hotelFilter = "";
  }

  public showBadge!: boolean;

  public toggleIsNewBadge(): void {
    this.showBadge = !this.showBadge;
  }

  public get hotelFilter(): string {
    return this._hotelFilter;
  }

  public set hotelFilter(filter: string) {
    this._hotelFilter = filter.toLocaleLowerCase();
    this.filterHotelList = this._hotelFilter ? this.filterHotel(this.hotels, this.hotelFilter) : this.hotels;

  }

  private filterHotel(array: Array<IHotel>, request: string) {
    return array.filter(function (el) {
      return el.hotelName.toLocaleLowerCase().indexOf(request) !== -1
    })
  }


}

