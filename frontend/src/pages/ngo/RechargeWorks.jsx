import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"

export default function NgoWorks(){

 const [works,setWorks] = useState([])

 const token = localStorage.getItem("token")

 useEffect(()=>{
  fetchWorks()
 },[])

 const fetchWorks = async () => {

  try{

   const res = await axios.get(
    "http://localhost:5000/api/ngo/recharge",
    {
     headers:{
      Authorization:`Bearer ${token}`
     }
    }
   )

   setWorks(res.data)

  }catch(err){
   console.log(err)
  }

 }

 const updateStatus = async(id,status)=>{

  try{

   await axios.put(
    `http://localhost:5000/api/ngo/recharge/${id}`,
    { status },
    {
     headers:{
      Authorization:`Bearer ${token}`
     }
    }
   )

   fetchWorks()

  }catch(err){
   console.log(err)
  }

 }

 return(

  <div className="ngoWorksPage">

   <h1>Recharge Works</h1>

   <div className="worksContainer">

    {works.map(work=>(

     <div className="workCard" key={work._id}>

      <h3>{work.springId?.name}</h3>

      <p>
       <strong>Village:</strong> {work.springId?.village}
      </p>

      <p>
       <strong>Work Type:</strong> {work.workType}
      </p>

      <p>
       <strong>Description:</strong> {work.description}
      </p>

      <p>
       <strong>Status:</strong> {work.status}
      </p>

      <div className="buttons">

       <button
        onClick={()=>updateStatus(work._id,"In Progress")}
       >
        Start
       </button>

       <button
        onClick={()=>updateStatus(work._id,"Completed")}
       >
        Complete
       </button>

      </div>

     </div>

    ))}

   </div>

  </div>

 )
}