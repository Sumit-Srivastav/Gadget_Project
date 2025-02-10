import { useParams } from "react-router-dom";
import Products from "./api";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { addCart } from "./components/redux/Slices/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
const CategoryPage=()=>{

    const [data,setData]=useState(Products.products)
    const { categoryName } = useParams(); 
    const filterData= data.filter((items)=>(items.category===categoryName));
    // console.log("filterData",filterData)
    const {cartContainer}=useSelector((state)=>state.cart)
    const dispatch=useDispatch() 
   
    return(<>

<div className="container">
<div className="row py-5">

{filterData.map((items) => {
    const discountAmount = (items.price * items.discount) / 100;
    const discountedPrice = items.price - discountAmount;

    return (
      <div key={items.id} className="col-10 productsContainer col-sm-6 col-md-4 col-lg-3 my-3">
        <div className="border ">
          <div className="text-center img-container">
          <Link to={`detailPage/${items.id}`}>  <img className=" productsImg" src={items.image} alt={items.title} /></Link>
          </div>
          <div className=" productsDetails px-2">
          <div className="h6">{items.title.slice(0, 20) + "..."}</div>
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
              <Link to={`detailPage/${items.id}`}>    <button className="py-1 shop px-4 border">Buy!</button></Link>
              </div>
              <div className="col-6"><button className="py-1 shop px-4 border"  onClick={()=> dispatch(addCart(items))}>Cart</button></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  })}
</div>
   <ToastContainer />
</div>
    </>)
}
export default CategoryPage