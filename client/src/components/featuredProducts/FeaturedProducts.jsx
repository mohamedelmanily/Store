import Card from "../card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";
import { Skeleton } from "@mui/material";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[type]=${type}`
  );
  // console.log(data);
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Explore products with high-res images, various colors, customizable
          sizes, and detailed descriptions. Get insights from customer reviews
          and easily add items to your cart for a seamless shopping experience
        </p>
      </div>
      <div className="bottom">
        {error ? (
          "there is Error"
        ) : loading ? (
          <div>
               <div>
            <Skeleton variant="rectangular" width={210} height={100} />
            <Skeleton variant="text" width={120} height={30} />
            <Skeleton variant="text" width={80} height={30} />
          </div>

          </div>
       
        ) : (
          data && data.map((i) => <Card item={i} key={i.id} />)
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
