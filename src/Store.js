import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';

export default (props) => (
    <Router>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/products'>Products</Link></li>
        </ul>

        <Route exact path='/' component = { Home } />
        <Route path='/products' component = { Products } />
        
      </nav>
    </Router>
  )

