import { Restoran } from "src/app/interfaces/restoran";

export interface RestoranState {
    restorans: Array<Restoran>;
}

export const initalRestoranState: RestoranState = {
    restorans: []
}
