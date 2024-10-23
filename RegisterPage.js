import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RegisterPage.css";

const RegisterPage = () => {
  const navigate = useNavigate();

  const redirectToDisplay = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmp");
    const imageFile = formData.get("profile-pic");

    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return; // Prevent form submission
    }
    
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageBase64 = reader.result;

        localStorage.setItem("uploadedImage", imageBase64);

        const params = new URLSearchParams(formData).toString();
        navigate(`/?${params}`);
      };
      reader.readAsDataURL(imageFile);
    } else {
      const params = new URLSearchParams(formData).toString();
      navigate(`/?${params}`);
    }
  };

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

      <div className="glass-container-register">
        <center>
          <h2>Register</h2>
          <form className="form-inline" onSubmit={redirectToDisplay}>
          <div className="form-group">
            <input type="file" id="profile-pic" name="profile-pic" accept="image/*" required/>
            <h5>Upload your profile picture</h5>
          </div>

            <div className="form-group">
              <input type="text" id="firstname" name="firstname" required placeholder="Firstname"/>
              <input type="text" id="lastname" name="lastname" required placeholder="Lastname"/>
            </div>

            <div className="form-group">
              <input type="text" id="username" name="username" required placeholder="Username"/>
              <input type="email" id="email" name="email" required placeholder="Email Address"/>
            </div>

            <div class="form-group">
              <input type="password" id="password" name="password" required placeholder="Password"
                pattern="(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[\W_]).{6,}"
                title="Password must be at least 6 characters, contain an uppercase letter, a lowercase letter, a number, and a special character."/>
              <input type="password" id="confirmp" name="confirmp" required placeholder="Confirm Password"/>
            </div>

            <Link to="\">

            <center><button type="submit">Submit</button></center></Link>

            <p>Already have an account? <Link to="/" id="login">Login</Link></p>
          </form>
        </center>
      </div>

      <footer className="footer">
        <p>© 2024 | Britney Beligan - Samantha Pauline Ines | WebDev | Highly Succeed Inc.</p>
      </footer>
    </div>
  );
};

export default RegisterPage;