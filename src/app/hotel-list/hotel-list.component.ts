import { Component, OnInit } from '@angular/core';
import { IHotel } from '../model/hotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent {

  public hotels: IHotel[] =[
    {
      hotelId: 1,
      hotelName: "BelCote",
      hotelDescription: "Petit endroit chic pour les couples",
      hotelPrice: 2000,
      hotelLocation: "Abidjan",
      hotelImgUrl: "../../assets/img/hotel1.jpg",
      place: 20,
    },
    {
      hotelId: 2,
      hotelName: "Président",
      hotelDescription: "L'excelence en terme d'hotal",
      hotelPrice: 2500,
      hotelLocation: "Yamoussoukro",
      hotelImgUrl: "../../assets/img/hotel2.jpg",
      place: 30,
    },
    {
      hotelId: 3,
      hotelName: "Assinie",
      hotelDescription: "Bronzé en toute quiétude",
      hotelPrice: 1500,
      hotelLocation: "Assinie",
      hotelImgUrl: "../../assets/img/hotel3.jpg",
      place: 4,
    },
    {
      hotelId: 4,
      hotelName: "Hotel Djef",
      hotelDescription: "Rencontrer votre âme soeur",
      hotelPrice: 1000,
      hotelLocation: "Abidjan",
      hotelImgUrl: "../../assets/img/hotel4.jpg",
      place: 20,
    },
    {
      hotelId: 5,
      hotelName: "Palace of King",
      hotelDescription: "for king and queen",
      hotelPrice: 4000,
      hotelLocation: "Man",
      hotelImgUrl: "../../assets/img/hotel5.jpg",
      place: 100,
    },
    {
      hotelId: 6,
      hotelName: "Mille Bougie",
      hotelDescription: "Uniquement réserver au jeu",
      hotelPrice: 1700,
      hotelLocation: "Abidjan",
      hotelImgUrl: "../../assets/img/hotel6.jpg",
      place: 17,
    },

  ];

  public hotelFilter= "mot";
  
  public showBadge!: boolean;
  
  public toggleIsNewBadge(): void{
    this.showBadge = !this.showBadge;
  }
}
