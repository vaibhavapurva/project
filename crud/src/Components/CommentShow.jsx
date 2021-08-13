import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { requestGetCommentId } from "../Service/api";


const CommentShow=()=>{
    const { id } = useParams();
    const dispatch =useDispatch();
    console.log(id)
    useEffect(()=>{
        dispatch(requestGetCommentId());
    },[]);
    const data = useSelector((state => state.comment));
    console.log(data);
    return(
        <>
        <h1> Comment Show</h1>
        <div>
            <table>
                <thead>
                <tr>
                    <th>PostId</th> 
                    <th> id </th>
                    <th>Comment</th>
                    
                </tr>
                </thead>
                <tbody>
                        {
                            data.map(post => (
                                <tr>
                                    <td>{post.PostId}</td>
                                    <td>{post._id}</td>
                                    <td>{post.body}</td>

                                </tr>
                            ))
                        }






                 </tbody>
                
            </table>


        </div>
        
        </>
    )
}



export default CommentShow;