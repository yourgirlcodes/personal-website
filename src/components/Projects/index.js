import React from 'react'
import {Title} from './components/Title.js'
import {ProjectsContainer} from './components/ProjectsContainer'
export default class Projects extends React.Component{
    render(){
        return(
            <div className="projects-container">
                <Title />
                <ProjectsContainer />
            </div>
        )
    }
}