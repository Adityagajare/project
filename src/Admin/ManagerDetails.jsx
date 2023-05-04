import React, { useEffect, useState } from 'react'
import axiosInstance from '../services/Axiosinstance'
import { useNavigate, useParams } from 'react-router-dom'
// import style from "./admin.module.css"
import { Link } from 'react-router-dom'

const ManagerDetails = () => {
  let navigate=useNavigate()
  let {id}=useParams()
    let [state, setState]=useState([])
    let token=window.localStorage.getItem("token")
    // console.log(token)

    let deleteData=async(id)=>{
      await axiosInstance.delete(`/academymanagers/delete/${id}`,{
        headers :{
            Authorization : `Bearer ${token}`
          }
        })
      navigate("/admindashboard/viewacademymanager")
    }
    useEffect(()=>{
        let fetchData=async()=>{
        try{
            let {data}=await axiosInstance.get(`/academymanagers/get/${id}`,{
                headers :{
                    Authorization : `Bearer ${token}`
                  }
            })
            // console.log(data)
            let fetchedData=data.data
            console.log(fetchedData)
            setState(fetchedData)
        }
        catch{
            console.log("unable to connect server");
          }
        }
        fetchData()
    },[])
  return (
    <div>
      <h2 >Total number of Academy Manager</h2>
    <div>
              <div >
                <p ><span>NAME : {state.userName}</span></p>
                <div>
                  <p><span>Role : {state.userName}</span></p>
                  <p><span>Role : {state.role}</span></p>
                  <p><span>DOB :{state.dob}</span></p>
                  <p><span>Phone : {state.phone}</span></p>
                  <p><span>Email : {state.email}</span></p>
                  <p><span>Gender : {state.gender}</span></p>
                  <button><Link to={`/admindashboard/academymanagerupdate/${id}`}>Edit</Link></button>
                  <button><Link to={`/admindashboard/addacademy/${id}`}>Add Academy</Link></button>
                  <button onClick={(id)=>{
                    deleteData(state.id)
                  }}>Delete</button>
                </div>
              </div>
    </div>
    </div>
  )
}

export default ManagerDetails