import React from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main";

// Function to get the value of a cookie by name
const getCookie = (name) => {
  const cookieString = document.cookie;
  const cookies = cookieString.split("; ").reduce((acc, cookie) => {
    const [key, value] = cookie.split("=");
    acc[key] = value;
    return acc;
  }, {});
  return cookies[name];
};

// Check if the user is logged in by checking the authToken cookie
const isLoggedIn = () => {
  return !!getCookie("authToken");
};

const ProtectedRoute = ({ element }) => {
  return isLoggedIn() ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<ProtectedRoute element={<Main />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
