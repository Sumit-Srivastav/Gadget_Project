import { Axios } from "axios";
import Products from "../api";
import "../components/productsSection.css";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {addCart} from "./redux/Slices/cartSlice"
import { ToastContainer, toast } from 'react-toastify';
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
import { BsFilterLeft } from "react-icons/bs";

const ProductsSection = () => {
  
  const data = Products.products;
const categoryTab = data.map((items)=>(items.category))
const filterTab= new Set(categoryTab)
const filterArray= Array.from(filterTab)


 const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const [filteredData, setFilteredData] = useState(data);
  const filterData = (category) => {
    if (category === "All") {
      setFilteredData(data); // Show all products
    } else {
      const filtered = data.filter((item) => item.category === category);
      setFilteredData(filtered); // Filter by category
    }


    
  };
const {cartContainer}=useSelector((state)=>state.cart)
const dispatch=useDispatch()  


  return (
    <>
  
      <div className="container filter-container">
      <div className="row ">
  
      <Navbar className="navbar   position-relative" light expand="lg">
  <NavbarToggler className="filterbtn" onClick={toggleNavbar}><BsFilterLeft/></NavbarToggler> 
  <Collapse isOpen={isOpen} navbar className="text-light">
    <Nav className="navbar-content mx-auto filter-element" navbar>
    <NavItem>
        <NavLink className="navbar-link "onClick={()=>filterData("All")}>All</NavLink>
      </NavItem>
    {filterArray.map((items)=>{
return(
  <NavItem>
        <NavLink className="navbar-link" onClick={()=>filterData(items)}>{items.charAt(0).toUpperCase()+items.slice(1)}</NavLink>
      </NavItem>
)
    })}
     
    </Nav>
  </Collapse>
</Navbar>

      </div>
        <div className="row py-5">

        {filteredData.map((items) => {
            const discountAmount = (items.price * items.discount) / 100;
            const discountedPrice = items.price - discountAmount;

            return (
              <div key={items.id} className="col-10 productsContainer col-sm-6 col-md-4 col-lg-3 my-3">
                <div className="border ">
                  <div className=" text-center img-container">
               <Link to={`detailPage/${items.id}`}>    <img className=" productsImg" src={items.image} alt={items.title} /></Link>
                  </div>
                  <div className=" productsDetails px-2">
                  <div className="h6">{items.title.slice(0, 38) + "..."}</div>
                  <div className="row">
                    <div className="col-sm-8">
                      <div className="price">
                        {items.discount ? (
                          <>
                            <span className="text-muted" style={{ textDecoration: 'line-through' }}>
                              ${items.price}
                            </span>{" "}
                            <span className="text-success">
                              ${discountedPrice.toFixed(2)}
                            </span>
                          </>
                        ) : (
                          <>${items.price}</>
                        )}
                      </div>
                    </div>
                    
                    <div className="row my-2">
                      <div className="col-6">
                      <Link to={`detailPage/${items.id}`}>   <button className="py-1 shop px-4 border">Buy!</button></Link>
                      </div>
                      <div className="col-6"> <button className="py-1 shop px-4 border" onClick={()=> dispatch(addCart(items))}>Cart</button></div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            );
          })}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ProductsSection;
