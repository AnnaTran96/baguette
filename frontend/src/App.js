import React from 'react';
import { Switch, Route } from 'react-router-dom'
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
       <div className="left-footer">
          <ul className="address">
              <li>78 Traill Street</li>
              <li>London</li>
              <li>SE16 4ES</li>
          </ul>
          <ul className="contact">
              <li>020 7459 6278</li>
              <li>baguettes@vieguettes.com</li>
          </ul>
          <p className="copyright">
            &copy; 2020 Vieguette’s
          </p>
        </div>
        <div className="right-footer">
          <ul className="footer-opening-hours">
            <li>Opening Hours:</li>
            <li>Mon - Fri: 12pm - 2:30pm | 5:30pm - 10:30pm</li>
            <li>Sat: 11pm - 10:30pm</li>
            <li>Sun: 12:30pm - 9pm</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
