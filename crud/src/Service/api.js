import axios from 'axios';
import { setUser , editUsers, SignInUser } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import SingIn from '../Components/SignIn';

const url = "http://localhost:9000/users";
const request = axios.create({
    baseURL: 'http://localhost:9000'
});

// export const getUsers = async(id)=>{
//     id = id || '';
//     return await axios.get(`${url}/${id}`);
// }

export const getUsers =() =>async(dispatch , getState)=>{
    try{
        console.log("api run")
        const response = await axios.get(url);
        
        dispatch(setUser(response.data));
    }catch(err){
        console.log(err)
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
        console.log("hello")     
        console.log(err);
    }
}

export const addUser =async(user)=>{
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


export const loginUser=(login)=> async(dispatch, getState)=>{
    console.log(login);
    try{
        const response = await axios.post(`${url}/signin`,login);
        console.log(response);
        // window.localStorage.setItem('jwt_token' , response.data.token);
        dispatch(SignInUser(response.data));
    }catch(err){
        console.log(err);
    }
}


export const editUser = async(id , user)=>{
    return await axios.put(`${url}/${id}`, user)
}

export const deleteUser = async(id)=>{
    return await axios.delete(`${url}/${id}`)
}