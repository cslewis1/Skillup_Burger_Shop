// Write all the code here
import React from "react";
import Menu from "./Menu";

const Home = ({increment}) => {
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
