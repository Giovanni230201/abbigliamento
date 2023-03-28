import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{
  images=[
    {id:1,
    label:'Abbigliamento uomo'},
   {id:2,
      label:'Abbigliamento donna'},
      {id:3,
        label:'Abbigliamento bambini'},

  ];

  percorso="../assets/images/abbigliamento-";

  constructor(){}

  ngOnInit(): void{}
}
