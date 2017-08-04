import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import About from './About';
import Topics from './Topics';
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Menu extends Component {
  render () {
    return (
      <div>
        <h1>Menu</h1>
      </div>
    )
  }
}



const MiPrimerComponente = () => {
  return (
    <BrowserRouter>
      <div>
        <Menu/>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<MiPrimerComponente />, document.getElementById('main'));