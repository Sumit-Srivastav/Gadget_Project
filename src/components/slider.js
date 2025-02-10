import Carousel from "react-bootstrap/Carousel";
import "./slider.css";
import Products from "../api";
import { Link } from "react-router";
function Slider() {
  const data=Products.products
  const headphone=data.filter((items)=>(items.id===5))
  const iPhone=data.filter((items)=>(items.id===14))
  const gaming=data.filter((items)=>(items.id===23))
  return (
    
    <Carousel>
      <Carousel.Item interval={1000}>
        <div className="row carousel-container py-5">
          <div className="col-md-7 col-sm-7  d-flex justify-content-center align-items-center order-2 order-sm-1 ">
            <div className="col-md-10 ms-auto">
              <h2 className="logo heading  fs-1">H<span  className="fs-3">EADPHONE</span></h2>
              <p className="detail">
                Experience superior sound quality and comfort with our latest
                headphone model. Designed for both music lovers and
                professionals, these headphones provide crystal-clear audio with
                deep bass.
              </p>
           <Link to="detailPage/5">  <div className="button-container">  <button className="shop">Shop Now</button></div></Link>
            </div>
          </div>
          <div className="col-md-5 col-sm-5 order-1 order-sm-2  sliderImg-div">
    
            {
            headphone.map((items)=>{return(<>
              <img className="sliderImg" src={items.image}/>
            </>)})
            }
          </div>
        </div>
      </Carousel.Item>

       <Carousel.Item interval={1000}>
        <div className="row carousel-container  py-5">
          <div className="col-md-7 col-sm-7  d-flex justify-content-center align-items-center order-2 order-sm-1  ">
            <div className="col-md-10 ms-auto">
              <h2 className="logo heading  fs-1"><span  className="fs-3">I-PHONES</span></h2>
              <p className="detail">
  iPhone is a powerful smartphone with cutting-edge technology, sleek design, and exceptional performance. It offers a seamless user experience with advanced features like Face ID, high-quality cameras, and smooth performance.
</p>
           <Link to="detailPage/14"> <div className="button-container">  <button className="shop">Shop Now</button></div></Link>
           </div>
          </div>
          <div className="col-md-5 col-sm-5 order-1 order-sm-2  sliderImg-div">
          {
            iPhone.map((items)=>{return(<>
              <img className="sliderImg" src={items.image}/>
            </>)})
            }
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <div className="row carousel-container  py-5">
          <div className="col-md-7 col-sm-7  d-flex justify-content-center align-items-center order-2 order-sm-1 ">
            <div className="col-md-10 ms-auto">
              <h2 className="logo heading  fs-1">C<span  className="fs-3">ONTROLLER </span></h2>
              <p className="detail">
              Reduce Costs With Factory Direct Sourcing. Low MOQ, OEM/ODM Available. Source Now! Traditional Sourcing Brought Online. Find Quality Products & Contact Verified Suppliers!
              </p>
              <Link to="detailPage/23"> <div className="button-container">  <button className="shop">Shop Now</button></div></Link>
              </div>
          </div>


          <div className="col-md-5 col-sm-5 order-1 order-sm-2  sliderImg-div ">
          {
            gaming.map((items)=>{return(<>
              <img className="sliderImg mt-3 " src={items.image}/>
            </>)})
            }
          </div>
        </div>
      </Carousel.Item> 


 
    </Carousel>
  );
}

export default Slider;
