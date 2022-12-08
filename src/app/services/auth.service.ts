import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from 'src/models/users';
import { URL_API } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(values:{email: string, password: string}) {
    return this.http.get<Users[]>(`${URL_API}/users?email_like=`+values.email);
  }

  account(user: Users) {
    return this.http.post<Users[]>(`${URL_API}/users`, user);
  }

  clear() {
    localStorage.clear();
  }

  isAuthenticated(){
    return (localStorage.getItem('user') !== null ? true : false);
  }

  logout() {
    this.clear();
  }

}
