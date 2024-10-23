import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div>
      <header>
        <h3 className="logo">
          <Link to="/">Hogwarts</Link>
        </h3>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="#">About Us</Link>
        </nav>
      </header>
      <center>

      <div className="glass-container-login">
        <div className="login-box">
          <h2>Login</h2>
          <form action="#">
            <input type="text" id="username" name="username" placeholder="Username" required/>
            <input type="password" id="password" name="password" placeholder="Password" pattern="(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}"
                title="Password must be at least 6 characters, contain letters and at least one special character." required/>

            <center><button type="submit">Login</button></center>
            
            <p>Don't have an account? <Link to="/register" id="register">Register</Link></p>
          </form>
        </div>
      </div>
      
      <footer className="footer">
        <p>© 2024 | Britney Beligan - Samantha Pauline Ines | WebDev | Highly Succeed Inc.</p>
      </footer></center>
    </div>
  );
};

export default LoginPage;