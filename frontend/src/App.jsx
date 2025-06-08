import React, { useState } from "react";
import Login from "./components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Update from "./components/Update";
import NavBar from "./components/NavBar";
import Logout from "./components/Logout";
export default function App()
{
  let [isLoggedIn,setIsLoggedIn] = useState(false);
  return(
    <BrowserRouter>
    <NavBar isLoggedIn={isLoggedIn}/>
    <Routes>
      <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/profile" element={<Profile setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/update" element={<Update setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn}/>}/>
    </Routes>
    </BrowserRouter>
  )
}