// Write all the code here
import React from "react";
import MenuCard from "./MenuCard";
import Founder from "./Founder";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {
  // const incrementItem = item => {
  //   increment(item);
  // }
  return (
    <>
    <section id="menu">
      <h1>Menu</h1>
      <div>
        <MenuCard
          item = {"cheeseBurger"}
          burgerSrc = {burger1}
            price = {5}
          title={"CHEESE BURGER"}
         // incrementItem={incrementItem}
          delay = {0.8}
        />

        <MenuCard
          item = {"vegCheeseBurger"}
          burgerSrc = {burger2}
          price = {8}
          title={" VEG CHEESE BURGER"}
          //incrementItem={incrementItem}
          delay = {0.5}
        />

        <MenuCard
          item = {"cheeseBurgerFries"}
          burgerSrc = {burger3}
          price = {15}
          title={"CHEESE BURGER WITH FRENCH FRIES"}
          //incrementItem={incrementItem}
          delay = {0.1}
        />
      </div>
    </section>
      <Founder></Founder>
    </>
  );
};

export default Menu;
