import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home';
import Gallery from './pages/Gallery'
import Bio from './pages/Bio'
import NavBar from './context/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <Router className="App">
        
        <Route path="/" exact component={Home}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/bio" component={Bio}/>
    </Router>
    </div>



  );
}

export default App;
