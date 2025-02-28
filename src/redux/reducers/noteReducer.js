
import { FETCH_NOTES } from "../actions/noteAction";
const initState = { notes: []} ;
export const noteReducer =( state= initState , action ) => {
    switch (action.type) {
        case FETCH_NOTES :
            return {...state, notes: action.payload};
        default :
        return state;
    }
}