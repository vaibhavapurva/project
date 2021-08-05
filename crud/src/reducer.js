import { SET_USERS , EDIT_USERS } from "./actions";

const initialState={
    users :[],
    records: {},
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
        default:
            return state
    }
}

export default user;