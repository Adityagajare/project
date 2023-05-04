import React, { useState } from 'react'
import axiosInstance from '../services/Axiosinstance';
import { useNavigate, useParams } from 'react-router-dom';

const AddAcademy = () => {
    let {id}=useParams()
    let navigate=useNavigate()
    let token=window.localStorage.getItem("token")
    let [state, setState]=useState({
        academyName:"",
        description:"",
        email : "",
        contact : ""
    })
    let {academyName,description,email,contact}=state;
    let handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }

    let handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            let payload={academyName,description,email,contact}
            console.log(payload);
            await axiosInstance.post(`/academies/saveacademy?managerId=${id}`,payload,{
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            navigate("/admindashboard/viewacademymanager")
            }
            catch (err){
                console.log(err)
            }
    }
  return (
    <div>
        <h1>Add Academy</h1>
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="academyName">Academy Name</label><br />
                <input type="text" name="academyName" id="academyName" onChange={handleChange}/><br />
                <label htmlFor="description">Description</label><br />
                <input type="text" name="description" id="description" onChange={handleChange}/><br />
                <label htmlFor="email">Email</label><br />
                <input type="email" name="email" id="email" onChange={handleChange}/><br />
                <label htmlFor="contact">Contact</label><br />
                <input type="text" name="contact" id="contact" onChange={handleChange}/><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AddAcademy

