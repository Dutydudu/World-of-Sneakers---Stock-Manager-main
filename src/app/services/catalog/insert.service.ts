import { Injectable, Input } from '@angular/core';
import { Shoes } from 'src/models/shoes';

@Injectable({
  providedIn: 'root'
})
export class InsertService {

  constructor() {}

  public save(data: Shoes) {
    localStorage.setItem(data.id.toString(), JSON.stringify(data))
  }

}
