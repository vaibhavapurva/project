import axios from 'axios';
import { setUser, editUsers, SignInUser, addInPost, setPost, editPost, commentById } from '../actions';


const url = "http://localhost:9000/users";
const request = axios.create({
    baseURL: 'http://localhost:9000'
});

// export const getUsers = async(id)=>{
//     id = id || '';
//     return await axios.get(`${url}/${id}`);
// }

export const getUsers = () => async (dispatch, getState) => {
    try {
        console.log("api run")
        const response = await axios.get(url);

        dispatch(setUser(response.data));
    } catch (err) {
        console.log(err)
    }
}

export const getPosts = () => async (dispatch, getState) => {
    try {
        const response = await request.get('/users/getPost');
        console.log(response.data)
        dispatch(setPost(response.data));
    } catch (err) {
        console.log(err, "err aa gai getPost")
    }
}


export const requestGetUsersid = (id) => async (dispatch, getState) => {
    try {
        const response = await request.get(`/users/${id}`);
        console.log("requestiDUSer");
        console.log(response.data)
        dispatch(editUsers(response.data));
        return response;
    } catch (err) {
        console.log(err);
    }
}


export const requestGetpostId = (id) => async (dispatch, getState) => {
    try {
        const response = await request.get(`/users/getpostid/${id}`);
        console.log(response.data);
        dispatch(editPost(response.data));
        return response;
    } catch (err) {
        console.log("err post by id")
    }
}

export const requestGetCommentId = (PostId) => async (dispatch, getState) => {
    console.log("api comment ", PostId)
    try {
        const response = await request.get(`/users/getComment/${PostId}`);
        console.log(response.data)
        dispatch(commentById(response.data));
        return response;

    } catch (err) {
        console.log("errr get coment");
        // console.log(err);
    }
}

export const addUser = async (user) => {
    console.log(user)
    return await axios.post(`${url}/add`, user);
}

// export const loginUser =async(login)=>{
//     console.log(login)
//     return await axios.post(`${url}/signin`, login);
// }




// export const loginUser =async(login)=>{
//     const res=  await axios.post(`${url}/signin`, login);
//     console.log(res.status);
//     console.log(res.data);
//     // console.log(res.token)
//     window.localStorage.setItem("jwt_token",res.data.token)
//     return res
// }


export const loginUser = (login) => async (dispatch, getState) => {
    try {
        const response = await axios.post(`${url}/signin`, login);
        console.log(response);
        window.localStorage.setItem('jwt_token', response.data.token);
        window.localStorage.setItem('user_id', response.data.id);
        window.localStorage.setItem('user_name', response.data.name);
        dispatch(SignInUser(response.data));
    } catch (err) {
        console.log(err);
    }
}



export const addPostUser = (post) => async (dispatch, getState) => {
    try {
        const response = await axios.post(`${url}/addPost`, post);
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}
export const addUserComment = (comment) => async (dispatch, getState) => {
    try {
        const response = await axios.post(`${url}/addComment`, comment);
        console.log(response);
        // window.localStorage.setItem('jwt_token' , response.data.token);
        // window.localStorage.setItem('user_id' , response.data.id);
        // dispatch(addInPost(response.data));
    } catch (err) {
        console.log(err);
    }
}
export const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`, user)
}


export const editPostById = (id, post) => async (dispatch, getState) => {
    try {
        console.log("sb thik hai");
        const response = await axios.put(`${url}/updatepost/${id}`, post)
        console.log((response));
        dispatch(editPost(response.data));
        return response;
    } catch (err) {
        console.log("err aaa gai bhaiaya ji")
    }
}

export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`)
}