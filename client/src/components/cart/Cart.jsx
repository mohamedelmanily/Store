import React from "react";
import "./Cart.scss";
import { Delete } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../cartReducer";

const Cart = () => {  
  const dispatch=useDispatch()

const products=useSelector((state)=>state.cart.products)
console.log(products);
const total=()=>{
  let totalPrice=0;
  products.forEach(element => {
    totalPrice +=element.price*element.count
  });
  return totalPrice
}
  return (
    <div className="cartProducts">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="cartProduct">
          <div className="image">
            <img src={item.img} alt="" />
          </div>
          <div className="details">
            <h2>{item.title}</h2>
            <p>{item.desc.substring(0,80)}</p>
            <span className="price">{item.count} x ${item.price}</span>
          </div>
          <button className="delete"  onClick={()=>dispatch(removeItem(item.id))}>
          <Delete />
          </button>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span className="price">${total()}</span>
      </div>
      <button className="check">proceed to checkout</button>
      <span className="reset" onClick={()=>dispatch(resetCart())}>reset cart</span>
    </div>
  );
};

export default Cart;
