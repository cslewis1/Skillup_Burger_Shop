// Write all the code here
import React from "react";
import Menu from "./Menu";
//import { motion } from "framer-motion";

const Home = ({increment}) => {
    const options = {
        initial: {
            x: "-100%",
            opacity: 0,
        },
        whileInView: {
            x: 0,
            opacity: 1,
        },
    };

    return (
        <>
            <section className="home">
                <div>
                    <h1>Burger Shop</h1>
                    <p>Give yourself a tasty burger</p>
                </div>
                <a href="#menu">Explore Menu</a>
            </section>
            <Menu increment={increment} />
        </>
    )
}

export default Home;
