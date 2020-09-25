import React from "react";
import Main from "./Main";
import App from './App';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './index.css';
import Jumbotron from './Jumbotron';
import Project from './Project';
import projectData from './projectData';
import Resume from './Resume';
import File from './Resume.pdf';

function Navbar(){
    
    return(
        <div>
            
            <nav class="navbar navbar-default navbar-expand-lg bg-white navbar-light fixed-top">
            <button class="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="text-dark" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="text-dark" to="/contact">Contact</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="text-dark" to="/projects">Projects</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={File} target='_blank' class="text-dark">
                            Resume
                        </Link>
                    </li>
                </ul>
            </div>
            </nav>
            <Jumbotron />

            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/projects/:project" component={Proj}/>
            </Switch>
            
            
        </div>


    );
}

const Proj = ({match, location}) => {
    
    const { params: {project} } = match;
    return (
    <>
        <div class="infoCard">

            <p>
                <strong><p class="display-4">{projectData[project - 1].title}</p></strong><br></br>
            </p>

            <p class="display-6">{projectData[project - 1].description} </p>

            <a href={projectData[project - 1].source}class="btn btn-outline-success">
                View Repository
            </a>
            <br></br>
            <br></br>
            <br></br>

            <Link to={`/projects`}>
                &#8592;Back To Projects
            </Link>

        </div>
    </>
    );
};

export default Navbar;