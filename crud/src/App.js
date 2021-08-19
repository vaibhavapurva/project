// import NavBar from './Components/NavBar';
import SignUp from './Components/SignUp';
import AllUsers from './Components/AllUsers';
import Comment from './Components/Comment';
import AddUser from './Components/Adduser';
import CommentShow from './Components/CommentShow';
import AutoComplete from './Components/AutoComplete';
import Task from "./Components/Task";
import PostEdit from './Components/PostEdit';
import NotFound from './Components/NotFound';
import NavBar from './Components/NavBar';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import EditUser from './Components/EditUser';
import { createStore, applyMiddleware } from 'redux';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import user from './reducer';
import SignIn from './Components/SignIn';
import Logout from './Components/Logout';
import PrivateRoutes from './Components/PrivateRoutes';
import PublicRoutes from './Components/PublicRoutes';
import Post from './Components/Post';
import UpdatePost from './Components/UpdatePost';
import AddPost from './Components/AddPost';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const store = createStore(user, applyMiddleware(thunk));
function App() {
  const token = window.localStorage.getItem("jwt_token")
  // const token = useSelector((state => state.token));
  console.log("-------------------");
  console.log(token)
  return (
    <div className="text-center">
      <Provider store={store}>
        <BrowserRouter>
        {/* {!token && 
        (
          <li>
          <Link to="/">SignUp</Link>
          <Link to="/signin">SignIn</Link>
          </li>
        )}
        {token && (
          <li>
          <Link to="/all">AllUsers</Link>
          <Link to="/add">Adduser</Link>
          <Link to="/logout">Logout</Link>
          <Link to="/Post">Post</Link>
          <Link to="/addpost">AddPost</Link> 
          <Link to="/auto">Search</Link> 
          </li>       
        )} */}
        <NavBar/>
          {/* <Link to="/">SignUp</Link>
          <Link to="/signin">SignIn</Link> */}
          {/* <Link to="/all">AllUsers</Link>
          <Link to="/add">Adduser</Link>
          <Link to="/logout">Logout</Link>
          <Link to="/Post">Post</Link>
          <Link to="/addpost">AddPost</Link> */}
          <Switch>
            <PublicRoutes exact path='/' component={SignUp} />
            <PublicRoutes exact path="/signin" component={SignIn} />
            <PrivateRoutes exact path="/all" component={AllUsers} />
            <PrivateRoutes exact path="/add" component={AddUser} />
            <PrivateRoutes exact path="/logout" component={Logout} />
            <PrivateRoutes exact path="/edit/:id" component={EditUser} />
            <PrivateRoutes exact path="/post" component={Post} />
            <PrivateRoutes exact path="/addpost" component={AddPost} />
            <PrivateRoutes exact path="/comment/:id" component={Comment} />
            <PrivateRoutes exact path="/commentshow/:id" component={CommentShow} />
            <PrivateRoutes exact path="/updatePost" component={UpdatePost} />
            <PrivateRoutes exact path="/postedit/:id" component={PostEdit} />
            <PrivateRoutes exact path="/auto" component={AutoComplete} />
            <PrivateRoutes exact path="/task" component={Task}/>
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
    // <Provider store={store}>
    //   <BrowserRouter> 
    //         <Link to="/">SignUp</Link>
    //         <Link to="/signin">SignIn</Link>
    //        <Link to="/all">AllUsers</Link>
    //         <Link to="/add">Adduser</Link>
    //         <Link to="/logout">Logout</Link>
    //     <Switch> 
    //     <Route exact path='/' component={SignUp}></Route>
    //     <Route exact path="/signin" component={SignIn}></Route>
    //     <Route exact path="/all" component={AllUsers}></Route>
    //     <Route exact path="/add" component={AddUser}></Route>

    //     <Route exact path="/logout" component={Logout}></Route>
    //     <Route exact path="/edit/:id" component={EditUser}></Route>
    //     <Route component={NotFound}/>
    //     </Switch> 
    //    </BrowserRouter>
    //    </Provider>
  );
}

export default App;
