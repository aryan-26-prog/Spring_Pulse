import React from "react"
import { Link } from "react-router-dom"

function Navbar(){

 const role = localStorage.getItem("role")

 return(

  <div className="bg-gray-900 text-white p-4 flex gap-6">

   {/* Villager Menu */}
   {role === "villager" && (
    <>
     <Link to="/dashboard">Dashboard</Link>
     <Link to="/add-spring">Add Spring</Link>
    </>
   )}

   {/* NGO Menu */}
   {role === "ngo" && (
    <>
     <Link to="/ngo/dashboard">Dashboard</Link>
     <Link to="/ngo/works">Recharge Work</Link>
    </>
   )}

  </div>

 )

}

export default Navbar