import React from 'react';
import { Item } from 'semantic-ui-react'

function Project(props) {
    return (
        <Item >

            <p>{props.img}</p>
            <Item.Content>
                <Item.Header style={{ color: "white" }}>{props.name}</Item.Header>
                <Item.Description style={{ color: "white" }}>{props.description}</Item.Description>
                <Item.Extra> <a href={props.link} target='_blank'>Project</a>|<a href={props.github} target='_blank'>GitHub</a></Item.Extra>
            </Item.Content>
        </Item>
    )
}
export default Project;