import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { Restoran } from "src/app/interfaces/restoran";
import { restoranService } from "src/app/services/restoran.service";
import { EnumRestoranAction, GetRestorans, GetRestoranSuccess } from "../actions/restoran.action";
import { switchMap } from "rxjs/operators";

@Injectable()
export class RestoranEffect {
    constructor(private _actions$: Actions, private RestoranService: restoranService) {

    }

    getRestorans$ = createEffect(() =>
        this._actions$.pipe(
            ofType<GetRestorans>(EnumRestoranAction.GetRestorans),
            switchMap(() => this.RestoranService.fetchRestorans()),
            switchMap((RestoranHttp: Restoran[]) => {
                return of(new GetRestoranSuccess(RestoranHttp))
            }
            )
        )
    )
}
