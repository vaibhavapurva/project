import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPosts } from "../Service/api";

const Post = () => {
    const dispatch = useDispatch();
    const history = useHistory();
     const id = useSelector((state => state.userId));
    // const id =localStorage.getItem("user_id");
    console.log("eeeeeee",id)
    useEffect(() => {
        console.log("UseEffectPost")
        dispatch(getPosts())

    }, [])
    const postss = useSelector((state => state.post));

    const onClickCommentshow = (IdUpdate) => {
        history.push(`/commentshow/${IdUpdate}`)
    }

    const onClickComment = (IdUpdate) => {
        history.push(`/comment/${IdUpdate}`)
    }
    const onClickEditPost = (IdUpdate) => {
        history.push(`/postedit/${IdUpdate}`)
    }
    return (
        <>
            <h1> Post</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th> id </th>
                            <th>title</th>
                            <th>Body</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            postss.map(post => (
                                <tr>
                                    <td>{post._id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                    <td>{post.userId}</td>
                                    <td> <button onClick={() => onClickComment(post._id)} > Add Comment </button></td>
                                    <td> <button onClick={() => onClickCommentshow(post._id)} >  Show Comment </button></td>    
                                   {id==post.userId &&( <button onClick={() => onClickEditPost(post._id)} >  Edit Post </button>)}
                                    {/* <td> <button onClick={() => onClickEditPost(post._id)} >  Edit Post </button></td> */}
                                    {/* <td> <button variant="dark" onClick={() => onClickDelete(user._id)}> Delete </button></td> */}
                                </tr>
                            ))
                        }






                    </tbody>
                </table>


            </div>
        </>
    )
}


export default Post;