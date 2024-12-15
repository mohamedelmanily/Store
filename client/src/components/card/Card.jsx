import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>new collection</span>}
          <img
            src={
              import.meta.env.REACT_APP_UPLOAD_URL +
              item.attributes.img.data.attributes.url
            }
            alt="image1"
            className="img1"
          />
          <img
            src={
              import.meta.env.REACT_APP_UPLOAD_URL +
              item.attributes.img2.data.attributes.url
            }
            alt="image2"
            className="img2"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>
           ${item ? (item.attributes.price + 15 ) : (5*<Skeleton variant="text" width={120} height={30} />)}
          </h3>
          <h3>${item?item.attributes.price:(5*<Skeleton variant="text" width={80} height={30} />)}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
