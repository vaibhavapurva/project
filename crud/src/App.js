import NavBar from './Components/NavBar';
import Code from './Components/Code';
import AllUsers from './Components/AllUsers';
import AddUser from './Components/Adduser';
import NotFound from './Components/NotFound';
import { BrowserRouter,Route ,Link, Switch} from 'react-router-dom';
import EditUser from './Components/EditUser';
import { createStore, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import user from './reducer';

const store = createStore(user, applyMiddleware(thunk));
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter> 
           <Link to="/all">AllUsers</Link>
            <Link to="/add">Adduser</Link>
        <Switch> 
        <Route exact path='/' component={Code}></Route>
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
