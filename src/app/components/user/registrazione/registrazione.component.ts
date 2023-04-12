import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { CustomValidator } from './custom.Validator';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PrimeNGConfig } from 'primeng/api';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent {

  utenteInserito: any;

  constructor(
    private modalService: NgbModal,
    private userService: UserService,
    private config: PrimeNGConfig,
    private router: Router,
    ){}


  ngOnInit(): void {
    this.config.setTranslation({
      weak:'povera',
      medium: 'forte',
      strong: 'forte',
      passwordPrompt: 'scrivi una password'
    })
  }

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    cognome: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    ripetiPassword: new FormControl('', Validators.required),
    accetto: new FormControl('',Validators.requiredTrue),
    numeroTelefono: new FormControl('', Validators.required),
    numeroTelefonoFisso: new FormControl(''),
    dataNascita: new FormControl('', Validators.required),
    strada: new FormControl(''),
    provincia: new FormControl(''),
    cap: new FormControl(''),
    citta: new FormControl(''),
  },
  [CustomValidator.MatchValidator('password', 'ripetiPassword')]
  )


  onSubmit(){
    const user = this.form.value;
    this.userService.insertUser(user).pipe(take(1)).subscribe({
      next: (res) => {
        console.log(res);
        this.utenteInserito = res;
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.userService.datiUtente.next(user);
    this.router.navigate(['home'])
  }




open(content: any, titolo?: string){
  let title = titolo;

  this.modalService.open(content, { ariaLabelledBy: 'modale servizi', size: 'lg', centered: true}).result.then((res) => {
    console.log('azione da eseguire' + title)
  }).catch((res) => {
    console.log('nessuna azione da eseguire')
  });
}
}
