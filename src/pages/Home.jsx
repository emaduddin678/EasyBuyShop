import React from "react";
import PageTitle from "../components/PageTitle";
import ProductSidebar from "../components/ProductSidebar";
import { useSelector } from "react-redux";

const Home = () => {
  const count = useSelector(state=>state.counterR.value)
  // console.log(count)
  return (
    <>
      <PageTitle title="Home" message="Home page component" />
      <div className="flex justify-around items-center">
        <div className="sidebar-container flex-[1]">
          <ProductSidebar />
        </div>
        <div className="main-container flex-[1]">
          <p>List of All Product {count}</p>
        </div>
      </div>
    </>
  );
};

export default Home;
