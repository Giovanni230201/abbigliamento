import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
prodotti: Product[];

name: string;
email: string;

constructor(
  private productService: ProductService,
  private userService: UserService
  ){}

ngOnInit(): void {
  this.prendiProdotti();
  this.prendiDatiUtente();
  }

  prendiProdotti(){
    this.productService.getProducts().subscribe({
      next: (response)=>{
        this.prodotti=response;
        this.prodotti=this.prodotti.sort((a,b) => b._id - a._id).slice(0,4);
      },
      error: (error)=>{
        console.log(error);
      }
    })
  }

  prendiDatiUtente(){
    this.userService.datiUtente.subscribe((res: any) => {
      localStorage.setItem('name', res.name);
      localStorage.setItem('email', res.email);
    });

    if(localStorage.getItem('name')){
      this.name=localStorage.getItem('name');
      this.email=localStorage.getItem('email');
    }
  }

  closeModal(){
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.clear;

    this.name='';
    this.email='';
  }


}
