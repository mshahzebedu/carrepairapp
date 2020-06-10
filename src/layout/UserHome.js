import React from "react";
import NavBar from "../components/navbar/Navbar";
import Slider from "../components/slider/Slider";
import Catagories from "../components/catagories/Catagories";
import Accessories from "../components/accessories/Accessories";
import PopularProducts from "../components/popularProduct/PopularProducts";
import News from "../components/news/News";
import Clients from "../components/clients/Clients";
import Footer from "../components/footer/Footer";

const UserHome = () => {
  return (
    <div>
      <NavBar />
      <Slider />
      <Catagories />
      <Accessories />
      <PopularProducts />
      <News />
      <Clients />
      <Footer />
    </div>
  );
};

export default UserHome;
