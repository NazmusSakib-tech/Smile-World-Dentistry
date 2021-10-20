import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import headerLogo from "../../utilities/header-logo/header-logo.jpg"

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar collapseOnSelect expand="lg">
                
                <Container>
                
                    <Navbar.Brand as={Link} to="/home" className="nav-brand">
                    <h3 className="text-primary">Smile World Dentistry</h3>
                        <img
                            src={headerLogo}
                            width="170"
                            height="90"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />

                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link activeClassName="on-select"  className="text-dark fw-bold mouse-hover" as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link activeClassName="on-select" className="text-dark fw-bold mouse-hover ms-2" as={NavLink} to="/alltreatments">Treatments</Nav.Link>
                        <Nav.Link activeClassName="on-select" className="text-dark fw-bold mouse-hover ms-2" as={NavLink} to="/teethsuggestion">Teeth Suggestions</Nav.Link>
                        
                       { !(user?.email) && <Nav.Link activeClassName="on-select" className="text-dark fw-bold mouse-hover ms-2 w-sm-50" as={NavLink} to="/register">Register or Login</Nav.Link>}
                        {user?.email && <Navbar.Text className="ms-2 text-primary">
                            Signed in as: <span className="user-name-text fw-bold">{user.displayName}</span>
                        </Navbar.Text>}
                        {user?.email && <Button className="mx-2 logout-btn" onClick={logOut}>Log Out</Button>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;