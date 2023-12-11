// Write all the code here
import React from "react";
import { Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import me from "../../assets/skj.jpg";


const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About US</h1>
        <article>
          <h4>BURGER SHOP</h4>
          <p>
            This is Burger Shop. The place for the most tasty burgers on the
            entire earth.
          </p>
          <p>
            Explore the various types of food and burgers. Click below to see
            the menu.
          </p>
          <Link to="/">
            <IoFastFoodOutline />
          </Link>
        </article>

        <div>
          <h2>FOUNDER</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Nelson</h3>
            </div>
            <p>
              I am Nelson, the founder of Burger Shop. Affiliated to God's
              Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
