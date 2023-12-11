import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Cart = () => {
  //useState variables
  const [cheeseburger, setCheeseburger] = useState(0);
  const [vegCheeseburger, setVegCheeseburger] = useState(0);
  const [cheeseburgerFries, setCheeseburgerFries] = useState(0);

  //Increment and Decrement Cheeseburger Cart
  function increment1() {
    setCheeseburger(cheeseburger + 1);
  }

  function decrement1() {
    if (cheeseburger > 0) {
      setCheeseburger(cheeseburger - 1);
    }
  }

  //Increment and Decrement Veg Cheeseburger Cart
  function increment2() {
    setVegCheeseburger(vegCheeseburger + 1);
  }
  function decrement2() {
    if (vegCheeseburger > 0) {
      setVegCheeseburger(vegCheeseburger - 1);
    }
  }

  //Increment and Decrement Cheeseburger and Fries Cart
  function increment3() {
    setCheeseburgerFries(cheeseburgerFries + 1);
  }
  function decrement3() {
    if (cheeseburgerFries > 0) {
      setCheeseburgerFries(cheeseburgerFries - 1);
    }
  }

  return (
    <section className="cart">
      <main>
        <div className="cartItem">
          <div>
            <h4>{"Cheese Burger"}</h4>
            <img src={burger1} alt="Item" />
          </div>

          <div>
            <button onClick={decrement1}>-</button>
            <input type="number" readOnly value={cheeseburger} />
            <button onClick={increment1}>+</button>
          </div>
        </div>
        <div className="cartItem">
          <div>
            <h4>{"Veg Cheese Burger"}</h4>
            <img src={burger2} alt="Item" />
          </div>

          <div>
            <button onClick={decrement2}>-</button>
            <input type="number" readOnly value={vegCheeseburger} />
            <button onClick={increment2}>+</button>
          </div>
        </div>

        <div className="cartItem">
          <div>
            <h4>{"Cheese Burger with Fries"}</h4>
            <img src={burger3} alt="Item" />
          </div>

          <div>
            <button onClick={decrement3}>-</button>
            <input type="number" readOnly value={cheeseburgerFries} />
            <button onClick={increment3}>+</button>
          </div>
        </div>

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>${28}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>${28 * 0.08}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>${5.0}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>${5.0 + 5.0 * 0.08 + 28}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
