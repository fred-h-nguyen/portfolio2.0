import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";

export default class Navbar extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state

        return (
            <Segment inverted>
                <Menu inverted pointing secondary>
                    <h1>Fred Nguyen</h1>
                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='aboutMe'
                            active={activeItem === 'aboutMe'}
                            onClick={this.handleItemClick}
                            href = "#aboutMe"
                        >
                            About Me
                    </Menu.Item>
                        <Menu.Item
                            name='portfolio'
                            active={activeItem === 'portfolio'}
                            onClick={this.handleItemClick}
                            href = "#portfolio"
                        >
                            Portfolio
                    </Menu.Item>
                        <Menu.Item
                            name='contact'
                            active={activeItem === 'contact'}
                            onClick={this.handleItemClick}
                            href = "#contact"
                        >
                            Contact
                    </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Segment>
        )
    }
}