export const SET_USERS = 'SET_USERS';
export const SET_ADD_USERS = "SET_ADD_USERS";
export const SET_LOGIN_DATA = "SET_LOGIN_DATA";
export const SET_ADD_POST = "SET_ADD_POST";
export const SET_EDIT_POST = "SET_EDIT_POST";
export const SET_ADD_COMMENT = "SET_ADD_COMMENT";
export const COMMENT_BY_ID = 'COMMENT_BY_ID';
export const EDIT_USERS = "EDIT_USERS";
export const EDIT_POST = "EDIT_POST";
export const SIGNIN_USERS = "SIGNIN_USERS";
export const ADD_POST = "ADD_POST";
export const SET_POST = "SET_POST";
export const LOGOUT = "LOGOUT";
export const SEARCH_DATA = "SEARCH_DATA";

export const searchData =(payload)=>{
    return{
        type:SEARCH_DATA,
        payload:payload
    }
}

export const logout = (payload)=>{
    console.log("action logout");
    return{
        type : LOGOUT,
        payload :payload
    }
}


export const setAddUser = (payload) => {
    return {
        type: SET_ADD_USERS,
        payload: payload
    }
}

export const setEditPost = (payload) => {
    return {
        type: SET_EDIT_POST,
        payload: payload
    }
}


export const setLoginData = payload => {
    return {
        type: SET_LOGIN_DATA,
        payload: payload

    }
}

export const setAddPost = (payload) => {
    return {
        type: SET_ADD_POST,
        payload: payload,
    }
}

export const setAddComment = (payload) => {
    return {
        type: SET_ADD_COMMENT,
        payload: payload
    }
}


export const setUser = (payload) => {
    return {
        type: SET_USERS,

        payload: payload
    }
}

export const setPost = (payload) => {

    return {
        type: SET_POST,
        payload: payload
    }
}

export const addInPost = (payload) => {
    return {
        type: ADD_POST,
        payload: payload
    }
}

export const editUsers = (payload) => {
    return {
        type: EDIT_USERS,
        payload: payload
    }
}

export const editPost = (payload) => {
    return {
        type: EDIT_POST,
        payload: payload,
    }
}


export const commentById = (payload) => {
    return {
        type: COMMENT_BY_ID,
        payload: payload

    }
}


export const SignInUser = (payload) => ({
    type: SIGNIN_USERS,
    payload: payload
})


