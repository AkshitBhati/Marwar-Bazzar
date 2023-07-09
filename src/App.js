import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Login from "./screens/Login";
import Register from "./screens/Register";
import Product from "./screens/Product";
import Cart from "./screens/Cart";
import { Toaster, toast } from "react-hot-toast";
import ProductScreen from "./screens/ProductScreen";
import Paintings from "./screens/Paintings";
import Bags from "./screens/Bags";
import Decor from "./screens/Decor";
import { auth } from "./config";
import UserCard from "./screens/UserCard";

import "./App.css"
import "./styles/navbar.scss"
import "./styles/home.scss"
import "./styles/category.scss"
import "./styles/login.scss"
import "./styles/register.scss"
import "./styles/Product.scss"
import "./styles/cart.scss"
import "./styles/productScreen.scss"
import "./styles/homeCategory.scss"
import "./styles/usercard.scss"


const App = () => {
 
 const [userName, setUserName] = useState("")

 useEffect(() => {
  try{
    
  auth.onAuthStateChanged((user) => {
    if(user){
      setUserName(user.displayName)
    }
    else{
      setUserName("")
    }
  })
} catch(err){
  
  toast.error("Please Login")
}
 }) 
  return(
    
    <>
     <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            fontSize: "1.2rem",
            fontWeight: "bold",
            background: "rgba(0, 0, 0, 0.8)",
            color: "#fff",
          },
        }}
      />
      <Router>
        <Navbar name={userName} />
        
          <Routes >
            <Route path="/" element={<Home />}  />
            <Route path="/login" element={<Login />}  />
            <Route path="/register" element={<Register />}  />
            <Route path="/products" element={<Product />}  />
            <Route path="/cart" element={<Cart />}  />
            <Route path="/productScreen" element={<ProductScreen />}  />
            <Route path="/paintings" element={<Paintings />}  />
            <Route path="/bags" element={<Bags />}  />
            <Route path="/decor" element={<Decor />}  />
            <Route path="/usercard" element={<UserCard  name={userName} />}  />
          </Routes>
        
      </Router>
    </>
    
  )
}

export default App
