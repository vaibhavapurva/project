
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addUser } from "../Service/api";
import {useDispatch ,useSelector} from 'react-redux';

const initialValues={
    name:"",
    email:"",
    city:"",
    field:"",
    password:"",
}


const SignUp =()=>{

    const [user , setUser] = useState(initialValues);
    const {name, email, city , field , password} = user;
    const history = useHistory()
    const onValueChange=(e)=>{
        setUser({...user , [e.target.name]:e.target.value})
    
    }
    const addUserDetails = ()=>{
         addUser(user);
        history.push('/signin')
    }
    const userss = useSelector((state => state.token));
    console.log("==================");
    console.log("ye hi dekhna hai",userss);
    return(
        <>
        <h1> SignUp </h1>
        <form onSubmit={() => addUserDetails()} >
                name:<input name="name" type="text" placeholder="enter you name" onChange={(e)=>onValueChange(e)} value={name}/>
                <br></br>
                Email:<input name="email" type="email"  placeholder="enter you email " onChange={(e)=>onValueChange(e)} value={email}/>
                <br></br>
                City:<input name="city" type="text"  placeholder="enter you City " onChange={(e)=>onValueChange(e)}value={city}/>
                <br></br>
                Field:<input name="field" type="text" placeholder="enter you number " onChange={(e)=>onValueChange(e)} value={field} />
                <br></br>
                password:<input name="password" type="password" placeholder="enter password " onChange={(e)=>onValueChange(e)} value={password} />
                <br>
                </br>
                <button onClick={()=> addUserDetails()}  variant="primary" type="submit" >Add User  </button>
            </form>

        </>


    )
}

export default SignUp