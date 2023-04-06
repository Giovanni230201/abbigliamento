import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {

  sesso:string;
  title: string;
  description: string;
  image: string;
  price: number;
  published: boolean;

  constructor(
    private modal: NgbModal,
    private router: Router,
    private productService: ProductService
  ){}

  form = new FormGroup({
    sesso: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required ),
    published: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.prendiDatiProdotto();
  }

  aggiungiProdotti(): void {
    const product = {
      sesso: this.form.value.sesso,
      title: this.form.value.title,
      description: this.form.value.description,
      image: this.form.value.image,
      price: this.form.value.price,
      published: this.form.value.published,
    }
    this.productService.insertProduct(product).subscribe(res => {
      console.log('response is ', res)
    })
    this.productService.datiProdotto.next(product);
  }

  prendiDatiProdotto() {
    this.productService.datiProdotto.subscribe((res: any) => {
      this.sesso=res.sesso;
      this.title = res.title;
      this.description = res.description;
      this.image = res.image;
      this.price = res.price;
      this.published = res.published;
    })
  }
  closeModal() {
    this.sesso='';
    this.title = '';
    this.description = '';
    this.image = '';
    this.price = null;
    this.published = false;
  }

  open(content: any, titolo?: string) {
    let title = titolo;
    this.modal.open(content, { ariaLabelledBy: 'modale servizi', size: 'lg', centered: true}).result.then((res) => {
      this.svuotaCampi();
      this.router.navigate(['new-recipe']);
    }).catch((res) => {
      this.router.navigate(['ricette']);
    });
  }

  svuotaCampi(){
    this.productService.datiProdotto.subscribe((res: any) => {
      res.sesso='';
      res.title = '';
      res.description = '';
      res.image = '';
      res.price = null;
      res.published = false;
    })
  }

}
