import React, { useState } from 'react'
import "./signup.css"
import axios from "axios";

export default function Signup() {
    const[error,seterror]=useState(false);
    const[username,setusername]=useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");


    const handleclick= async(e)=>{
      e.preventDefault();
      seterror(false)
      try{
      const res=await axios.post("/auth/register",{
          username,
          email,
          password,
      })
      ///sending to the login page
      res.data&&window.location.replace("/login")
  }
      catch(err){
      seterror(true);
      }
  
  
    }
    return (
        <div className="signup"> 
            <span className="registerTitle">Register</span>
      <form className="registerForm"  onSubmit={handleclick}>
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." onChange={e=>setusername(e.target.value)} />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." onChange={e=>setemail(e.target.value)} />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." onChange={e=>setpassword(e.target.value)} />
        <button className="registerButton" type="submit">Register</button>
      </form>

        {error&&<span style={{color:"red",marginTop:"10px"}}>something went wrong</span>}
        
        </div>
    )
}
