import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Restoran } from 'src/app/interfaces/restoran';
import { User } from 'src/app/interfaces/user';
import { Order } from 'src/app/model/order.model';
import { restoranService } from 'src/app/services/restoran.service';
import { UserService } from 'src/app/services/user.service';
import { addItem } from 'src/app/store/actions/order.actions';
import { GetRestorans } from 'src/app/store/actions/restoran.action';
import { selectedRestorans } from 'src/app/store/selector/restoran.selector';
import { RestoranState } from 'src/app/store/state/restoran.state';

@Component({
  selector: 'app-restorani',
  templateUrl: './restorani.component.html'
})
export class RestoraniComponent implements OnInit {

  public restorans$: Observable<Restoran[]>;
  public restorans: Restoran[];

  public restorans_vlasnistvo: Restoran[];
  cenaStola: string= '';
  user: User = {};
  restoran: Restoran;

  todoList:any = [];
  _store: any;
  _router: any;

  constructor(private restoranService: restoranService,   private userService: UserService){
  this.user = this.userService.prijavljen;}

  ngOnInit(): void {
    this.listTodos();
  }

  listTodos(){
    this.restoranService.list().subscribe((response)=>{
      this.todoList = response;
    },(error=>{

    }));
  }

  obrisi(id: number) {
    if (window.confirm('Jeste li sigurni da zelite da obrisete restoran?')) {
      this.restorans$ = this._store.pipe(select(selectedRestorans));
      this.restorans$.subscribe(val => {
        this.restorans = JSON.parse(JSON.stringify(val));
        this.restoranService.deleteRestoran(id).subscribe(() => {
          this.restorans.forEach((curr, i) => {
            if (id === curr.id) {
              this.restorans.splice(i, 1);
            }
          });
        });
      })
    }
  }

  kupi(restoranr: Restoran, user: User) {
    this.restoran = restoranr;
    this.restoran.vlasnistvo = user.id
    this._router.events.subscribe((val: any) => {
      this.restoranService.updateRestoran(this.restoran).subscribe((restoran) => {
        this.restorans.forEach((element, index) => {
          if (element.id === restoran.id) {
            this.restorans[index] = restoran;


          }
        });
      });
    });
    this._router.navigate(['/orders']);
  }

  seeDetails(id: number){
    this._router.navigate(['/restorani/', id]);
  }

  makeOrder() {

    let order = new Order(this.restoran, this.user);

    this._store.dispatch(addItem({ order: order}));


  }
}
