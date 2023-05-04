import React, { useState } from 'react'
import style from "./_authentication.module.css"
import axiosInstance from '../services/Axiosinstance'
import {ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Link, useNavigate } from 'react-router-dom'
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"

const Login = () => {
    let navigate=useNavigate()
    let [state, setState]=useState({
        userEmail: "",
        password : ""
    })
    let [show,setShow]=useState(false)
    let [eye, setEye]=useState(false)
    let {userEmail, password}=state;
    let handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
    let handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            let payload={userEmail,password};
            console.log(payload);
            let {data}=await axiosInstance.post("/authenticate",payload)
            console.log(data);
            let token = data.token;
            let role = data.role
            console.log(token);
            if(token){
                window.localStorage.setItem("token",token)
                window.localStorage.setItem("role",role)
                toast.success(`${userEmail} logged in successfully`)
                navigate("/")
            }else{
                window.localStorage.removeItem("token",token)
                window.localStorage.removeItem("role",role)
            }
        }
        catch (error){
            toast.error(error.code)
        }
    }
    let handleShow=()=>{
        setShow(!show)
        setEye(!eye)
    }
  return (
    <div className={style.logincontainer}>
        <ToastContainer/>
        <div className={style.login}>
        <form action="" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label htmlFor="userEmail">UserEmail</label>
            <input type="email" name='userEmail' value={userEmail} onChange={handleChange} />
            <label htmlFor="password">Password</label>
            <input type={show?"text":"password"} name='password' value={password} onChange={handleChange}/>
            {
                eye? <AiFillEye onClick={handleShow} style={{position:"relative", left:"180px", bottom:"34px"}}/>:
                <AiFillEyeInvisible onClick={handleShow} style={{position:"relative", left:"180px", bottom:"34px"}}/>
            }
            {/* <span onClick={showPassword}>{show? "hide" : "show"}</span> */}
            <button>Submit</button>
            <span><Link to="/register">Create an account ?</Link></span>
        </form>
    </div>
    </div>
  )
}

export default Login