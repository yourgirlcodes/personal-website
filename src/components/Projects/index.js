import React from 'react'
import {Title} from './components/Title.js'
import {ProjectsContainer} from './components/ProjectsContainer'
import {Bar } from './components/Bar'
export default class Projects extends React.Component{
    render(){
        return(
            <div className="projects-container">
                <Title />
                <Bar position={"right"} />
                <ProjectsContainer />
            </div>
        )
    }
}