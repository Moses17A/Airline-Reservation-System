import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../App.css';
import '../Header.css';

const Header = ({ user }) => {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNo: '',
        password: '',
        confirmPassword: '',
        username: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, mobileNo, password, confirmPassword } = formData;
        if (!firstName || !lastName || !email || !mobileNo || !password || !confirmPassword) {
            Swal.fire('Please fill out all fields.');
            return;
        }
        if (password !== confirmPassword) {
            Swal.fire('Passwords do not match.');
            return;
        }
        
        // Call your registration API here
        
        Swal.fire('Registration successful!', '', 'success');
        setShowRegister(false);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const { username, password } = formData;
        if (!username || !password) {
            Swal.fire('Please fill out both fields.');
            return;
        }

        // Call your login API here
        
        Swal.fire('Login successful!', '', 'success');
        setShowLogin(false);
    };

    return (
        <header className="header">
            <div className="logo">Your Logo</div>
            <nav className="list-navbar">
                <ul className="list-container">
                    <li><a href="/">Home</a></li>
                    <li><a href="/service">Service</a></li>
                    <li><a href="/booking">Booking</a></li>
                    {user.isAuthenticated ? (
                        <li className="user">
                            My account
                            <ul className="dropdown">
                                <li>{user.first_name}</li>
                                <li><a href="/logout">Logout</a></li>
                            </ul>
                        </li>
                    ) : (
                        <>
                            <li><button onClick={() => setShowLogin(true)}>Log In</button></li>
                            <li><button onClick={() => setShowRegister(true)}>Register</button></li>
                        </>
                    )}
                </ul>
            </nav>

            {showRegister && (
                <div className="modal">
                    <form onSubmit={handleRegisterSubmit} className="register-form">
                        <h2>Register</h2>
                        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
                        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                        <input type="tel" name="mobileNo" placeholder="Mobile Number" onChange={handleChange} />
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
                        <button type="submit">Submit</button>
                        <button type="button" onClick={() => setShowRegister(false)}>Close</button>
                    </form>
                </div>
            )}

            {showLogin && (
                <div className="modal">
                    <form onSubmit={handleLoginSubmit} className="login-form">
                        <h2>Log In</h2>
                        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                        <button type="submit">Login</button>
                        <button type="button" onClick={() => setShowLogin(false)}>Close</button>
                    </form>
                </div>
            )}
        </header>
    );
};

export default Header;
