import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultCatalogComponent } from './consult-catalog.component';

describe('ConsultCatalogComponent', () => {
  let component: ConsultCatalogComponent;
  let fixture: ComponentFixture<ConsultCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
