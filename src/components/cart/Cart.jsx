import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import burger1Img from "../../assets/burger1.png";
import burger2Img from "../../assets/burger2.png";
import burger3Img from "../../assets/burger3.png";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = ({ increment, decrement, burger1, burger2, burger3 }) => {
  //useState variables
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [shipping, setShipping] = useState(0);

  //Function to calculate the subtotal and tax amount of total order
  useEffect(() => {
    const burger1Total = 5 * burger1;
    const burger2Total = 8 * burger2;
    const burger3Total = 15 * burger3;

    const subTotal = burger1Total + burger2Total + burger3Total;

    setTotal(subTotal);
    setTax(0.1 * subTotal);
    setShipping(0.08 * subTotal);
  }, [burger1, burger2, burger3]);

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Burger"}
          img={burger1Img}
          value={burger1}
          increment={() => increment("burger1")}
          decrement={() => decrement("burger1")}
        />
        <CartItem
          title={"Veg Cheese Burger"}
          img={burger2Img}
          value={burger2}
          increment={() => increment("burger2")}
          decrement={() => decrement("burger2")}
        />
        <CartItem
          title={"Cheese Burger with French Fries"}
          img={burger3Img}
          value={burger3}
          increment={() => increment("burger3")}
          decrement={() => decrement("burger3")}
        />
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>${total.toFixed(2)}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>${tax.toFixed(2)}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>${shipping.toFixed(2)}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>${(total + tax + shipping).toFixed(2)}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
