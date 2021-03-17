import './App.css';
import Header from './components/Header';
import SignIn from './pages/SignIn'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import CssBaseline from "@material-ui/core/CssBaseline"

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Router>
        <Header/>
        <Switch>
        <Route exac path="/signin" component={SignIn} />
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
