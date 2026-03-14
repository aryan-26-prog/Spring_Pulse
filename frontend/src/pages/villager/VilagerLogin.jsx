import React, { useState } from "react"
import API from "../../api/api"
import { useNavigate, useParams } from "react-router-dom"

function Login(){

 const navigate = useNavigate()
 const { role } = useParams()

 const [email,setEmail] = useState("")
 const [password,setPassword] = useState("")

 const submit = async(e)=>{

  e.preventDefault()

  try{

   const res = await API.post(`/${role}/login`,{
    email,
    password
   })

   localStorage.setItem("token",res.data.token)
   localStorage.setItem("role",role)

   navigate(`/${role}/dashboard`)

  }catch(err){
   console.log(err)
   alert("Login failed")
  }

 }

 return(

  <div>

   <h2>{role} Login</h2>

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