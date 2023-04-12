import { RegistrazioneComponent } from './components/user/registrazione/registrazione.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { DetailComponent } from './components/products/detail/detail.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { EsempioCombineComponent } from './components/esempio-combine/esempio-combine.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { LoggedInGuard } from './logged-in.guard';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'prodotti',component: ProductsComponent, children:[
    {path:'dettaglio/:title/:_id', component: DetailComponent},
    {path:'', pathMatch: 'full', component:ProductsListComponent}
  ]},
  {path:'registrazione',component: RegistrazioneComponent},
  {path:'login', component: LoginComponent},
  {path:'profile', component: ProfileComponent, canActivate: [LoggedInGuard]},
  {path:'new-product', component: NewProductComponent},
  {path:'combine', component: EsempioCombineComponent},
  {path:'**',redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
