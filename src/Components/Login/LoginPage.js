import React, { useState, useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import { MdEmail, MdPassword } from "react-icons/md";
import './LoginPage.css';
import {useNavigate} from "react-router-dom"

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); // Initially show login form
  const AuthCtx = useContext(AuthContext);
  const navigate = useNavigate(); 

  const handleAuth = async (e) => {
    e.preventDefault();
    let url;
    let requestBody = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCsSS0LbG66S6kUOKA9wDkzWKf8wBMp5f4";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCsSS0LbG66S6kUOKA9wDkzWKf8wBMp5f4";
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        let errorMsg = isLogin
          ? "Authentication failed!"
          : "Registration failed!";
        throw new Error(errorMsg);
      }
      const data = await response.json();
      AuthCtx.login(data.idToken);
      navigate("/store")
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="form-box">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={handleAuth}>
          <div className="input-grp">
            <div className="input-fld">
              <MdEmail className="icon" />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              ></input>
            </div>
            <div className="input-fld">
              <MdPassword className="icon" />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              ></input>
            </div>
          </div>
          <div className="btn-fld">
            <button type="submit">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </div>
        </form>
        <p className="toggle" onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Don't have an account? Sign up here."
            : "Already have an account? Login here."}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
