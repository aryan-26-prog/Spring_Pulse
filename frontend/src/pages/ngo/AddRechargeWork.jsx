import React from "react"
import { useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

export default function AddRechargeWork(){

  const {springId} = useParams()

  const [workType,setWorkType] = useState("")
  const [description,setDescription] = useState("")

  const token = localStorage.getItem("token")

  const submit = async () => {

    await axios.post(
      "http://localhost:5000/api/ngo/recharge",
      {
        springId,
        workType,
        description
      },
      { headers:{Authorization:`Bearer ${token}`}}
    )

    alert("Recharge work added")
  }

  return(

    <div>

      <h2>Add Recharge Work</h2>

      <input
      placeholder="Work Type"
      onChange={(e)=>setWorkType(e.target.value)}
      />

      <textarea
      placeholder="Description"
      onChange={(e)=>setDescription(e.target.value)}
      />

      <button onClick={submit}>
        Submit
      </button>

    </div>

  )
}