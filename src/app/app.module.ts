import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { AccountComponent } from './components/pages/account/account.component';

import { MatPaginatorModule, MatTabLabel, MatTableModule } from '@angular/material';
import { LoginComponent } from './components/pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultCatalogComponent } from './components/pages/catalog/consult-catalog/consult-catalog.component';
import { InsertCatalogComponent } from './components/pages/catalog/insert-catalog/insert-catalog.component';
import { DeleteCatalogComponent } from './components/pages/catalog/delete-catalog/delete-catalog.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    AboutComponent,
    CatalogComponent,
    AccountComponent,
    LoginComponent,
    ConsultCatalogComponent,
    InsertCatalogComponent,
    DeleteCatalogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatPaginatorModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
