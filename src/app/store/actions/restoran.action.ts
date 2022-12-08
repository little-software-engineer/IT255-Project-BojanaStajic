import { Action } from "@ngrx/store";
import { Restoran } from "src/app/interfaces/restoran";

export enum EnumRestoranAction {
    GetRestorans = '[Restoran] Get Restoran',
    GetRestoranSuccess = '[Restoran] Get Restoran Success',
}

export class GetRestorans implements Action {
    public readonly type = EnumRestoranAction.GetRestorans;
}

export class GetRestoranSuccess implements Action {
    public readonly type = EnumRestoranAction.GetRestoranSuccess;
    constructor(public payload: Restoran[]) { }
}

export type RestoranActions = GetRestorans | GetRestoranSuccess;

