import { GetRestorans } from 'src/app/store/actions/restoran.action';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restoran } from 'src/app/interfaces/restoran';
import { restoranService } from 'src/app/services/restoran.service';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-restorani-view',
  templateUrl: './restorani-view.component.html',
})
export class RestoranViewComponent implements OnInit {
  user: User = {};
  allRestoran: Object;
  id: number;
  public restoran: Restoran;
  public restorans: any = [];
  loaded = false;
  todoList: any = [];


  constructor(
    private _route: ActivatedRoute,
    private restoran_service: restoranService,
    private router: Router,
    private userService: UserService
  ) {
    this.user = this.userService.prijavljen;
    _route.params.subscribe((params) => (this.id = params['id']));
  }

  ngOnInit(): void {
    this.restoran_service.getRestoran(this.id).subscribe((data) => {
      this.restoran = data;
      this.loaded = true;
    });
  }

  onDelete() {
    this.restoran_service.delete(this.restoran).subscribe(() => {
      this.router.navigate(['/restorani']);
    });
  }

  onUpdate() {
    this.router.navigate(['/izmeni', this.restoran.id]);
  }
}
