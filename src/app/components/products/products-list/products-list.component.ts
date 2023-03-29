import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit{
  prodotti: Product[];
  titoloProdotto: string;

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

  riceviMessaggio(e: any){
    if(this.titoloProdotto == e){
      this.titoloProdotto='';
    }else{
      this.titoloProdotto=e;
    }
  }

  listaUomo(){
    return this.prodotti=this.prodotti.filter(_id => _id.sesso ==='uomo');
  }

  listaDonna(){
    return this.prodotti=this.prodotti.filter(_id => _id.sesso ==='donna');
  }
}
