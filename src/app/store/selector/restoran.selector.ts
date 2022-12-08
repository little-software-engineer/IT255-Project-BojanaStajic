import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RestoranState } from "../state/restoran.state";

const selectRestorans = (state: any) => state.restoran;

export const selectedRestorans = createSelector(
    selectRestorans,
    (state: RestoranState) => {
        return state.restorans
    }
);

export const selectRestoranss = createSelector(
    createFeatureSelector('restorans'),
    (state: RestoranState) => {
        return state.restorans;
    }
)
