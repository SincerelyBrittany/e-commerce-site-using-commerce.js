import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Product from "./components/products/product";
import About from "./components/about/About";
import Cart from "./components/cart/Cart";
import Login from "./components/auth/login/Login";
import Signup from "./components/auth/signup/Signup";
import Contact from "./components/contact/Contact";
import Layout from "./components/Layout/Layout";

const App = () => {
  const [products, setProducts] = React.useState();

  const getProducts = async () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };
  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/products"
          element={<Products product={products} />}
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/products/:id" element={<Product product={products} />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Layout>
  );
};

export default App;
