import React from 'react';
import Project from './project/Project';
import projectData from './project/projectData'
import { Segment, Container, Item } from 'semantic-ui-react'

function Projects() {
    const projectComponents = projectData.map(project => <Project key={project.id} name={project.name} img={project.img} github={project.github} link={project.link}
        description={project.description} />)
    return (
        <Segment inverted>
            <h1>Portfolio</h1>
            <Container>
                <Item.Group divided>
                    {projectComponents}
                </Item.Group>
            </Container>
        </Segment>
    )
}

export default Projects;