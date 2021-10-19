import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import headerLogo from "../../utilities/header-logo/header-logo.jpg"

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar collapseOnSelect expand="lg">
                
                <Container>
                
                    <Navbar.Brand as={Link} to="/home">
                    <h3 className="text-primary  ">Smile World Dentistry</h3>
                        <img
                            src={headerLogo}
                            width="200"
                            height="90"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />

                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="text-dark fw-bold" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="text-dark fw-bold" as={Link} to="/alltreatments">Treatments</Nav.Link>
                        <Nav.Link className="text-dark fw-bold" as={Link} to="/teethsuggestion">Teeth Suggestions</Nav.Link>
                        
                        <Nav.Link className="btn btn btn-warning" as={Link} to="/register">Register/Login</Nav.Link>
                        {user?.email && <Navbar.Text className="ms-2 text-primary">
                            Signed in as: <span className="text-dark">{user.displayName}</span>
                        </Navbar.Text>}
                        {user?.email && <Button className="mx-2 logout-btn" onClick={logOut}>Log Out</Button>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;