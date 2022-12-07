import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Restoran } from 'src/app/interfaces/restoran';
import { User } from 'src/app/interfaces/user';
import { Order } from 'src/app/model/order.model';
import { restoranService } from 'src/app/services/restoran.service';
import { UserService } from 'src/app/services/user.service';
import { GetRestorans } from 'src/app/store/actions/restoran.action';
import { selectedRestorans } from 'src/app/store/selector/restoran.selector';
import { RestoranState} from 'src/app/store/state/restoran.state';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {
  user: User = {};
  allRestoran: Object;
  id: number;
  public restoran: Restoran;
  public restorans: any = [];
  loaded = false;
  todoList: any = [];

  currentDate = new Date();
  constructor(
    private _route: ActivatedRoute,
    private restoran_service: restoranService,
    private router: Router
  ) {
    _route.params.subscribe((params) => (this.id = params['id']));
  }

  ngOnInit() {
    this.restoran_service.getRestoran(this.id).subscribe((data) => {
      this.restoran = data;
      this.loaded = true;
    });
  }

}
