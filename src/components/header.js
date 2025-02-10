import "./bootstrap.css";
import "./header.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Products from "../api";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const data = Products.products;
const categoryTab = data.map((items)=>(items.category))
const filterTab= new Set(categoryTab)
const filterArray= Array.from(filterTab)
const {cartContainer}=useSelector((state)=>(state.cart))
  return (
    <>
      <header className="container-fluid">
    
        <div className="row py-3  ">
        <div className="col-12 text-center position-relative">
        
        <h2 className="logo  text-center  fs-1">G<span className="fs-3">ADGETS</span></h2>
        <div className="header-symbol">
 
<div className="position-relative icon-container"><Link to="/cart"><span href="#" className="mx-1 text-dark"><FaShoppingCart/></span></Link>
<div className="cart-lenght">{cartContainer.length}</div></div>

        </div>

        </div>
        </div>


        <Navbar className="navbar border border-dark" light expand="lg">
  <NavbarToggler onClick={toggleNavbar} />
  <Collapse isOpen={isOpen} navbar className="text-light">
    <Nav className="navbar-content mx-auto " navbar>
      
      <NavItem>
     <Link className="navbar-link" to="/">Home</Link>
      </NavItem>
      <NavItem>
     <Link className="navbar-link" to="/products" >Products</Link>
      </NavItem>
      <NavItem className="dropDown">
        <Link className="navbar-link dropDown" id="" to="#">Categories</Link>
        <div className="dropDown-items" id="">  
        {filterArray.map((items)=>{
return(

        <Link to={`/category/${items.toLowerCase()}`}><div className="navbar-link">{items.charAt(0).toUpperCase()+items.slice(1)}</div></Link>
     
)
    })}</div>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>

      </header>
    </>
  );
};

export default Header;
