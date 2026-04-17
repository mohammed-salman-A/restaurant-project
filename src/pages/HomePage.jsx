import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
  <Header restaurantName="Arabian Kitchen" />

  <h2>Welcome</h2>
  <p>Write a short description about your restaurant</p>

  <Menu/>

  <Footer year="2026" footerText="All rights reserved" />
</>
  );
};
export default HomePage;    