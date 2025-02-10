import "./circleTab.css"
import { Link } from "react-router"
const CircleTab =()=>{

    return(<>
    <section className="CircleTab py-5 px-4 container-fluid  ">
        <div className="container-fluid ">
        <h5 className="heading fs-3 text-center mb-5 ">Popular Categories</h5>
            <div className="row">
<div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-5 ">
    <div className=" text-center">
        <div className="">         <Link to="/category/mobile">   <img
              className="sliderImg circleTabImg"
              src="https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691075659827-iPhone 14.jpg"
              alt="Phones"
            /></Link></div>
        <div className="text-center  fw-bold fs-5">I-Phones</div>
    </div>
</div>

<div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-5">
    <div className=" text-center">
        <div className="">  
        <Link to="/category/audio">   <img
              className="sliderImg circleTabImg"
              src="https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257709689-logitech heaphone.jpg"
              alt="HeadPhones"
            /></Link></div>
        <div className="text-center  fw-bold fs-5">Headphones</div>
    </div>
</div>

<div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-5">
    <div className=" text-center">
        <div className="">  
        <Link to="/category/tv">   <img
              className="sliderImg circleTabImg"
              src= "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694155239807-81UT46-gwRL._SL1500_.jpg"
              alt="Smart Tv"
            /></Link></div>
        <div className="text-center  fw-bold fs-5">Smart Tv</div>
    </div>
</div>
<div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-5">
    <div className=" text-center">
        <div className="">  
        <Link to="/category/mobile">  <img
              className="sliderImg circleTabImg"
              src="https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691074776147-galaxy S22 ultra 5G.jpg"
              alt="Phones"
            />
                </Link>
            </div>
        <div className="text-center  fw-bold fs-5">Android</div>
    </div>
</div>
<div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-5">
    <div className=" text-center">
        <div className="">  
        <Link to="/category/audio">   <img
              className="sliderImg circleTabImg"
              src="https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692940742197-speaker1.jpg"
              alt="Speakers"
            /></Link></div>
        <div className="text-center  fw-bold fs-5">Speakers</div>
    </div>
</div>
<div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-5">
    <div className=" text-center">
        <div className="">
        <Link to="/category/gaming">     <img
              className="sliderImg circleTabImg"
              src="https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg"
              alt="Phones"
            /></Link></div>
        <div className="text-center  fw-bold fs-5">Gaming</div>
    </div>
    
</div>


            </div>
        </div>
    </section>
    </>)
}
export default CircleTab