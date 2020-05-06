import React from "react";
import Users from "./components/User";
import Contact from "./components/Contact";
import About from "./components/About";
import { Route, Link,BrowserRouter as Router } from "react-router-dom";
const Routes = ()=> {
  return(
    <div>
    <Router>
        
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Route path="/about" component={About}/>
          <Route path="/users" component={Users} />
          <Route path="/contact" component={Contact} />
      
      </Router>
      </div>
  )
};


export default Routes;