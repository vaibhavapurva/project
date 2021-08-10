import { SET_USERS , EDIT_USERS, LOGIN_USERS } from "./actions";

const initialState={
    users :[],
    records: {},
    login:{},
}


function user(state = initialState  , action){
    switch(action.type){
        case SET_USERS:
            return{

                ...state,
                users:action.payload,
            }
        case EDIT_USERS:
            console.log("ecit user redu")
            return {
                ...state,
                records: { ...state.records, ...action.payload },

            }
        case LOGIN_USERS:
            
            return {
                ...state,
                login: { ...state.login, ...action.payload },

            }
        default:
            return state
    }
}

export default user;