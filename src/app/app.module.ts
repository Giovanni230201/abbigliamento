import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from 'src/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { DetailComponent } from './components/products/detail/detail.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';



@NgModule({
  declarations:[
    AppComponent,
    CarouselComponent,
    HomeComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    ProductCardComponent,
    DetailComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
