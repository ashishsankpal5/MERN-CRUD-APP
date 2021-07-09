import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
// import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Alluser from './components/Alluser';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/adduser" component={AddUser} />
        <Route exact path="/alluser" component={Alluser} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
export default App;
