import React from "react";
import PageTitle from "../components/PageTitle";
import ProductSidebar from "../components/ProductSidebar";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../app/features/counter/counterSlice";

const Home = () => {
  const count = useSelector((state) => state.counterR.value);
  // console.log(count)
  const dispatch = useDispatch();
  const handleInc = () => {
    dispatch(increment());
  };
  return (
    <>
      <PageTitle title="Home" message="Home page component" />
      <div className="flex justify-around items-center">
        <div className="sidebar-container flex-[1]">
          <ProductSidebar />
        </div>
        <div className="main-container flex-[1]">
          <p>List of All Product {count}</p>
          <h1>Redux checked</h1>
          {/* <div>
            <button className="p-2 bg-gray-500 rounded-lg" onClick={handleInc}>
              Increment
            </button>
            <br />
            <button
              className="p-2 bg-gray-500 rounded-lg"
              onClick={() => {
                dispatch(decrement());
              }}
            >
              decrement
            </button>
            <br /><br />
            <button onClick={() => {dispatch(incrementByAmount(5));}}>Increment</button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
