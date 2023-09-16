import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});
export const AuthContextProvider = (props) => {
  // Get the initial token from localStorage or set it to null if it doesn't exist
  const initialToken = localStorage.getItem('token') || null;

  // Use state to manage the token and userLoggedIn state
  const [token, setToken] = useState(initialToken);
  const userLoggedIn = !!token;

  // Function to handle login by setting the token in state and localStorage
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  // Function to handle logout by clearing the token from state and localStorage
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const contextValue = {
    token: token,
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
