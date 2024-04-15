import React from "react";
import Home from "../pages/Home";

import Menu from "../pages/menu";
import Contact from "../pages/Contact";
import Functions from "../pages/Functions";

import { Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/functions" element={<Functions />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
