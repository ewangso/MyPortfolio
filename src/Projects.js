import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ProjectCard from './ProjectCard';
import projectData from './projectData';
import Project from './Project';
import Footer from './Footer';
import Resume from './Resume';
class Projects extends React.Component{
    render(){
        const projects = projectData.map(
            proj => <ProjectCard key={proj.id} title={proj.title} image={proj.image} projID={proj.id} source={proj.source}/>
        );

        console.log(this.props);
        

        return(
            <div>
                <div class="row projectsContent">
                {projects}

                <br></br>
                
                </div>
                <Footer />
            </div>
            
        );

        

    }
}





export default Projects;