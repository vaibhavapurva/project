import { useEffect, useState } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { useHistory , useParams} from "react-router-dom";
import { getUsers ,editUser,requestGetUsersid  } from "../Service/api";

const initialValues={
    name:"",
    email:"",
    city:"",
    field:"",
}

const EditUser =()=>{
    const {id} = useParams();
    const dispatch = useDispatch();

    const [user , setUser] = useState(initialValues);
    const {name, email, city , field} = user;
    const history = useHistory()


    useEffect(() => {
        console.log("edit useEffect")
        dispatch(requestGetUsersid(id));
    }, []);
    const users = useSelector((state => state.records));
    console.log("dtata com ",users);
   
    const onValueChange=(e)=>{
        setUser({...user , [e.target.name]:e.target.value})
    
    }
    const editUserDetails = ()=>{
        editUser( id ,user);
        history.push('/all')
    }

    return (
        <>
            <h1> Edit User</h1>
            <form onSubmit={() => editUserDetails()} >
                name:<input name="name"  defaultValue={users.name}type="text" placeholder="enter you name" onChange={(e)=>onValueChange(e)}/>
                <br></br>
                Email:<input name="email" type="email"defaultValue={users.email}  placeholder="enter you email " onChange={(e)=>onValueChange(e)} />
                <br></br>
                City:<input name="city" type="text" defaultValue={users.city} placeholder="enter you City " onChange={(e)=>onValueChange(e)}/>
                <br></br>
                Field:<input name="field" type="text"defaultValue={users.field} placeholder="enter you number " onChange={(e)=>onValueChange(e)}  />
                <br></br>
                <br>
                </br>
                <button onClick={()=> editUserDetails()}  variant="primary" type="submit" >Add User  </button>
            </form>
        </>
    );

}

export default EditUser;