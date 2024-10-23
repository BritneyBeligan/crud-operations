import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./AccPage.css";

const AccPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const firstName = queryParams.get("firstname");
  const lastName = queryParams.get("lastname");
  const username = queryParams.get("username");
  const email = queryParams.get("email");

  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const storedImage = localStorage.getItem("uploadedImage");
    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, []);

  return (
    <div>
      <header>
        <h3 className="logo">Hogwarts</h3>
        <nav className="navigation">
          <Link to="/">Logout</Link>
        </nav>
      </header>

      <div className="glass-container-acc">
        <center>
          <h2>Profile</h2>
          {profileImage && (
            <div>
              <img src={profileImage} alt="Profile"/>
            </div>
          )}

          <h4>{firstName} {lastName}</h4>
          <h4>Username: {username}</h4>
          <h4>Email: {email}</h4>

          <Link to="/update">
            <button className="edit-btn">Edit</button>
          </Link>
          <Link to="/">
            <button className="deact-btn">Deactivate Account</button></Link>
        </center>
      </div>

      <footer className="footer">
        <p>© 2024 | Britney Beligan - Samantha Pauline Ines | WebDev | Highly Succeed Inc.</p>
      </footer>
    </div>
  );
};


export default AccPage;
