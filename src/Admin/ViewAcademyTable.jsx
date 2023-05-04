import React, { useEffect, useState } from 'react'
import axiosInstance from '../services/Axiosinstance'
import {Link} from  "react-router-dom"

const ViewAcademyTable = () => {
    let token=window.localStorage.getItem("token")
    let [state,setState]=useState([])
    useEffect(()=>{
        let fetchdata= async()=>{
            try{
                let {data}=await axiosInstance.get("/academies/getall",{
                    headers :{
                        Authorization : `Bearer ${token}`
                    }
                })
                let fetchedData=data.data
                setState(fetchedData)
            }
            catch (err){
                console.log(err)
            }
        }
        fetchdata()
    },[])
  return (
    <div>
        <table border="5px" align='center'>
            <tr>
                <th>Sl. no</th>
                <th>Academy Name</th>
                <th>Description</th>
                <th>Email</th>
                <th>Contact number</th>
                <th>Edit</th>
                <th>Add Branch</th>
            </tr>
            {
                state.map((x)=>{
                    return <tr>
                        <td>{x.id}</td>
                        <td>{x.academyName}</td>
                        <td>{x.description}</td>
                        <td>{x.email}</td>
                        <td>{x.contact}</td>
                        <td><button><Link to={`/admindashboard/editacademy/${x.id}`}>Edit</Link></button></td>
                        <td><button><Link to={`/admindashboard/addbranch/${x.id}`}>Add Branch</Link></button></td>
                    </tr>
                })
            }
        </table>
    </div>
  )
}

export default ViewAcademyTable