import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { AccountComponent } from './components/pages/account/account.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { ConsultCatalogComponent } from './components/pages/catalog/consult-catalog/consult-catalog.component';
import { DeleteCatalogComponent } from './components/pages/catalog/delete-catalog/delete-catalog.component';
import { InsertCatalogComponent } from './components/pages/catalog/insert-catalog/insert-catalog.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'catalogo', component: CatalogComponent, canActivate: [AuthGuardGuard]},
  {path: 'account', component: AccountComponent},
  {path: 'login', component: LoginComponent},
  {path: 'consult-catalog', component: ConsultCatalogComponent, canActivate: [AuthGuardGuard]},
  {path: 'delete-catalog', component: DeleteCatalogComponent, canActivate: [AuthGuardGuard]},
  {path: 'insert-catalog', component: InsertCatalogComponent, canActivate: [AuthGuardGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
