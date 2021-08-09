import NavBar from './Components/NavBar';
import SignUp from './Components/SignUp';
import AllUsers from './Components/AllUsers';
import AddUser from './Components/Adduser';
import NotFound from './Components/NotFound';
import { BrowserRouter,Route ,Link, Switch} from 'react-router-dom';
import EditUser from './Components/EditUser';
import { createStore, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import user from './reducer';
import SignIn from './Components/SignIn';

const store = createStore(user, applyMiddleware(thunk));
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter> 
            <Link to="/">SignUp</Link>
            <Link to="/signin">SignIn</Link>
           <Link to="/all">AllUsers</Link>
            <Link to="/add">Adduser</Link>
        <Switch> 
        <Route exact path='/' component={SignUp}></Route>
        <Route exact path="/signin" component={SignIn}></Route>
        <Route exact path="/all" component={AllUsers}></Route>
        <Route exact path="/add" component={AddUser}></Route>
        <Route exact path="/edit/:id" component={EditUser}></Route>
        <Route component={NotFound}/>
        </Switch> 
       </BrowserRouter>
       </Provider>
  );
}

export default App;
