import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cibando';

  images=[
    {id:1,
    label:'Abbigliamento uomo'},
   {id:2,
      label:'Abbigliamento donna'},
      {id:3,
        label:'Abbigliamento bambini'}
  ];

  percorso="../assets/images/abbigliamento-";
}
