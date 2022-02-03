import './App.css';
import { Switch, Route, Router } from 'react-router-dom';
import Home from './Component/Home/Home';
import Signup from './Component/Auth/Signup/Signup';
import Signin from './Component/Auth/Signin/Signin';
import Dashboard from './Component/Dasboard/Dashboard';

function App() {
  return (
    <div className="App">
      <>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/signup' component={Signup} />
        <Route path='/signin' component={Signin} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
      </>
    </div>
  );
}

export default App;
