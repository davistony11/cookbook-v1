import React, { useState,useEffect } from 'react'

import Recipecards from '../recipecards/recipecards'
import "./recipes.css"
import axios from "axios";
import {Link} from "react-router-dom";
export default function Recipes() {
const appid="b21d887b"
const appkey="5ba6959dad13a98f1ba581b839507121"
const[search,setsearch]=useState("");
const[recipes,setrecipes]=useState([]);
const[query,setquery]=useState("chicken");
const[error,seterror]=useState("")
const api=`https://api.edamam.com/search?q=${query}&app_id=${appid}&app_key=${appkey}`

let condition = navigator.onLine ? 'online' : 'offline';


useEffect(()=>{
axios.get(api).then((res)=>{
setrecipes(res.data.hits)
}).catch((err)=>{
if(err){
    seterror(err)
}
})
},[query,condition])

const searchforfood=e=>{
    e.preventDefault();
    setquery(search)
    setsearch("")
}

 
const[fullscreen,setfullscreen]=useState(false)
const[modelinfo,setmodelinfo]=useState([]);


const popupmodel=(recipe)=>{
setmodelinfo(recipe)
setfullscreen(true)
}

const closefunction=()=>{
    setmodelinfo([])
    setfullscreen(false)
}

return (
        <div className="recipesgod">
            <div className="searchcomponent">
            <input type="text"  value={search} onChange={(e)=>{setsearch(e.target.value)}} placeholder="search your favourite dish"/>
            <button onClick={searchforfood} className="search"><img src="/icons8-search.svg" alt="" /></button>
            </div>
        <div className="recipes">
        
            {condition=="online"?recipes.length>0?(recipes.map((recipe)=>(
        
        <>
            <p className="inforecipes">info : click on a card to view full details</p>
                    <div className="block" onClick={()=>{popupmodel(recipe)}} >
                    <Recipecards  key={recipe.recipe.label} image={recipe.recipe.image} 
                    name={recipe.recipe.label} 
                    calories={Math.trunc(recipe.recipe.calories)}
                     ingredient={recipe.recipe.ingredients}
                        
                     preptime={recipe.recipe.totalTime}
                    />
                    </div>
                    {/* below is recipe model */}

            {fullscreen?<>
                <div className="backgroundoverlay" onClick={closefunction}></div>
               
                <div className="recipe">
                <div className="recipeclosebutton" onClick={closefunction}>x</div>
                <div className="recipe__header">
                    <div className="recipe__headercontent">
                        <h3>{modelinfo.recipe.label}</h3>
                        <div className="recipe__headercontentuser">
                            <p>by {modelinfo.recipe.source}</p>
                            <img src="/unnamed.png" className="ownerlogo" alt="" />
                        </div>   
                    </div>
                    
                </div>
                
                
                <div className="recipe__body">
                    <div className="recipe__image">
                        <img className="recipe__bodyimage" src={modelinfo.recipe.image} alt=""/>
                    </div>
                    {/* <div className="recipe__bodycontent">
                    <h2>ingredients</h2>
                        <ul className="recipe__ingredients">
                        {modelinfo.recipe.ingredientLines.map((i)=>(
                            <li>{i}</li>
                         ))} 
                        </ul>
                    </div> */}
                    <h4 className="fulllink"><a  target="_blank" href={modelinfo.recipe.url}>link to full article <img className="externallink" src="/icons8-external-link.svg" alt="" /></a></h4>
                </div>
                
                <div className="recipe__footer">
                    <h2>ingredients:</h2>
                   
                        <ul>
                        {modelinfo.recipe.ingredients.map((p)=>(
                            <div className="prepcards">
                                <li>{p.food}</li>
                                <p>quantity:{p.quantity}</p>
                                <img src={p.image} alt="" className="prepcardsimage" /> 
                            </div>
                         ))} 
                        </ul>
                    
                </div>
            </div>
            </>
            :""
                            }
            </>
                )
                ))
            :( 
                <div class="center">
              <div class="dot-1"></div>
              <div class="dot-2"></div>
              <div class="dot-3"></div>
        </div>
             )
            :( <h2>sorry you are offline :(</h2> )
            }           
        
        </div>
        </div>
    )
}



