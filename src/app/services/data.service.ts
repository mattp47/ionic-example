import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  // added by Matt Paice
  products: any = [
    {
      id: '1',
      title: 'T-Shirt',
      price: 10,
      img: '../assets/shapes.svg'
    },
    {
      id: '2',
      title: 'Hoodie',
      price: 17,
      img: '../assets/shapes.svg'
    },
    {
      id: '1',
      title: 'Belt',
      price: 10,
      img: '../assets/shapes.svg'
    },
  ];

}
