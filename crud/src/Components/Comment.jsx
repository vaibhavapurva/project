import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { addUserComment } from "../Service/api";
import { setAddComment } from "../actions";

const Comment = () => {
    const { id } = useParams();
    window.localStorage.setItem('postid', id);
    const dispatch = useDispatch();
    const data = useSelector((state => state.setComment));
    // const initialValues = {
    //     body: "",
    //     postId:id,
    //     name:name,
    // }
    // const [comment, setComment] = useState(initialValues);
    // const { body } = comment;
    const history = useHistory()
    // console.log(comment);

    const onValueChange = (e) => {
        dispatch(setAddComment({ ...data, [e.target.name]: e.target.value }))

    }
    console.log(data);


    const addComment = () => {
        console.log("1", data)
        dispatch(addUserComment(data))
        history.push("/post");

    }



    return (
        <>

            <h1> Comment </h1>
            <form onSubmit={() => addComment()} >
                PostId:<input name="PostId" type="text" defaultValue={id} value={id} />
                <br></br>
                Comment:<input name="body" type="text" placeholder="  CommentBody " onChange={(e) => onValueChange(e)} />
                <br>
                </br>
                <button onClick={() => addComment()} variant="primary" type="submit" >Add Comment  </button>
            </form>
        </>

    )
}


export default Comment;