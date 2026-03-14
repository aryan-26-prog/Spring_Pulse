import React from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import AddSpring from "./pages/AddSpring"
import SpringDetail from "./pages/SpringDetail"
import AddWeeklyData from "./pages/AddWeeklyData"
import EditSpring from "./pages/EditSpring"

import Navbar from "./components/Navbar"
import PrivateRoute from "./utils/PrivateRoute"

function Layout(){

 const location = useLocation()

 const hideNavbar =
  location.pathname === "/" ||
  location.pathname === "/login" ||
  location.pathname === "/register"

 return(
  <>
   {!hideNavbar && <Navbar/>}

   <Routes>

    <Route path="/" element={<Landing/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>

    <Route path="/dashboard" element={
      <PrivateRoute>
        <Dashboard/>
      </PrivateRoute>
    }/>

    <Route path="/add-spring" element={
      <PrivateRoute>
        <AddSpring/>
      </PrivateRoute>
    }/>

    <Route path="/spring/:id" element={
      <PrivateRoute>
        <SpringDetail/>
      </PrivateRoute>
    }/>

    <Route path="/add-data/:id" element={
      <PrivateRoute>
        <AddWeeklyData/>
      </PrivateRoute>
    }/>

    <Route path="/edit-spring/:id" element={
      <PrivateRoute>
        <EditSpring/>
      </PrivateRoute>
    }/>

   </Routes>
  </>
 )
}

function App(){

 return(
  <BrowserRouter>
   <Layout/>
  </BrowserRouter>
 )

}

export default App