import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { URL_API } from '../app.api';
import { Users } from 'src/models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  users(): Observable<Users[]>{
    return this.http.get<Users[]>(`${URL_API}/users`);
  }

}
