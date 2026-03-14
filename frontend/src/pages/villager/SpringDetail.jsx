import {useParams,useNavigate} from "react-router-dom"
import {useEffect,useState} from "react"
import API from "../../api/api"
import FlowChart from "../../components/FlowChart"

function SpringDetail(){

 const {id} = useParams()
 const navigate = useNavigate()

 const [spring,setSpring] = useState(null)
 const [history,setHistory] = useState([])
 const [ai,setAI] = useState(null)

 useEffect(()=>{
  load()
 },[])

 const load = async()=>{

  const res = await API.get(`/springs/${id}`)

  setSpring(res.data.spring)
  setHistory(res.data.history)

  const aiRes = await API.get(`/springs/ai-risk/${id}`)

  setAI(aiRes.data)

 }

 if(!spring) return <p>Loading...</p>

 return(

  <div>

   <h2>{spring.name}</h2>

   <p>Village: {spring.village}</p>
   <p>District: {spring.district}</p>
   <p>Elevation: {spring.elevation}</p>

   {spring.photo && <img src={spring.photo} width="200"/>}

   <br/><br/>

   <button onClick={()=>navigate(`/add-data/${id}`)}>
    ➕ Add Weekly Data
   </button>

   <h3>AI Prediction</h3>

   {ai && (

    <div>

     <p>Predicted Flow: {ai.predictedFlow}</p>
     <p>Risk Level: {ai.riskLevel}</p>
     <p>Health Score: {ai.healthScore}</p>

    </div>

   )}

   <h3>Flow History</h3>

   <FlowChart history={history.map(h=>h.flowRate)} />

  </div>

 )

}

export default SpringDetail