import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  prodotti: Product[];

  constructor(private productService: ProductService){};

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (response)=>{
        this.prodotti=response;
      },
      error: (error)=>{
        console.log(error);
      }
    })
  }

}
