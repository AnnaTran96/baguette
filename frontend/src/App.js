import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Navbar } from './components'
import { Account, Menu, About, Basket, Home } from './pages'
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Switch>
       {/* <Route exact path='/' render={() => <h1>Baguette</h1>}/> */}
       <Route exact path="/" component={Home}/>
       <Route path="/account" component={Account}/>
       <Route path="/menu" component={Menu}/>
       <Route path="/basket" component={Basket}/>
       <Route path="/about" component={About}/>
     </Switch>
     <footer>
        <p>
          Address
        </p>
        <p>
          Contact Details
        </p>
        <p>
          &copy; 2020 Bready
        </p>
        </footer>
    </div>
  );
}

export default App;
