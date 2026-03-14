import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import API from "../../api/api"

function NgoRegister(){

 const navigate = useNavigate()

 const [form,setForm] = useState({
  name:"",
  organization:"",
  email:"",
  phone:"",
  district:"",
  password:""
 })

 const change = (e)=>{
  setForm({...form,[e.target.name]:e.target.value})
 }

 const submit = async(e)=>{

  e.preventDefault()

  try{

   await API.post("/ngo/register",form)

   alert("NGO Registered Successfully")

   navigate("/ngo/login")

  }catch(err){

   alert(err.response?.data?.message || "Registration failed")

  }

 }

 return(

  <div>

   <h2>NGO Register</h2>

   <form onSubmit={submit}>

    <input name="name" placeholder="Name" onChange={change}/>
    <input name="organization" placeholder="Organization" onChange={change}/>
    <input name="email" placeholder="Email" onChange={change}/>
    <input name="phone" placeholder="Phone" onChange={change}/>
    <input name="district" placeholder="District" onChange={change}/>
    <input name="password" type="password" placeholder="Password" onChange={change}/>

    <button type="submit">Register</button>

   </form>

  </div>

 )

}

export default NgoRegister