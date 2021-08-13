import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { requestGetpostId, editPostById } from "../Service/api";
import { setEditPost } from "../actions";


const PostEdit = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        console.log("postedit useEffect")
        dispatch(requestGetpostId(id));
    }, []);

    const post = useSelector((state => state.getPost));

    const onValueChange = (e) => {
        dispatch(setEditPost({ ...post, [e.target.name]: e.target.value }))
    }
    // console.log(data);
    const editPost = () => {
        dispatch(editPostById(id, post))
        history.push("/post");
    }

    return (
        <>
            <h1> Edit Post</h1>
            <form onSubmit={() => editPost()} >
                Title:<input name="title" type="text" placeholder="Post Title " onChange={(e) => onValueChange(e)} defaultValue={post.title} />
                <br></br>
                Body:<input name="body" type="text" placeholder="  Post Body " onChange={(e) => onValueChange(e)} defaultValue={post.body} />
                <br>
                </br>
                <button onClick={() => editPost()} variant="primary" type="submit" >Add User  </button>
            </form>
        </>
    )
}


export default PostEdit;