import { Component, EventEmitter, Input, Output, OnDestroy, OnInit} from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Observable, take, map } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: [MessageService]
})
export class ProductCardComponent implements OnInit, OnDestroy  {
 // products: Product[];

  @Input() pag: string;

  @Output() messaggio= new EventEmitter();

  prodottiTotali: number;
  page=1;
  prodottiPerPagina=5;
  prodotti: Product[];
  ruolo: any;
  loading=true;

  products$ = this.productService.getProducts().pipe(
      map(res => {
        this.prodotti = res;
        if(res){
          this.messageService.add({severity:'success', summary:'', detail:'Prodotti caricati correttamente'})
        }
      }),
    );

 // productss$= this.productService.getProducts();

  constructor(
    private productService : ProductService,
    private userService: UserService,
    private messageService: MessageService,
    private router: Router
    ){}

    ngOnInit(): void {
      if(JSON.parse(localStorage.getItem('user')) != null) {
        this.userService.userRole.subscribe({
          next: (res) => {
            this.ruolo = res;
          },
          error: (err) => {
            console.log(err);
          }
        })
      }
  }

  ngOnDestroy(): void {
    console.log("utente uscito dal componente")
  }

  inviaTitolo(titolo: string){
    this.messaggio.emit(titolo);
  }

  paginate(event) {
    event.page = event.page + 1;
    this.page = event.page;
  }
}
