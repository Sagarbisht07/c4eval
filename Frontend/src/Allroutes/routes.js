import React from "react";
import Register from "../pages/register";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Post from "../pages/post";
import Home from "../pages/Home";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/post" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default Router;
