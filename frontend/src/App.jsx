import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Landing from "./pages/Landing";

// Villager Pages
import VillagerLogin from "./pages/villager/VilagerLogin";
import VillagerRegister from "./pages/villager/VillagerRegister";
import Dashboard from "./pages/villager/Dashboard";
import AddSpring from "./pages/villager/AddSpring";
import SpringDetail from "./pages/villager/SpringDetail";
import AddWeeklyData from "./pages/villager/AddWeeklyData";
import EditSpring from "./pages/villager/EditSpring";

// NGO Pages
import NgoLogin from "./pages/ngo/NgoLogin";
import NgoRegister from "./pages/ngo/NgoRegister";
import NgoDashboard from "./pages/ngo/NgoDashboard";
import AddRechargeWork from "./pages/ngo/AddRechargeWork";
import RechargeWorks from "./pages/ngo/RechargeWorks";

// Components
import Navbar from "./components/Navbar";
import PrivateRoute from "./utils/PrivateRoute";

function Layout() {

  const location = useLocation();

  const hideNavbar =
    location.pathname === "/" ||
    location.pathname === "/villager/login" ||
    location.pathname === "/villager/register" ||
    location.pathname === "/ngo/login" ||
    location.pathname === "/ngo/register";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>

        {/* Landing */}
        <Route path="/" element={<Landing />} />

        {/* Villager Auth */}
        <Route path="/villager/login" element={<VillagerLogin />} />
        <Route path="/villager/register" element={<VillagerRegister />} />

        {/* NGO Auth */}
        <Route path="/ngo/login" element={<NgoLogin />} />
        <Route path="/ngo/register" element={<NgoRegister />} />

        {/* Villager Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* NGO Dashboard */}
        <Route
          path="/ngo/dashboard"
          element={
            <PrivateRoute>
              <NgoDashboard />
            </PrivateRoute>
          }
        />

        {/* Recharge Works */}
        <Route
          path="/ngo/works"
          element={
            <PrivateRoute>
              <RechargeWorks />
            </PrivateRoute>
          }
        />

        {/* Add Recharge Work */}
        <Route
          path="/ngo/recharge/:springId"
          element={
            <PrivateRoute>
              <AddRechargeWork />
            </PrivateRoute>
          }
        />

        {/* Spring CRUD */}
        <Route
          path="/add-spring"
          element={
            <PrivateRoute>
              <AddSpring />
            </PrivateRoute>
          }
        />

        <Route
          path="/spring/:id"
          element={
            <PrivateRoute>
              <SpringDetail />
            </PrivateRoute>
          }
        />

        <Route
          path="/add-data/:id"
          element={
            <PrivateRoute>
              <AddWeeklyData />
            </PrivateRoute>
          }
        />

        <Route
          path="/edit-spring/:id"
          element={
            <PrivateRoute>
              <EditSpring />
            </PrivateRoute>
          }
        />

      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;