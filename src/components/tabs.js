import "./tabs.css";
import { Link } from "react-router";
const DataTabs = () => {
  return (
    <>
      <section className="section-2 py-5 container-fluid">
        <div className="">
          <div className="row">
            <div className="col-md-4 col-sm-12 pt-5 ">
              {" "}
              <div className="tabs-container " id="gaming">
                {" "}
                <div className="px-3">
                  <h2 className="h2-shadow">Gaming Accessories</h2>
                  <p className="p-tabs">Improve your gaming skills.</p>{" "}
                 <Link to="category/gaming"> <button className="shop mx-0  text-light border-light">
                    Shop Now
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 pt-5">
              {" "}
              <div className="tabs-container " id="speaker">
                {" "}
                <div className="px-3">
                  <h2 className="h2-shadow">Listening Gadgets</h2>
                  <p className="p-tabs">  Experience superior sound quality.</p>
                  <Link to="category/audio"><button className="shop mx-0  text-light border-light">
                    Shop Now
                  </button></Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 pt-5 overflow-hidden">
              
              <div className="tabs-container " id="tv">
           
                <div className="px-3">
                  <h2 className="h2-shadow">Smart Tv</h2>
                  <p className="p-tabs">TV offers entertainment, education, relaxation, and social connection.</p>
                  <Link to="category/tv">   <button className="shop mx-0 text-light border-light">
                    Shop Now
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default DataTabs;

