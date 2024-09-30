// Home.js
import React from 'react';
import '../App.css';
import backgroundImage from '../Component/air.jpg';
import Header from './Header';
import Footer from './Footer';

const Home = ({ user = {} }) => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }} className="container">
            <Header user={user} />
            <main className="world">
                <h1>EXPLORE WORLD!!!</h1>
                <div className="book">
                    <p>Book Your Ticket Now</p>
                </div>
                <div className="btn">
                    <button className="first-btn"><a href="/booking">Book Now</a></button>
                    <button className="second-btn"><a href="/service">Our Services</a></button>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
