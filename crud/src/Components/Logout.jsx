import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {logout} from "../actions"
const Logout = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        localStorage.removeItem('jwt_token');
        localStorage.removeItem('user_id');
        localStorage.removeItem('user_name');
        console.log("postedit useEffect")
        dispatch(logout());
        history.push("/signin");


    }, [])
    const token= null
    window.localStorage.setItem('jwt_token',token) ;
    return (
        <>
            <h1> Logout page</h1>

        </>

    )
}


export default Logout;