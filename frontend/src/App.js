import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { Navbar } from './components'
import { Account, Menu, About, Basket, Home } from './pages'
import { User, Payment, Message } from './components'
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/account" component={Account}/>
       <Route path="/menu" component={Menu}/>
       <Route path="/basket" component={Basket}/>
       <Route path="/about" component={About}/>
       <Route path="/home" component={User}/>
       <Route path="/payment" component={Payment}/>
       <Route path="/order_placed" component={Message}/>
     </Switch>
     <footer>
        <ul className="address">
            <li>78 Traill Street</li>
            <li>ROSSINGTON</li>
            <li>DN11 6JG</li>
        </ul>
        <ul className="contact">
            <li>070 5200 0709</li>
            <li>baguettes@vieguettes.com</li>
        </ul>
        <p className="copyright">
          &copy; 2020 Vieguette’s
        </p>
        {/* <ul className="footer-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
        </ul> */}
      </footer>
    </div>
  );
}

export default App;
