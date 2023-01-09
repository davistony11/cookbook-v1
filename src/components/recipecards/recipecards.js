import React, { useState } from 'react'
import "./recipecards.css"

export default function Recipecards({name,image,ingredient,calories}) {

   

    return (
        <div className="recipecards" >
          
            <img src={image} className="card__img" alt="" />
           <div className="recipe__food">
               <div className="recipe__name">
                   <h1>{name}</h1>
               </div>   
                <h2 className="recipecalories">calories:{calories}</h2>   
           </div>
            <div className="recipedesc">
                     <h2>ingredients:</h2>
                    <ul className="recipeitems">
                        {ingredient.map((i)=>(
                         <li>{i.text}</li>
                        ))} 
                    </ul>
            </div>
        </div>
    )
}
