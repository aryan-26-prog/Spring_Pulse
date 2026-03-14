import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import API from "../../api/api";

function EditSpring(){

 const { id } = useParams()
 const navigate = useNavigate()

 const [form,setForm] = useState({
  name:"",
  village:"",
  district:"",
  latitude:"",
  longitude:"",
  elevation:"",
  photo:""
 })

 useEffect(()=>{
  loadSpring()
 },[])

 const loadSpring = async()=>{

  const res = await API.get(`/springs/${id}`)

  const spring = res.data.spring

  setForm({
   name:spring.name || "",
   village:spring.village || "",
   district:spring.district || "",
   latitude:spring.latitude || "",
   longitude:spring.longitude || "",
   elevation:spring.elevation || "",
   photo:spring.photo || ""
  })

 }

 const change = (e)=>{
  setForm({...form,[e.target.name]:e.target.value})
 }

 const update = async(e)=>{

  e.preventDefault()

  await API.put(`/springs/${id}`,form)

  alert("Spring updated successfully")

  navigate("/dashboard")

 }

 const fetchLocation = ()=>{

  if(navigator.geolocation){

   navigator.geolocation.getCurrentPosition((pos)=>{

    setForm({
     ...form,
     latitude:pos.coords.latitude,
     longitude:pos.coords.longitude
    })

   })

  }

 }

 return(

  <div style={{padding:"20px"}}>

   <h2>Edit Spring</h2>

   <form onSubmit={update}>

    <input
     name="name"
     placeholder="Spring Name"
     value={form.name}
     onChange={change}
    />

    <br/><br/>

    <input
     name="village"
     placeholder="Village"
     value={form.village}
     onChange={change}
    />

    <br/><br/>

    <input
     name="district"
     placeholder="District"
     value={form.district}
     onChange={change}
    />

    <br/><br/>

    <input
     name="elevation"
     placeholder="Elevation"
     value={form.elevation}
     onChange={change}
    />

    <br/><br/>

    <input
     name="photo"
     placeholder="Photo URL"
     value={form.photo}
     onChange={change}
    />

    <br/><br/>

    <button type="button" onClick={fetchLocation}>
     Fetch Location
    </button>

    <p>Latitude: {form.latitude}</p>
    <p>Longitude: {form.longitude}</p>

    <br/>

    <button type="submit">
     Update Spring
    </button>

   </form>

  </div>

 )

}

export default EditSpring