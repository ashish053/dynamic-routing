import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import User from "../Components/User";
import About from "../Components/About";
import Userdetail from "../Components/Userdetail";
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />}>
          <Route path="/user/:name" element={<Userdetail />} />
        </Route>

        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Routing;
