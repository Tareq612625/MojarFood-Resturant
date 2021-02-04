import React, { Component } from "react"
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap'
import { Link } from 'react-router-dom'

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
    }
    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render() {
        return (
            <div>
                <Navbar dark color="dark" expand="sm">
                    <div className="container">
                        <NavbarToggler onClick={this.navToggle} className="mr-2" />
                        <NavbarBrand href="/">Rahim Store</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav color="light">

                                <NavItem>
                                    <Link to="/menu" className="nav-link active">Menu</Link>
                                </NavItem>

                                <NavItem>
                                    <Link to="/" className="nav-link ">Home</Link>
                                </NavItem>

                                <NavItem>
                                    <Link to="/about" className="nav-link ">Create Product</Link>
                                </NavItem>

                                <NavItem>
                                    <Link to="/contact" className="nav-link ">Contact</Link>
                                </NavItem>

                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;