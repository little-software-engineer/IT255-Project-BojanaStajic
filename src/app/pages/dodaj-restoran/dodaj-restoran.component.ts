import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Restoran } from 'src/app/interfaces/restoran';
import { User } from 'src/app/interfaces/user';
import { restoranService } from 'src/app/services/restoran.service';
import { UserService } from 'src/app/services/user.service';
import { RestoranState } from 'src/app/store/state/restoran.state';
import { selectedRestorans } from 'src/app/store/selector/restoran.selector';

@Component({
  selector: 'app-dodaj-restoran',
  templateUrl: './dodaj-restoran.component.html'
})
export class DodajRestoranComponent implements OnInit {

  Restoran: Restoran = {
    id: 0,
    naziv: '',
    cenaStola: 0,
    lokacija: '',
    drzava: '',
    otvoreno: 0,
    vlasnistvo: 0


  };


  constructor(private Restoran_service: restoranService, private router: Router) {

  }

  addRestoran(formObj: Restoran) {
    this.Restoran_service.addRestoranr(formObj).subscribe((response: any) => {
      window.alert("Uspesno ste dodali restoran.")
      this.router.navigate(['/restorani']);
    })
  }

  ngOnInit(): void {
  }
}

