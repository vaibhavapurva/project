
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { loginUser } from "../Service/api";
import {useDispatch ,useSelector} from 'react-redux';

const initialValues = {
    email: "",
    password: "",
}
const SingIn = () => {
    
    const dispatch = useDispatch();
    const [login, setLogin] = useState(initialValues);
    const { email, password } = login;
    const history = useHistory()
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })

    }
    const addUserDetails = () => {
        // const a = loginUser(login);
       dispatch(loginUser(login))
       history.push("/all");

    }

    return (
        <>
            <h1> SignUp </h1>
            <form onSubmit={() => addUserDetails()} >
                Email:<input name="email" type="email" placeholder="enter you email " onChange={(e) => onValueChange(e)} value={email} />
                <br></br>
                password:<input name="password" type="password" placeholder="enter password " onChange={(e) => onValueChange(e)} value={password} />
                <br>
                </br>
                <button onClick={() => addUserDetails()} variant="primary" type="submit" >Add User  </button>
            </form>

        </>


    )
}

export default SingIn