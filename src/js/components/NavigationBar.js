// Imports
import React from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

/**
 * Navigation bar component.
 */
class NavigationBar extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.toggle = this.toggle.bind(this);
    };

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <Navbar color='dark' dark sticky='top' expand="md" id="react-archetype-nav">
                <Container>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <NavbarBrand tag={Link} to="/">React<small>Archetype</small></NavbarBrand>
                        <Nav navbar className="mr-auto">
                            <NavItem>
                                <NavLink tag={Link} to="/newTask">New Task</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/taskList">Task List</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    };
};

// Property types
NavigationBar.propTypes = {};

// Export
export default NavigationBar;