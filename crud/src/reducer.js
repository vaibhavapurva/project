import { SET_USERS , EDIT_USERS, LOGIN_USERS , SET_USER_ADD, SIGNIN_USERS } from "./actions";

const initialState={
    users :[],
    records: {},
    token:localStorage.getItem("jwt_token")
     
}


function user(state = initialState  , action){
    switch(action.type){
        case SIGNIN_USERS:
            console.log('loginn', action.payload)
            return{
                ...state,
                
                token :action.payload.token,
            }

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