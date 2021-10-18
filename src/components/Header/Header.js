import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/home">
                        <img
                            src=""
                            width="100"
                            height="35"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="#home"><i className="fas fa-shopping-cart text-dark"></i></Nav.Link>
                        <Nav.Link className="text-dark fw-bold" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="text-dark fw-bold" as={Link} to="#">Treatments</Nav.Link>
                        <Nav.Link className="text-dark fw-bold" as={Link} to="/login">Login</Nav.Link>
                        {user?.email && <button onClick={logOut}>Log Out</button>}
                        <Nav.Link className="btn-red bg-danger" as={Link} to="/register">Register</Nav.Link>
                       { user?.email && <Navbar.Text className="ms-2 text-primary">
                            Signed in as: <span>{user.displayName}</span>
                        </Navbar.Text>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;