import React from "react";
import Register from "../pages/register";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Post from "../pages/post";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="/post" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default Router;
