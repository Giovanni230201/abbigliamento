import { Component, EventEmitter, Input, Output, OnDestroy, OnInit} from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Observable, take, map } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
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
  prodottiPerPagina=4;
  prodotti: Product[];
  ruolo: any;
  loading=true;

  // products$ = this.productService.getProducts().pipe(
  //     map(res => {
  //       this.prodotti = res;
  //       if(res){
  //         this.messageService.add({severity:'success', summary:'', detail:'Prodotti caricati correttamente'})
  //       }
  //     }),
  //   );

 // productss$= this.productService.getProducts();


 ricercato: any;


 products$ = this.productService.getProducts().pipe(
   map(response => {
     if(this.pag === 'ricerca') {
       this.productService.testoCercato.subscribe({
         next: (res) => {
           this.ricercato = res;
            if(this.ricercato) {
         this.productService.findProducts(this.ricercato).subscribe({
           next: (res) => {
             this.prodotti = res;
             console.log(res);
           },
           error: (err) => {
             console.log(err);
           }
         })
       }
         },
         error: (err) => {
           console.error(err);
         }
       });

     } else {
       this.prodotti = response;
       if(response) {
         this.messageService.add({severity: 'success', summary:'Completato', detail: 'Prodotti caricati correttamente', life: 3000})
       }
     }
   }),
 );


  constructor(
    private productService : ProductService,
    private messageService: MessageService,
    private router: Router
    ){}

  //   ngOnInit(): void {
  //     if(JSON.parse(localStorage.getItem('user')) != null) {
  //       this.userService.userRole.subscribe({
  //         next: (res) => {
  //           this.ruolo = res;
  //         },
  //         error: (err) => {
  //           console.log(err);
  //         }
  //       })
  //     }
  // }

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('user')) != null){
      this.ruolo=JSON.parse(localStorage.getItem('user')).role;
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
