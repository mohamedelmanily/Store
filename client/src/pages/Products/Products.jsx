import React, { useEffect, useState } from "react";
import "./Products.scss";
import List from "../../components/list/List";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxprice, setmaxPrice] = useState(100);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(`/sub-categories`);
 
  function getCount(e) {
    setmaxPrice(e.target.value);
  }
  // console.log(catId);
  console.log(data);
  function handleChange(e) {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((i) => i !== value)
    );
  }

 
  console.log(selectedSubCats);
  return (
    <div className="products">
      <div className="left">
        <div className="filterProduct">
          <h3>Product Categories</h3>

          {error
            ? "erorrrr"
            : loading
            ? "loading"
            : data?.map((item) => (
                <div className="inputItem" key={item.id}>
                  <input
                    type="checkbox"
                    id={item.id}
                    value={item.id}
                    onClick={handleChange}
                  />
                  <label htmlFor={item.id}>{item.attributes.title}</label>
                </div>
              ))}
        </div>
        <div className="filterProduct">
          <h3>Filter By Price</h3>
          <span>$0</span>
          <input type="range" min={0} value={maxprice} max={100} onChange={getCount} />
          <span>${maxprice}</span>
        </div>
        
        <div className="filterProduct">
          <h3>Sort By</h3>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value='asc'
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="3">Price(Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              name="price"
              value='desc'
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="4">Price(Highest first)</label>
          </div>
        </div>
      </div>

      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catId={catId} sort={sort} maxprice={maxprice} selectedSubCats={selectedSubCats} />
      </div>
    </div>
  );
};

export default Products;
