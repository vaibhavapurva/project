import { SET_USERS, SET_ADD_USERS, EDIT_USERS, SIGNIN_USERS, ADD_POST, SET_POST, SET_LOGIN_DATA, SET_ADD_POST, SET_ADD_COMMENT, EDIT_POST, SET_EDIT_POST, COMMENT_BY_ID, LOGOUT } from "./actions";

const initialState = {
    users: [],
    records: {},
    comment: [],
    token: localStorage.getItem("jwt_token"),
    userId: localStorage.getItem("user_id"),
    name: localStorage.getItem("user_name"),
    addpost: "",
    post: [],
    getPost: [],
    signup: {
        name: "",
        email: "",
        city: "",
        field: ""
    },
    login: {
        email: "",
        password: "",
    },
    setPost: {
        title: "",
        body: "",
        userId: localStorage.getItem("user_id"),
    },
    setComment: {
        PostId: localStorage.getItem("postid"),
        body: "",
        name: localStorage.getItem("user_name"),
    }

}


function user(state = initialState, action) {
    switch (action.type) {
        case SIGNIN_USERS:
            return {
                ...state,
                userId: action.payload.id,
                token: action.payload.token,
                name: action.payload.name,
            }
        case LOGOUT:
            return{
                ...state,
                token:null
            }
        case ADD_POST:
            return {
                ...state,
                addpost: action.payload,

            }

        case SET_USERS:
            return {

                ...state,
                users: action.payload,
            }

        case SET_ADD_USERS:
            return {
                ...state,
                signup: action.payload,

            }
        case SET_LOGIN_DATA:
            return {
                ...state,
                login: action.payload,
            }

        case SET_ADD_POST:
            return {
                ...state,
                setPost: action.payload,
            }
        case SET_ADD_COMMENT:
            return {
                ...state,
                setComment: action.payload,
            }
        case SET_POST:

            return {
                ...state,
                post: action.payload,
            }
        case EDIT_USERS:
            return {
                ...state,
                records: { ...state.records, ...action.payload },

            }

        case EDIT_POST:
            return {
                ...state,
                getPost: action.payload
            }

        case SET_EDIT_POST:
            return {
                ...state,
                getPost: action.payload
            }
        case COMMENT_BY_ID:
            return {
                ...state,
                comment: action.payload
            }

        default:
            return state
    }
}

export default user;