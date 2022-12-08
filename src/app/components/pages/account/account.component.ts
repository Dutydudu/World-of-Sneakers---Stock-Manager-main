import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accountForm: FormGroup

  constructor(private fb: FormBuilder, private authService:AuthService) {
    this.accountForm = fb.group(
      {
        name:['',[Validators.required]],
        companyName:['',[Validators.required]],
        email:['',[Validators.email, Validators.required]],
        password:['',[Validators.required, Validators.minLength(6)]]
      }
    )
   }

  ngOnInit(): void {
  }

  submit() {

    let dataAccount = this.accountForm.getRawValue();

    if(this.accountForm.valid){
      this.authService.account(dataAccount).subscribe(
        dataServer => {
              delete dataServer[0].password;
              localStorage.setItem('user',JSON.stringify(dataServer[0]))
              alert('Cadastrado e logado com sucesso!')

        }
      )
    }
  }

}
