import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addPostUser } from "../Service/api";
import { useDispatch, useSelector } from 'react-redux';
import { setAddPost } from "../actions";





const AddPost = () => {
    const dispatch = useDispatch();
    const data = useSelector((state => state.setPost));
    const history = useHistory()
    const onValueChange = (e) => {
        dispatch(setAddPost({ ...data, [e.target.name]: e.target.value }))
    }
    console.log(data);
    const addPost = () => {
        dispatch(addPostUser(data))
        history.push("/addpost");
    }
    return (
        <>
            <h1> Add_Post </h1>
            <form onSubmit={() => addPost()} >
                Title:<input name="title" type="text" placeholder="Post Title " onChange={(e) => onValueChange(e)} />
                <br></br>
                Body:<input name="body" type="text" placeholder="  Post Body " onChange={(e) => onValueChange(e)} />
                <br>
                </br>
                <button onClick={() => addPost()} variant="primary" type="submit" >Add User  </button>
            </form>
        </>
    )
}


export default AddPost;