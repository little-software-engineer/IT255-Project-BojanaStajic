import { FilterByUserPrice } from './pages/restorani/restoranFilter';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { restoranService } from './services/restoran.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { RestoraniComponent } from './pages/restorani/restorani.component';
import { RestoranViewComponent } from './pages/restorani-view/restorani-view.component';
import { DodajRestoranComponent } from './pages/dodaj-restoran/dodaj-restoran.component';
import { IzmeniComponent } from './pages/izmeni/izmeni.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { KorisniciComponent } from './pages/korisnici/korisnici.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { LoginComponent } from './pages/login/login.component';
import { PocetnaComponent } from './pages/pocetna/pocetna.component';
import { RegistrujComponent } from './pages/registruj/registruj.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from './store/effects/user.effects';
import { RestoranEffect } from './store/effects/restoran.effects';
import { UserService } from './services/user.service';
import { reducers } from './store/reducers';
import { NgImageSliderModule } from 'ng-image-slider';
import { ONamaComponent } from './o-nama/o-nama.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    RestoraniComponent,
    RestoranViewComponent,
    DodajRestoranComponent,
    IzmeniComponent,
    KontaktComponent,
    KorisniciComponent,
    OrdersComponent,
    LoginComponent,
    PocetnaComponent,
    RegistrujComponent,
    FilterByUserPrice,
    ONamaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgImageSliderModule,
    EffectsModule.forRoot([UserEffect, RestoranEffect]),
    StoreModule.forRoot(reducers)
  ],
  providers: [HttpClientModule, restoranService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
