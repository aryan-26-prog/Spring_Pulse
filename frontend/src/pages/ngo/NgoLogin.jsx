import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import API from "../../api/api"

function NgoLogin(){

 const navigate = useNavigate()

 const [email,setEmail] = useState("")
 const [password,setPassword] = useState("")

 const submit = async(e)=>{

  e.preventDefault()

  try{

   const res = await API.post("/ngo/login",{
    email,
    password
   })

   localStorage.setItem("token",res.data.token)
   localStorage.setItem("role","ngo")

   navigate("/ngo/dashboard")

  }catch(err){

   alert(err.response?.data?.message || "Login failed")

  }

 }

 return(

  <div>

   <h2>NGO Login</h2>

   <form onSubmit={submit}>

    <input
     placeholder="Email"
     value={email}
     onChange={(e)=>setEmail(e.target.value)}
    />

    <input
     type="password"
     placeholder="Password"
     value={password}
     onChange={(e)=>setPassword(e.target.value)}
    />

    <button type="submit">Login</button>

   </form>

   <p style={{marginTop:"10px"}}>
    Don't have an account?{" "}
    <Link to="/ngo/register">Register here</Link>
   </p>

  </div>

 )

}

export default NgoLogin