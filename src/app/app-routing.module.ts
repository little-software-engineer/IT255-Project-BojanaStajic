import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocetnaComponent } from './pages/pocetna/pocetna.component';
import { RestoraniComponent } from './pages/restorani/restorani.component';
import { RestoranViewComponent } from './pages/restorani-view/restorani-view.component';
import { DodajRestoranComponent } from './pages/dodaj-restoran/dodaj-restoran.component';
import { IzmeniComponent } from './pages/izmeni/izmeni.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { KorisniciComponent } from './pages/korisnici/korisnici.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrujComponent } from './pages/registruj/registruj.component';

const routes: Routes = [
  {path: '', redirectTo: 'pocetna', pathMatch:'full'},
  {path:'pocetna', component: PocetnaComponent},
  {path:'restorani', component: RestoraniComponent},
  {path:'restorani/:id', component:RestoranViewComponent},
  {path:'dodaj', component:DodajRestoranComponent},
  {path:'izmeni/:id', component:IzmeniComponent},
  {path:'kontakt', component:KontaktComponent},
  {path:'login', component:LoginComponent},
  {path:'registruj', component:RegistrujComponent},
  {path:'korisnici', component:KorisniciComponent},
  {path:'orders/:id', component:OrdersComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

