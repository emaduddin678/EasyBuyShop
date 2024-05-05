import React from "react";
import PageTitle from "../components/PageTitle";
import ProductSidebar from "../components/ProductSidebar";

const Home = () => {
  return (
    <>
      <PageTitle title="Home" message="Home page component" />
      <div className="flex justify-around items-center">
        <div className="sidebar-container flex-[1]">
          <ProductSidebar />
        </div>
        <div className="main-container flex-[1]">
          <p>List of All Product</p>
        </div>
      </div>
    </>
  );
};

export default Home;
