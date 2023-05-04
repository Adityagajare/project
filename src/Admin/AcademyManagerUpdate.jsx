import React, { useEffect, useState } from 'react'
import style from "../authentication/_authentication.module.css"
import { Link, useNavigate, useParams } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axiosInstance from '../services/Axiosinstance';

const AcademyManagerUpdate = () => {
    let {id}=useParams()
    let navigate=useNavigate()
    let token=window.localStorage.getItem("token")
    let [state, setState]=useState({
      userName:"",
      email:"",
      password:"",
      dob:"",
      phone:"",
      gender:""
    })
    let {userName,email,password,dob,phone,gender}=state;
  
    let handleChange=(e)=>{
      setState({...state,[e.target.name]:e.target.value})
    }
    const handleSubmit=async (e)=>{
      e.preventDefault()
      console.log(state);
      try{
        let payload={userName,email,password,dob,phone,gender,id}
        await  axiosInstance.put("/academymanagers/update",payload,{
            headers :{
                Authorization : `Bearer ${token}`
              }
        })
        toast.success(`$(email) registered sucessfully`)
        navigate("/admindashboard/viewacademymanager")
      }
        catch (error){
          toast.error("error")
          console.log("unable to connect server");
        }
      }

      useEffect(()=>{
        let fetchData=async ()=>{
            try{
                let {data}=await axiosInstance.get(`/academymanagers/get/${id}`, {
                    headers :{
                        Authorization : `Bearer ${token}`
                      }
                })
                let finalData=data.data
                setState(finalData)
            }
            catch{
                console.log("enable to fetch data")
            }
        }
        fetchData()
      },[])
    return (
      <div id={style.registercontainer}>
        <ToastContainer/>
        <div id={style.registerpage}>
          <form action="" onSubmit={handleSubmit}>
            <h2>update Page</h2>
            <div id={style.forminnerdiv}>
              <label htmlFor="userName">UserName</label>
              <input type="text" name="userName" value={userName} id="userName" onChange={handleChange}/>
            </div>
            <div id={style.forminnerdiv}>
              <label htmlFor="email">Email add</label>
              <input type="email" name="email" value={email}  id="email" onChange={handleChange}/>
            </div>
            <div id={style.forminnerdiv}>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" value={password} id="password" onChange={handleChange}/>
            </div>
            <div id={style.forminnerdiv}>
              <label htmlFor="phone">Phone no</label>
              <input type="number" name="phone" id="phone" value={phone} onChange={handleChange} maxLength="10" minLength="10"/>
            </div>
            <div>
              <label htmlFor="dob">Date of birth</label>
              <input type="date" name="dob" id="dob" value={dob} onChange={handleChange} />
            </div>
            <div id={style.forminnerdiv}>
              <label htmlFor="gender">Gender</label>
              <div id={style.genderradio}>
              <input type="radio" name="gender" id="male" value="male" onChange={handleChange}/>Male
              <input type="radio" name="gender" id="female" value="female" onChange={handleChange}/>Female
              <input type="radio" name="gender" id="others" value="others" onChange={handleChange}/>Others
              </div>
            </div>
            <button type="submit">Update</button>
            {/* <button type="reset">Reset</button> */}
            <p><Link to="/login">Already have an account ?</Link></p>
          </form>
        </div>
      </div>
    )
}

export default AcademyManagerUpdate