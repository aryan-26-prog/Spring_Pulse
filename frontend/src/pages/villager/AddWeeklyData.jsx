import {useParams} from "react-router-dom"
import {useState} from "react"
import API from "../../api/api";

function AddWeeklyData(){

 const {id} = useParams()

 const [bucketSize,setBucket] = useState("")
 const [timeTaken,setTime] = useState("")
 const [photo,setPhoto] = useState("")

 const submit = async(e)=>{

  e.preventDefault()

  await API.post("/springs/weekly-data",{

   springId:id,
   bucketSize,
   timeTaken,
   photo

  })

  alert("Weekly data added")

 }

 return(

  <div>

   <h2>Add Weekly Data</h2>

   <form onSubmit={submit}>

    <input
     placeholder="Bucket Size"
     value={bucketSize}
     onChange={(e)=>setBucket(e.target.value)}
    />

    <br/>

    <input
     placeholder="Time Taken"
     value={timeTaken}
     onChange={(e)=>setTime(e.target.value)}
    />

    <br/>

    <input
     placeholder="Photo URL"
     value={photo}
     onChange={(e)=>setPhoto(e.target.value)}
    />

    <br/>

    <button>Submit</button>

   </form>

  </div>

 )

}

export default AddWeeklyData