import React from "react";
import "./List.scss";
import Card from "../card/Card";
import useFetch from "../../hooks/useFetch";
import { Skeleton } from "@mui/material";

const List = ({ selectedSubCats, maxprice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    
    `/products?populate=*&filters[categories][id]=1`
    // + selectedSubCats.map((item) => `&filters[sub_categories][id]=${item}`)
    // + `&filters[price][$lte]=${maxprice}`
    // + (sort ? `&sort=price:${sort}` : '')
  );
  console.log(data);
  return (
<div className="list">
  {loading
    ? Array.from({ length: 5 }).map((_, index) => (
        <Skeleton variant="rectangular" width={210} height={118} key={index} />
      ))
    : data?.map((item) => <Card item={item} key={item.id} />)}
</div>
  );
};

export default List;
