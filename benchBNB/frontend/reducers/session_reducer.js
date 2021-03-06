import { 
    RECEIVE_CURRENT_USER, 
    LOGOUT_CURRENT_USER,  
} from "../actions/session_actions";

export const sessionReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign( {}, { id: action.user.id });
        case LOGOUT_CURRENT_USER:
            return Object.assign( {}, _nullSession); 
        default:
            return state;
    }
}

const _nullSession = {
    id: null
}