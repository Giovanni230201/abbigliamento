import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
  prodotto: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ){}
  ngOnInit(): void {
    this.onGetProduct();
    }

    onGetProduct(): void{
      const id = Number(this.activatedRoute.snapshot.paramMap.get('_id'));


      this.productService.getProduct(id).subscribe({
        next: (res) => {
          this.prodotto = res;
        },
        error: (err) => {
          console.log(err);
        }
      })
    }

    onGetProduct2(): void {
      this.activatedRoute.params.subscribe((parametriUrl) => {
        const id = parametriUrl['_id'];
        const idNumerico = Number(id);

        this.productService.getProduct(idNumerico).subscribe({
          next: (res) => {
            this.prodotto = res;
          },
          error: (err) => {
            console.log(err);
          }
        })
      })
    }
}
