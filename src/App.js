import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Home></Home>


      </div>
      <Switch>
        <Route path="/about">

        </Route>
        <Route path="/users">

        </Route>
        <Route path="/">

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
