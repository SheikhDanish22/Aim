import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Outlet } from 'react-router-dom'; // import NavLink for routing
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Amsaaf Digital Marketing</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="about">About</NavLink>
              <NavLink className="nav-link" to="service">Our Service</NavLink>
              <NavLink className="nav-link" to="tailored">Tailored Strategies</NavLink>

              <NavDropdown title="Marketing" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="content">Content Marketing</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="email-marketing">Email Marketing</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="influencer-marketing">Influencer Marketing</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="strategic-planning">Strategic Planning</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
     
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
      <Outlet/>
      <Footer/>
     
    </>
  );
};

export default Layout;
