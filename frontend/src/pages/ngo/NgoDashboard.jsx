import React from "react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function NgoDashboard() {

  const [stats,setStats] = useState({})
  const [springs,setSprings] = useState([])

  const navigate = useNavigate()
  const token = localStorage.getItem("token")

  useEffect(() => {
    fetchDashboard()
    fetchSprings()
  },[])

  const fetchDashboard = async () => {

    const res = await axios.get(
      "http://localhost:5000/api/ngo/dashboard",
      { headers:{Authorization:`Bearer ${token}`}}
    )

    setStats(res.data)
  }

  const fetchSprings = async () => {

    const res = await axios.get(
      "http://localhost:5000/api/ngo/springs",
      { headers:{Authorization:`Bearer ${token}`}}
    )

    setSprings(res.data)
  }

  const verifySpring = async (id,status) => {

    await axios.put(
      `http://localhost:5000/api/ngo/verify/${id}`,
      { status },
      { headers:{Authorization:`Bearer ${token}`}}
    )

    fetchSprings()
  }

  return (

    <div className="dashboard">

      <h1>NGO Dashboard</h1>

      {/* STATS */}

      <div className="stats">

        <div className="card">
          Total Springs
          <h2>{stats.totalSprings}</h2>
        </div>

        <div className="card">
          Verified Springs
          <h2>{stats.verifiedSprings}</h2>
        </div>

        <div className="card">
          Recharge Works
          <h2>{stats.rechargeWorks}</h2>
        </div>

      </div>


      {/* SPRING LIST */}

      <h2>District Springs</h2>

      <div className="springList">

        {springs.map(spring => (

          <div className="springCard" key={spring._id}>

            <h3>{spring.name}</h3>

            <p>Village: {spring.village}</p>

            <p>Status: {spring.verificationStatus}</p>

            <button
            onClick={()=>verifySpring(spring._id,"Verified")}
            >
              Verify
            </button>

            <button
            onClick={()=>verifySpring(spring._id,"Rejected")}
            >
              Reject
            </button>

            <button
            onClick={()=>navigate(`/ngo/recharge/${spring._id}`)}
            >
              Add Recharge Work
            </button>

          </div>

        ))}

      </div>

    </div>

  )
}