import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default class Navbars extends React.Component{
    render(){
        return(
            <div>
                <Navbar bg="primary"  expand="lg">
            <Container>
                <Navbar.Brand href="#home" className='text-white'>My Portofolio (ReactJs)</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='text-white'>
                    <Nav className="me-auto text-white">
                    <Nav.Link href="#home"></Nav.Link>
                    <Nav.Link href="#link"></Nav.Link>
                     </Nav>
                 </Navbar.Collapse>
            </Container>
        </Navbar>
            </div>
        )
    }
}