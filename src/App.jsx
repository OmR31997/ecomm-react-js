import React from "react";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent.";
import FooterComponent from "./components/FooterComponent";
import HomeComponent from "./pages/HomeComponent";
import CartComponent from "./pages/CartComponent"; 
import RegisterComponent from "./pages/RegisterComponent";
import LoginComponent from "./pages/LoginComponent";
import ProtectedRoute from "./routes/ProtectedRoute";
import LogoutComponent from "./components/LogoutComponent";

const App = () =>{
  return(
  <Router>
    <HeaderComponent/>
    <Routes>
      <Route path="/" element={< HomeComponent/>}></Route>
      <Route path={`/dashboard`} element={<ProtectedRoute><HomeComponent /> <LogoutComponent /></ProtectedRoute>}></Route>
      <Route path={`/cart`} element={<ProtectedRoute><CartComponent /></ProtectedRoute>}></Route>
      <Route path={`/register`} element={<RegisterComponent />}></Route>
      <Route path={`/login`} element={<LoginComponent />}></Route>
    </Routes>
    <FooterComponent />
  </Router>)
}

export default  App