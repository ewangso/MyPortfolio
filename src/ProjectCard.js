import { render } from "@testing-library/react";
import React from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import projectData from './projectData';
class ProjectCard extends React.Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props);
        return (
        <div class="card">
            <div class="card-body text-left">
                <h2>{this.props.title}</h2>

                <img class="card-img-top" src={this.props.image} alt="Project Banner" />
                <br></br>
                <br></br>

                <a class="btn btn-outline-success" target="_blank">
                    <Link to={`/projects/${this.props.projID}`} className="link">
                        Details
                    </Link>
                </a>

                <a href={this.props.source}class="btn btn-outline-success" target="_blank">
                    Source
                </a>
            </div>
        </div>
        );
    }
    
}

export default ProjectCard;