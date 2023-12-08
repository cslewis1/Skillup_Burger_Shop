// Write all the code here
import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <>
    <div
        style={{
          background: "darkred",
          height: "5px",
        }}
      />
    <footer>
      <div>
      <h2>Burger Shop</h2>
        <p>We are trying to give you the best taste possible.</p>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="https://youtube.com/">
          <AiFillYoutube />
        </a>
        <a href="https://instagram.com/">
          <AiFillInstagram />
        </a>
        <a href="https://www.github.com">
          <AiFillGithub />
        </a>
      </aside>
      </footer>
    </>
  );
};

export default Footer;
