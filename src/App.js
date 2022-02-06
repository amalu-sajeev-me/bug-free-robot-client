import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Signup from './Component/Auth/Signup/Signup';
import Signin from './Component/Auth/Signin/Signin';
import Dashboard from './Component/Dasboard/Dashboard';
import Profile from './Component/Profile/Profile';

function App() {
  return (
    <div className="App">
      <>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/signup' component={Signup} />
        <Route path='/signin' component={Signin} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/profile' component={Profile} />
      </Switch>
      </>
    </div>
  );
}

export default App;
