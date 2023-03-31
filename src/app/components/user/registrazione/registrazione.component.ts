import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { CustomValidator } from './custom.Validator';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent {
  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    cognome: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    ripetiPassword: new FormControl('', Validators.required),
    accetto: new FormControl('',Validators.requiredTrue),
    numeroTelefono: new FormControl('', Validators.required),
    dataNascita: new FormControl('', Validators.required),
    strada: new FormControl(''),
    provincia: new FormControl(''),
    cap: new FormControl(''),
    citta: new FormControl(''),
  },
  [CustomValidator.MatchValidator('password', 'ripetiPassword')]
  )

  onSubmit(){
    console.log(this.form.value);
  }

}
