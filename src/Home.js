import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Switch,Route,Link, BrowserRouter} from "react-router-dom";
import Jumbotron from './Jumbotron';
import Main from './Main';

function Home(){
    return(
        <div class="content">
            <Jumbotron />
            <Main />
        </div>
    );
}

export default Home;