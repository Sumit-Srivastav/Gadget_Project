import { useDispatch, useSelector } from "react-redux";
import { Container } from "reactstrap";
import "./cart.css";
import { RxCross2 } from "react-icons/rx";
import { removeCart,emptyCart } from "./components/redux/Slices/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import { HiOutlineEmojiSad } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Link } from "react-router";
const Cart = () => {
  const { cartContainer } = useSelector((state) => state.cart);

  const dispatch=useDispatch()
const notify = () => {
  toast.error("Remove to Cart", {
    position: "top-center",
    autoClose: 2000,
    style: {
      width: "200px", // Set the desired width here
    },
  });
};

const removeCarts =(id)=>{
  console.log(id,"cart id is")
  dispatch(removeCart(id));
  notify()
}
const [emptyBox,setEmptyBox]=useState()
useEffect(()=>{
  if(cartContainer.length===0){
    setEmptyBox(true)
   
  }
  else( setEmptyBox(false))
},[cartContainer.length])

const buy = () => toast.success("Thankyou for Shopping!");
const buySuccess =()=>{
  dispatch(emptyCart())
  buy()
}


  const amountTotal = cartContainer.reduce((acc, item) => {
    return acc + item.price; // Assuming each item has a `price` property
  }, 0);

const [tableData,setTableData]=useState(false)

const showData=()=>{
setTableData(true)
}

const closeTable=()=>{
  setTableData(false)
}

  return (
    <>
    
      <Container>
      {cartContainer.length>0 ?
        <div className="row py-5 ">
          <div className="col-sm-12 left-cart ">
            {cartContainer.map((items) => {
              
              return (
                <>
                  <div className="row cart-element-container">
                    <div className="col-md-4 cartImg-container"  key={items.id}>
                      <img className="cartImg" src={items.image} />
                    </div>
                    <div className="col-md-8">
                      <div className="pb-2 ">{items.title}</div>    
                      <div className="pb-2">Brand : {items.brand}</div>
                      <div className="pb-2">
                        Price :{" "}
                        <span className="text-success fw-bolder">
                          ${items.price}
                        </span>
                      </div>                    
                    </div>
                    <div className="fs-4 cross text-danger" onClick={()=>removeCarts(items.id)}><RxCross2 /></div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="col-md-6 col-sm-8 mx-auto totalContainer py-5">
  <h2 className="text-center">Total Amount = ${amountTotal}</h2>
  <div className="col-sm-12 py-3 d-flex pb-5 justify-content-center gap-3 ">
   <button className="py-1 px-3 shop" onClick={buySuccess}>Buy!</button>
   <button className="py-1 px-3 shop" onClick={showData}>Details</button>
  </div>

  {tableData ? <table className=" ">
    <thead>
    <tr>
    <th></th>
    <th className=""> 
  <span className="py-1 px-3 shop" onClick={closeTable}> <RxCross2 /></span>
 </th></tr>
 <br/>
  
      <tr>
        <th className="col-10 text-center py-3 border">Title</th>
        <th className="col-1 py-3 border">Price</th>
      </tr>
    </thead>
    <tbody>
      {cartContainer.map((item, index) => (
        <tr key={index}>
          <td className="border py-3 px-2">{item.title.slice(0,30)+"..."}</td>
          <td className="border py-3 px-2">${item.price}</td>
        </tr>
      ))}
      <tr>
        <td className="border py-3 px-2"><strong>Total Amount</strong></td>
        <td className="border py-3 px-2">
          <strong>${cartContainer.reduce((total, item) => total + item.price, 0).toFixed(2)}</strong>
        </td>
      </tr>
    </tbody>
  </table> :""}
  {tableData ? <div className="col-12 text-center pt-4">
  <button className="py-1 px-3 shop" onClick={closeTable}>Close</button>
</div> : ""}

</div>


 </div>
   :""}    
         {emptyBox ?( <div className="row py-5 empty-box" id="box">
           <div className="col-12">
             <div className=" text-center"><h2>Your Cart Is Empty <HiOutlineEmojiSad /></h2>
           <Link to="/">  <button className="shop my-4" id="shop">Continue Shop</button></Link></div>
           </div>
      </div>) : ""} 
              <ToastContainer />
    </Container>
    </>
  );
};
export default Cart;
