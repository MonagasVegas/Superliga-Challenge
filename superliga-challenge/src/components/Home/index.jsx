import React from "react";
import Header from "../Header";
import Container from "../Container";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <Header />
      </div>

      <div >
        <Container />
      </div>
    </div>
  );
};

export default Home;
