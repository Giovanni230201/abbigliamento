import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{
  images=[
    {id:1,
    label:''},
   {id:2,
      label:' '},
      {id:3,
        label:' '},
        {id:4,
          label:' '},
          {id:5,
            label:' '}

  ];

  percorso="../assets/images/abbigliamento-";

  constructor(){}

  ngOnInit(): void{}
}
