import "./header.css"
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import styled from "styled-components"
import {useDispatch} from "react-redux"
import { useSelector } from 'react-redux'
import { logout } from "../../redux/userreducer"
function Header() {
    const[open,setopen]=React.useState(false)
    let history=useHistory();
    const user=useSelector(state=>state.user.value)

    const dispatch=useDispatch()
    const[navkey,setnavkey]=useState("one")

    useEffect(()=>{

    },[user])
    return (
        <>
        <div className="header">    
        <div className="logo">
            <a href="/" className="logotext">
            cookbook
            </a>
        </div>
        <div className="menu">
            <Navmenu  >
                <Ruler position={navkey}></Ruler>
            <Link to="/" onClick={()=>setnavkey("one")}><span> recipes</span></Link>
            <Link to="/addrecipes" onClick={()=>setnavkey("two")}><span> +add recipes</span></Link>            
            <Link to="/" onClick={()=>setnavkey("three")} ><span>Social</span></Link>
            
            </Navmenu>
        </div>
        {user.name===""?(
        <div className="buttons">
             <button className="button-47" onClick={(()=>{history.push("/login")})}>login</button>
            <button className="button-30" onClick={(()=>{history.push("/signup")})}>signup</button>
        </div>)
        :
        (<div className="usercomponent">
            <div className="avatar">
                <img src="/logo512.png" alt="" />
                {user.name}
            </div>
            <div className="userbuttons">
                <button>{user.name}</button>
                <button onClick={()=>dispatch(logout())} >logout</button>
            </div>
        </div>
        )}
        <div className="ham" onClick={()=>setopen(true)}>
            <h1>=</h1>
        </div>
        </div>
        {open&&
        <div className="sidebar">
            <div className="close"onClick={()=>setopen(false)} >
                <h1>x</h1>
            </div>
          
            <div className="sidemenu">
                <Link to="/">recipes</Link>
                <Link to="/addrecipes">add recipes +</Link>
                <Link to="/">Social</Link>
                <Link to="/login">login</Link>
                <Link to="/signup">signup</Link>
            </div>
        </div>
        }
        
        </>
    )
}

export default Header
const Navmenu=styled.div`
display:flex;
position:relative;
    flex:1;
    margin-left:25px;
    align-items:center;
    a{
    display:flex;
    align-items:center;
    padding: 0 20px;
    
    color:grey;
    transition:all 250ms ;
    cursor:pointer;
   
    span{
        font-size:20px;
        text-transform:capitalize;
        letter-spacing:1.42px;
        position:relative;
        &:after{
            content:"";
            height:2px;
            background:black;
            position:absolute;
            left:0;
            right:0;
            bottom:-6px;
            opacity:0;
            transform-origin:left center;
            transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            transform:scaleX(0);

        }
        }
        &:hover{
            color:black;
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
    }
}

`

const Ruler=styled.div`
position:absolute;
background-color:black;
height:7px;
width:7px;
border-radius:50%;
transition:all 250ms;
transform:${props=>props.position==="one"?'translateX(55px)':props.position==="two"?"translateX(200px)":props.position==="three"?"translateX(350px)":""};
top:-10px;
`
