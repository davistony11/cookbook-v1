import React from 'react'
import "./addrecipes.css"
export default function Addrecipes() {
    return (
        <div className="addrecipes">
            <form action="POST" className="recipeform">
                <label htmlFor="recipename">
                    Recipe Name:
                </label>
                <input type="text" placeholder="enter your recipe name"  />
                <br />
                <br />

                <label htmlFor="preptime">
                    Preparation Time:
                </label>
                <input type="text"  placeholder="enter the preparation time" />
                <br />
                <br />
                <label htmlFor="calories">
                    Calories:
                </label>
                <input type="text"   placeholder="enter the recipe calories" />
                <br />
                <br />
                <label htmlFor="ingredients">
                    Ingredients:
                </label>
                <textarea   placeholder="enter the recipe ingriedients"></textarea>
                <br />
                <br />
                <label htmlFor="preparation">
                    Preparation:
                </label>
                <textarea  placeholder="enter the recipe preparation"></textarea>
                <br />
                <br />
                <button className="submitbutton" type="submit">Add Recipe</button>
           </form>





        </div>
    )
}
