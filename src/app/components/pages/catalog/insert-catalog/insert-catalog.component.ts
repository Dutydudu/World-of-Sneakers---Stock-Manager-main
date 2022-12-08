import { Component, OnInit, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { InsertService } from 'src/app/services/catalog/insert.service';
import { Shoes } from 'src/models/shoes';

@Component({
  selector: 'app-insert-catalog',
  templateUrl: './insert-catalog.component.html',
  styleUrls: ['./insert-catalog.component.css']
})
export class InsertCatalogComponent implements OnInit {

  public data: Shoes;

  constructor(
    private insertService: InsertService
  ) {}

  ngOnInit(): void {
    this.data = new Shoes();
  }

  public save(form: NgForm) {
    if(form.valid) {
      this.insertService.save(this.data);
      alert("Inserido com sucesso!")
    }
    else alert("Preencha todos os campos!")
  }

}
