import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  userId:null,
  isLoggedIn: false,
  login: (token,userId) => {},
  logout: () => {},
});
export const AuthContextProvider = (props) => {
  // Get the initial token from localStorage or set it to null if it doesn't exist
  const initialToken = localStorage.getItem('token') || null;
  const initialUserId = localStorage.getItem('userId') || null;


  // Use state to manage the token and userLoggedIn state
  const [token, setToken] = useState(initialToken);
  const [userId, setUserId] = useState(initialUserId);
  const userLoggedIn = !!token;

  // Function to handle login by setting the token in state and localStorage
  const loginHandler = (token,userId) => {
    setToken(token);
    setUserId(userId);
    localStorage.setItem('token', token);
    localStorage.setItem("userId", userId);
  };

  // Function to handle logout by clearing the token from state and localStorage
  const logoutHandler = () => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem('token');
  };

  const contextValue = {
    token: token,
    userId:userId,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
