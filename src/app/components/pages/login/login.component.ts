import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private fb: FormBuilder, private authService:AuthService) {
    this.loginForm = fb.group(
      {
        email:['',[Validators.email, Validators.required]],
        password:['',[Validators.required, Validators.minLength(6)]]
      }
    )
   }

  ngOnInit(): void {
  }

  submit() {

    let dataLogin = this.loginForm.getRawValue();

    if(this.loginForm.valid){
      this.authService.login(dataLogin).subscribe(
        dataServer => {
          if(dataServer.length > 0) {
            if(dataLogin.password == dataServer[0].password) {

              delete dataServer[0].password;
              localStorage.setItem('user',JSON.stringify(dataServer[0]))
              alert('Usuario logado com sucesso!')

            } else{
              alert('Usuario ou senha Invalido!')
            }
          } else {
            alert('Usuario nao cadastrado!')
          }

        }
      )
    }
  }

}
