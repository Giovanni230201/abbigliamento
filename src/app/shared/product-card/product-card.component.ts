import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() products: Product[];

  @Input() pag: string;

  @Output() messaggio= new EventEmitter();

  inviaTitolo(titolo: string){
    this.messaggio.emit(titolo);
  }
}
