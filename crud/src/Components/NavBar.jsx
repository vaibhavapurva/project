
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
    
//   const token = window.localStorage.getItem("jwt_token")
  const token = useSelector((state => state.token));
    return (
        <>
            {!token &&
                (
                   
                    <li>
                        <Link to="/">SignUp</Link>&nbsp;&nbsp;
                        <Link to="/signin">SignIn</Link>
                    </li>
                   
                )}
            {token && (
                
                <li>
                    <Link to="/all">AllUsers</Link>&nbsp;&nbsp;
                    {/* <Link to="/add">Adduser</Link> */}
                    <Link to="/Post">Post</Link>&nbsp;&nbsp;
                    <Link to="/addpost">AddPost</Link>&nbsp;&nbsp;
                    <Link to="/auto">Search</Link>&nbsp;&nbsp;
                    <Link to="/logout">Logout</Link>&nbsp;&nbsp;
                </li>

            )}

        </>
    )
}


export default NavBar;