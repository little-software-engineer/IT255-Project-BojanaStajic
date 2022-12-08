import { EnumRestoranAction, RestoranActions } from "../actions/restoran.action"
import { initalRestoranState } from "../state/restoran.state"

export function RestoranReducer(
    state = initalRestoranState,
    action: RestoranActions
) {
    switch (action.type) {
        case EnumRestoranAction.GetRestoranSuccess: {
            return {
                ...state,
                Restorans: action.payload
            };
        }
        default:
            return state;
    }
}
