import { useEffect, useState } from "react";
import Products from "../api";
import "./headphone.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";
import React from "react";
import Slider from "react-slick";
import { useSelector,useDispatch } from "react-redux";
import {addCart} from "./redux/Slices/cartSlice"
const HeadPhones = () => {
  const [headphone, setHeadPhone] = useState([]);
  const filterHeadPhone = Products.products.filter(
    (items) => items.category === "audio"
  );
  const dispatch=useDispatch() 
  useEffect(() => {
    setHeadPhone(filterHeadPhone);
  }, []);
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 1000,  // Set a positive value for autoplay speed
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
         
        },
      },
      {
        breakpoint: 885,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,  // Default to the first slide for better UX
        },
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,  // Same adjustment here
        },
      },
      {
        breakpoint:455,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,  // Same adjustment here
        },
      },
    ],
  };
  

  return (
    <>
      <section className="headphone-section container-fluid py-5">
      <h2 className="logo  text-center pb-3  fs-1">H<span  className="fs-3">EADPHONES</span></h2>
        <Slider {...settings} classNmae="slider">
          {headphone.map((items) => {
            const discountAmount = (items.price * items.discount) / 100;
            const discountedPrice = items.price - discountAmount;
            return (
              <div className=" headphone-container p-4">
               
                <Link to={`detailPage/${items.id}`}>  <div className="sliderImg-container"> <img className=" headphone-img" src={items.image} />  </div></Link>  
              
                <div className="headphones-title">{items.title.slice(0,35)+"..."}</div>
                <div className="price ">
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
                      <div className="row"><div className="col-6">  <Link to={`detailPage/${items.id}`}>   <button className="py-1 shop fw-bolder text-success px-4 border">Buy!</button></Link></div>
                      <div className="col-6"> <button className="py-1 px-4 shop border  bg-transparent "   onClick={()=> dispatch(addCart(items))}>Cart</button></div></div>
                    
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};
export default HeadPhones;
