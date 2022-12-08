import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCatalogComponent } from './insert-catalog.component';

describe('InsertCatalogComponent', () => {
  let component: InsertCatalogComponent;
  let fixture: ComponentFixture<InsertCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
