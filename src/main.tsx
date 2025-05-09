import React from "react";
import ReactDOM, { Container } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Gallery from "./Gallery";
import "./index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root as Container).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/products" element={<Gallery />} />
    </Routes>
  </BrowserRouter>
);
