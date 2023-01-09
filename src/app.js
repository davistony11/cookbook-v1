import "./app.css"
import Header from "./components/header/header"
import {BrowserRouter as Router,Link,Route,Switch} from "react-router-dom"
import Recipes from "./components/recipes/recipes"
import Login from "./components/login/login"
import Signup from "./components/signup/signup"
import Addrecipes from "./components/addrecipes/addrecipes"
import { useSelector } from "react-redux"

export  default function App(){

const user=useSelector(state=>state.user.value)

    return (
    <div className={"app"}>
       
        <Router>
        <Header></Header>
            <Switch>
                <Route exact path={"/"}>
                    <Recipes></Recipes>
                </Route>
               
                <Route path="/login">
                    <Login></Login>
                </Route>
            
                <Route path="/signup">
                    <Signup></Signup>
                </Route>

                <Route path="/addrecipes">
                    <Addrecipes></Addrecipes>
                </Route>


            
            </Switch>
        </Router>
    </div>
    )
}

