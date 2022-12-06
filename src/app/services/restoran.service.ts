import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Restoran } from '../interfaces/restoran';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { selectedRestorans } from '../store/selector/restoran.selector';
import { UserService } from './user.service';
import { User } from '../interfaces/user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class restoranService {

  private url: string = 'http://localhost:3000/restorani';

  public Restorans$: Observable<Restoran[]>;

  constructor(private _http: HttpClient, private _store: Store) {
    this.Restorans$ = this._store.pipe(select(selectedRestorans));
  }

  public fetchRestorans(): Observable<Restoran[]> {
    return this._http.get<Restoran[]>(this.url);
  }

  getRestoran(id: number){
    return this._http.get<Restoran>(`${this.url}/${id}`);
  }

  addRestoranr(restoran: Restoran) {
    return this._http.post(this.url, restoran);
  }

  updateRestoran(restoran: Restoran) {
    const modUrl: string = `${this.url}/${restoran.id}`;
    return this._http.put<Restoran>(modUrl, restoran);
  }

  deleteRestoran(id: number) {
    const modUrl: string = `${this.url}/${id}`;
    return this._http.delete<Restoran[]>(modUrl);
  }

  list() {
    return this._http.get(`${this.url}`);
  }
  getRestorans() {
    return this._http.get<Restoran[]>(this.url);
  }

  delete(restoran: Restoran){

    return this._http.delete<Restoran>(`${this.url}/${restoran.id}`);
  }

  update(restoran: Restoran){
    return this._http.put<Restoran>(`${this.url}/${restoran.id}`, restoran);
  }
}
