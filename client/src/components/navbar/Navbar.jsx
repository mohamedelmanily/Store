import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import './Navbar.scss'
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";
import { DarkModeOutlined } from "@mui/icons-material";

const Navbar = ({toggleMode}) => {
const[open,setOpen]=useState(false);
const products=useSelector((state)=>state.cart.products)
const [navcolor,setNavColor]=useState('white')

function handleNav(){
  setNavColor(prev=>prev=='white'?'#282828':'white')
}
  return (
    <div className="navbar" style={{backgroundColor:navcolor}}>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="../../../public/imgs/en.png" alt="language" />
            <KeyboardArrowDownIcon />
          </div>

          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className='link' to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/3">Accessories</Link>
          </div>
        </div>
        <div className="center">
          <Link className='link' to="/">CITYSTORE</Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className='link' to="/about">About</Link>
          </div>
          <div className="item">
            <Link className='link' to="/contact">Contact</Link>
          </div>
          <div className="icons">
          <PersonOutlinedIcon/>
          <DarkModeOutlined onClick={(()=>{toggleMode(),handleNav()})}/>
          <SearchOutlinedIcon/>
          <div className="cart" onClick={()=>{setOpen(!open)}}>
            <ShoppingCartOutlinedIcon/>
           <span>{products.length}</span>
          </div>
          </div>

        </div>
      </div>
      
      {open&&<Cart/>}
    </div>
  );
};
export default Navbar;
