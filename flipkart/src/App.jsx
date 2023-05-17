/* eslint-disable no-unused-vars */

import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Navbar from "./components/navbar";
import { Provider } from "react-redux";
import store from "./store/index.js";
import Home from "./components/home";
import Cart from "./components/cart";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
