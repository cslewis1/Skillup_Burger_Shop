// Write all the code here
import React from "react";
import MenuCard from "./MenuCard";
import Founder from "./Founder";
import burger1Img from "../../assets/burger1.png";
import burger2Img from "../../assets/burger2.png";
import burger3Img from "../../assets/burger3.png";

const Menu = ({ increment }) => {
  const incrementItem = (item) => {
    increment(item);
  };
  return (
    <>
      <section id="menu">
        <h1>Menu</h1>
        <div>
          <MenuCard
            item={"burger1"}
            burgerSrc={burger1Img}
            price={5}
            title={"CHEESE BURGER"}
            incrementItem={incrementItem}
            delay={0.8}
          />

          <MenuCard
            item={"burger2"}
            burgerSrc={burger2Img}
            price={8}
            title={" VEG CHEESE BURGER"}
            incrementItem={incrementItem}
            delay={0.5}
          />

          <MenuCard
            item={"burger3"}
            burgerSrc={burger3Img}
            price={15}
            title={"CHEESE BURGER WITH FRENCH FRIES"}
            incrementItem={incrementItem}
            delay={0.1}
          />
        </div>
      </section>
      <Founder></Founder>
    </>
  );
};

export default Menu;
