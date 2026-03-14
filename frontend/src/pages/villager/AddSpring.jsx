import { useState } from "react"
import API from "../../api/api";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css"

function LocationPicker({ setForm }) {

 const [position,setPosition] = useState(null)

 useMapEvents({

  click(e){

   const {lat,lng} = e.latlng

   setPosition([lat,lng])

   setForm(prev => ({
    ...prev,
    latitude: lat,
    longitude: lng
   }))

  }

 })

 return position ? <Marker position={position}/> : null

}

function AddSpring(){

 const [form,setForm] = useState({
  name:"",
  village:"",
  district:"",
  latitude:"",
  longitude:"",
  elevation:"",
  photo:""
 })

 const change = (e)=>{
  setForm({...form,[e.target.name]:e.target.value})
 }

 // current location
 const getLocation = ()=>{

  navigator.geolocation.getCurrentPosition((position)=>{

   setForm(prev=>({
    ...prev,
    latitude: position.coords.latitude,
    longitude: position.coords.longitude
   }))

  })

 }

 const submit = async(e)=>{

  e.preventDefault()

  try{

   await API.post("/springs/register",form)

   alert("Spring Added")

  }catch(err){
   console.log(err)
  }

 }

 return(

  <div>

   <h2>Add Spring</h2>

   <form onSubmit={submit}>

    <input name="name" placeholder="Spring Name" onChange={change}/>
    <br/>

    <input name="village" placeholder="Village" onChange={change}/>
    <br/>

    <input name="district" placeholder="District" onChange={change}/>
    <br/>

    <input name="elevation" placeholder="Elevation" onChange={change}/>
    <br/>

    <input name="photo" placeholder="Photo URL" onChange={change}/>
    <br/>

    <button type="button" onClick={getLocation}>
     📍 Use My Location
    </button>

    <br/><br/>

    <p>Latitude: {form.latitude}</p>
    <p>Longitude: {form.longitude}</p>

    <button>Add Spring</button>

   </form>

   <br/>

   <h3>Select Location From Map</h3>

   <MapContainer
    center={[31.686,76.521]}
    zoom={8}
    style={{height:"400px",width:"100%"}}
   >

    <TileLayer
     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    <LocationPicker setForm={setForm}/>

   </MapContainer>

  </div>

 )

}

export default AddSpring