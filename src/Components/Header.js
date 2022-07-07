import React from "react";
import "../App.css";
import{useDispatch,useSelector} from "react-redux";
import {userLogoutAction} from "../actions/user_action";
import { Link,useNavigate } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";

function Header() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state)=>state.userLogin);
  const{userInfo} =userLogin;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

  const handleLogout = ()=>{
     dispatch(userLogoutAction());
     navigate('/');
  }

  

  return (
    <div>
      <Navbar bg="light" expand="lg" className="nav">
        <Container>
          
            <Navbar.Brand>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Sticky Notes</Link>
            </Navbar.Brand>
         

   
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
           {userInfo && <Nav className="ms-auto">
              <Nav.Link>
                <Link to="/notes" style={{ color: 'inherit', textDecoration: 'none' }}>Notes</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/post" style={{ color: 'inherit', textDecoration: 'none' }}>Create Note</Link>
              </Nav.Link>
          
              <NavDropdown title={capitalizeFirstLetter(userInfo.name)} id="basic-nav-dropdown">
                <NavDropdown.Item>
                <Link to="/profile" style={{ color: 'inherit', textDecoration: 'none' }}>My Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}
                >Log out</NavDropdown.Item>
              </NavDropdown>
            </Nav>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
