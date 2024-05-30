import React from "react";
import Slider from "../../components/slider/Slider";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";
import Categories from "../../components/categories/Categories";
import Contact from "../../components/contact/Contact";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts type={"featured"} />
      <Categories />
      <FeaturedProducts type={"trending"} />
      <Contact />
    </div>
  );
};

export default Home;
