import React from "react"
import {useState} from "react"
import API from "../api/api"
import {useNavigate} from "react-router-dom"

function Login(){

 const navigate = useNavigate()

 const [email,setEmail] = useState("")
 const [password,setPassword] = useState("")

 const submit = async(e)=>{

  e.preventDefault()

  const res = await API.post("/auth/login",{email,password})

  localStorage.setItem("token",res.data.token)

  navigate("/dashboard")

 }

 return(

  <div>

   <h2>Login</h2>

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

  </div>

 )

}

export default Login