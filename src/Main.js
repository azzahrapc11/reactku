import React, { Component } from 'react';
import {Route, NavLink, Hashrouter} from "react-router-dom";
import Home from "./Home";
import './Style.css';

class Main extends Component{                                                                                                                                                                                                                                           
    render() {
      return (
          <Hashrouter>
        <div>
            <h1 className="title">Fetching Data API</h1>
            <ul className="header">
       <li><NavLink exact to="/">Home</NavLink> </li>
       
       </ul>
        <div className="content">
        <Route exact path="/" component={Home}/>
        </div>
        </div>
        </Hashrouter>
      );
    }   
  } 

  export default Main;