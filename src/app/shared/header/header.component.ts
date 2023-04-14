import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ReplaySubject, take } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user: any;

  ruolo:any;

  testo=new ReplaySubject;

  ricerca: string='';

  constructor (
    private router: Router,
     public authService: AuthService,
     private productService: ProductService,
     private userService: UserService
     ){}

  ngDoCheck(): void {
    if(JSON.parse(localStorage.getItem('user')) !==null){
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('user')) != null){
      this.ruolo=JSON.parse(localStorage.getItem('user')).role;
    }
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  risultato(){
    this.productService.testoCercato.next(this.ricerca);
    this.router.navigate([`/cerca/${this.ricerca}`]);
  }

  onGetUser(email): void{
    this.userService.getUser(email).pipe(take(1))
    .subscribe({
      next: res =>{
        this.ruolo=res.role;
      },
      error: err => console.log(err)
    })
   }
}
