// Footer.js
import React from 'react';
import {FaInstagram, FaFacebookF, FaTwitter,FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="info">
                <h2>Airline Ticket Booking</h2>
                <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maxime harum eum consequatur,
                    distinctio suscipit in corrupti quae quos, dolor eveniet sunt neque adipisci possimus,
                    recusandae expedita est blanditiis architecto.
                </div>
                <div className="icon">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={25} />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF size={25} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={25} />
                    </a>
                </div>
            </div>
            <div className="contact">
                <h2>Contact</h2>
                <div className="address">
                    <FaMapMarkerAlt size={25} /> kh-5, ldrp-itr, gandhinagar-84001
                </div>
                <div className="number">
                    <FaPhoneAlt size={25} /> +1 234567890
                </div>
                <div className="email">
                    <FaEnvelope size={25} /> lderitr@gmail.com
                </div>
            </div>
        </footer>
    );
};

export default Footer;
