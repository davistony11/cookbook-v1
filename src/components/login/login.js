import React,{useState} from 'react'
import "./login.css"
import { Link,useHistory } from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/userreducer';
export default function Login() {
  const dispatch=useDispatch();  
  const[error,seterror]=useState(false);
  const[username,setusername]=useState("");
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");

  const history=useHistory();


  const handleclick=async(e)=>{
    e.preventDefault();
    try{
      const res=await axios.post("/auth/login",{
        username:username,
        password:password
      })
      dispatch(login({username:username,password:password}))
      // res.data&&window.location.replace("/")
      history.push("/")
    }catch(err){
      console.log(err);
    }

  }

    return (
        <div className="login">
        <span className="loginTitle">Login</span>
  <form className="loginForm" onSubmit={handleclick} >
        <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter your username..." onChange={e=>setusername(e.target.value)} />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." onChange={e=>setpassword(e.target.value)} />
        <button className="loginButton" type="submit">Login</button>
      </form> 
    </div>
    )
}
