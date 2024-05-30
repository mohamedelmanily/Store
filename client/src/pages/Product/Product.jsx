import React, { useEffect, useState } from "react";
import "./Product.scss";
import {AddShoppingCartOutlined,BalanceOutlined,FavoriteBorderOutlined,} 
from "@mui/icons-material";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../cartReducer";

const Product = () => {
  const productId = parseInt(useParams().id);
  const [count, setCount] = useState(1);
  const [source, setSource] = useState('img');
  let { data, loading, error } = useFetch(`/products/${productId}?populate=*`);
  const dispatch=useDispatch()

  return (
    <div className="product">
      {loading?'loading...':
      <>
      <div className="left">
        <div className="images">
          <img src={import.meta.env.REACT_APP_UPLOAD_URL+data?.attributes?.img?.data?.attributes?.url} alt="" onClick={() => setSource('img')} />
          <img src={import.meta.env.REACT_APP_UPLOAD_URL+data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={() => setSource('img2')} />
        </div>
        <div className="mainImg">
          <img src={import.meta.env.REACT_APP_UPLOAD_URL+data?.attributes[source]?.data?.attributes?.url} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{data && data.attributes.title}</h1>
        <span className="price">${data && data.attributes.price}</span>
        <p>
        {data && data.attributes.desc}
        </p>
        <div className="quantity">
          <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</button>
          {count}
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <button className="cart" onClick={()=>dispatch(addToCart({
          id:data.id,
          title:data.attributes.title,
          desc:data.attributes.desc,
          price:data.attributes.price,
          img:import.meta.env.REACT_APP_UPLOAD_URL+data?.attributes[source]?.data?.attributes?.url,
          count
        }))}>
          <AddShoppingCartOutlined /> Add To Cart
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderOutlined />
            Add To Wish List
          </div>
          <div className="item">
            <BalanceOutlined />
            Add To Compare
          </div>
        </div>
        <div className="info">
          <span>Vendor:</span>
          <span>Product Type:T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>Discription</span>
          <span>Addtional Info</span>
          <span>FAQ</span>
        </div>
      </div>
      </>
    }
    </div>
      
  );
};

export default Product;
