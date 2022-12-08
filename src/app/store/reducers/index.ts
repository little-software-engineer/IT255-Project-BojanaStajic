import { ActionReducerMap } from "@ngrx/store";
import { RestoranState } from "../state/restoran.state";
import { UserState } from "../state/user.state";
import { RestoranReducer } from "./restoran.reducer";
import { userReducer } from "./user.reducer";

export const rootReducer = {};

export interface AppState {
    restoran: RestoranState;
    user: UserState;
}

export const reducers: ActionReducerMap<AppState, any> = {
    restoran: RestoranReducer,
    user: userReducer
};
