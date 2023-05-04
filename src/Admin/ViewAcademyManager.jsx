import React, { useEffect, useState } from 'react'
import axiosInstance from '../services/Axiosinstance'
import style from "./admin.module.css"
import { Link, Outlet } from 'react-router-dom'

const ViewAcademyManager = () => {
    let [state, setState]=useState([])
    let token=window.localStorage.getItem("token")
    // console.log(token)
    useEffect(()=>{
        let fetchData=async()=>{
        try{
            let {data}=await axiosInstance.get("/academymanagers/getall",{
                headers :{
                    Authorization : `Bearer ${token}`
                  }
            })
            console.log(data)
            let fetchedData=data.data
            console.log(fetchedData)
            setState(fetchedData)
            console.log(data);
        }
        catch{
            console.log("unable to connect server");
          }
        }
        fetchData()
    },[])
  return (
    <div>
      <h2>Total number of Academy Manager : {state.length}</h2>
    <div id={style.viewcardContainer}>
        {state.map((x)=>{
            return(
              <>
              <div style={{marginLeft:"20px", backgroundColor: "black"}}>
                <p style={{alignItems:"center",border:"2px solid white", color:"white",display:"flex",justifyContent:"center",height:"50px"}}><span>NAME : {x.userName}</span></p>
                <div id={style.viewcard}>
                  <p><span>Role : {x.role}</span></p>
                  <p><span>DOB :{x.dob}</span></p>
                  <p><span>Phone : {x.phone}</span></p>
                  <p><span>Email : {x.email}</span></p>
                  <p><span>Gender : {x.gender}</span></p>
                  <button><Link to={`/admindashboard/managerdetails/${x.id}`}>View</Link></button>
                </div>
              </div>
              </>
            )
        })}
    </div>
    <Outlet/>
    </div>
  )
}

export default ViewAcademyManager