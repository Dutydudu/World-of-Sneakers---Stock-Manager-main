import { Injectable } from '@angular/core';
import { Shoes } from 'src/models/shoes';

@Injectable({
  providedIn: 'root'
})
export class ConsultService {

  constructor() { }

  public consult(): Array<Shoes> {
    let shoes: Shoes[] = [];

    for(let i = 0; i < localStorage.length; i++) {
      shoes.push(
        JSON.parse(localStorage.getItem(localStorage.key(i)))
      );
    }
    return shoes;
  }
}
