export const SET_USERS = 'SET_USERS';
export const EDIT_USERS = "EDIT_USERS";
export const LOGIN_USERS = "LOGIN_USERS";




export const setUser =(payload)=>{
    return{
        type:SET_USERS,
        payload :payload
    }
}

export const editUsers= (payload)=>{
    console.log("edit user")
    return {
        type : EDIT_USERS,
        payload : payload
    }
}


export const loginUsers= (payload)=>{

    return {
        type : LOGIN_USERS,
        payload : payload
    }
}