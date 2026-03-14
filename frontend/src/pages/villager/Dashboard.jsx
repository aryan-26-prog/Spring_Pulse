import { useEffect,useState } from "react"
import API from "../../api/api";

import SpringCard from "../../components/SpringCard"
import SpringMap from "../../components/SpringMap"

function Dashboard(){

 const [springs,setSprings] = useState([])

 useEffect(()=>{
  load()
 },[])

 const load = async()=>{
  try{

   const res = await API.get("/springs/my-springs")

   console.log(res.data)

   setSprings(res.data)

  }catch(err){
   console.log(err)
  }
 }

 return(

  <div>

   <br/>

   <SpringMap springs={springs}/>

   <br/>

   <h2>My Springs</h2>

   {springs.map((s)=>(
    <SpringCard key={s._id} spring={s}/>
   ))}

  </div>

 )

}

export default Dashboard