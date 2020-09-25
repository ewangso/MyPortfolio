import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Main from './Main';
import Footer from './Footer';

import {BrowserRouter as Router,Switch,Route,Link, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div>
      <Router> 
        <Navbar class="fixed-top"/>
      </Router>
    </div>
  );
}

export default App;
