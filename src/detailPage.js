import "./detailPage.css";
import { useParams } from "react-router";
import { useSelector,useDispatch } from "react-redux";
import { addCart } from "./components/redux/Slices/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import Products from "./api";
import { useState } from "react";
import {Link } from "react-router-dom"
const DetailPage = () => {
  const { id } = useParams();
  const data = Products.products;
  const filterData = data.filter((items) => items.id === parseInt(id));
  const {cartContainer}=useSelector((state)=>state.cart)
  const dispatch=useDispatch()  
  return (
    <>
      <div className="row ">
        {filterData.map((items) => {
          const discountAmount = (items.price * items.discount) / 100;
          const discountedPrice = items.price - discountAmount;
          
          return (
            <>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
                <img className=" detailImg" src={items.image} />
              </div>
              <div className="col-12 col-sm-12 col-md-12  col-lg-6 px-5 ">
                {" "}
                <h5 className="pt-5  h6">{items.title}</h5>
                <div className="row">
                  <div className="col-sm-6 h5">
                    {" "}
                    Price ={" "}
                    {items.discount ? (
                      <>
                        <span
                          className="text-muted"
                          style={{ textDecoration: "line-through" }}
                        >
                          ${items.price}
                        </span>{" "}
                        <span className="text-success">
                          ${discountedPrice.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <>${items.price}</>
                    )}
                  </div>{" "}
                  <div className="col-sm-6">
                    {items.discount ? (
                      <span>Discount: {items.discount}%</span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="h5">
                    Description :{" "}
                    <span className="fs-6 fw-normal ">{items.description}</span>
                  </div>
                  <div className="h5">
                    Brand :{" "}
                    <span className="fs-6 fw-normal">
                      {items.brand.toUpperCase()}
                    </span>
                  </div>
                  <div className="h5">
                    Model :{" "}
                    <span className="fs-6 fw-normal">{items.model}</span>
                  </div>

  <Link to="/cart"> <div className="col-sm-6"> <button className="py-1 shop px-4 my-2"  onClick={()=> dispatch(addCart(items))}>Buy!</button></div>
          </Link>        

                </div>
              </div>
            </>
          );
        })}
        <ToastContainer />
      </div>
    
    </>
  );
};
export default DetailPage;
