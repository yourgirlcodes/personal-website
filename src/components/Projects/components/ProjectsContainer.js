import React from 'react'
import '../Projects.css'
import {projects} from '../../../assets/constants/projects'
export const ProjectsContainer = () => {

    return(
        <div className="projects">
        {projects && projects.map(project => {
            return(<div className="project">
                <div className="project-title">{project.title}</div>
                <a href={project.link} target="_blank"><img className="project-image" src={require(`../../../assets/projectImages/${project.image}`)} alt={project.title} /></a>
            </div>)
        })}
        </div>
    )
}