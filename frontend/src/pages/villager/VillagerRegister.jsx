import {useState} from "react"
import API from "../../api/api"
import {useNavigate,useParams} from "react-router-dom"

function Register(){

 const navigate = useNavigate()
 const { role } = useParams()

 const [form,setForm] = useState({
  name:"",
  email:"",
  phone:"",
  village:"",
  district:"",
  password:""
 })

 const change=(e)=>{
  setForm({...form,[e.target.name]:e.target.value})
 }

 const submit = async(e)=>{

  e.preventDefault()

  await API.post(`/${role}/register`,form)

  navigate(`/${role}/login`)

 }

 return(

  <div>

   <h2>{role} Register</h2>

   <form onSubmit={submit}>

    <input name="name" placeholder="Name" onChange={change}/>
    <input name="email" placeholder="Email" onChange={change}/>
    <input name="phone" placeholder="Phone" onChange={change}/>
    <input name="village" placeholder="Village" onChange={change}/>
    <input name="district" placeholder="District" onChange={change}/>
    <input name="password" type="password" placeholder="Password" onChange={change}/>

    <button type="submit">Register</button>

   </form>

  </div>

 )

}

export default Register