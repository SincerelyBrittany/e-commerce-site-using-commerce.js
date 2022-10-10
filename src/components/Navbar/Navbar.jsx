import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from './style.module.css';
import { Link } from 'react-router-dom';
import Icon from '../../assets/img/shopping-logo-pngrepo-com.png';

const CustomNavbar = () => {
  return (
    <Navbar
      className={style._bg_nav}
      variant="light"
      collapseOnSelect
      expand="md"
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={Icon} className={style.brand_icon} alt="ecommerce site" />{' '}
          ECommerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/products" className="nav-link">
              Products
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </Nav>
          <Nav>
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
            <Link to="/signup" className="nav-link">
              Sign Up
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
