import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./userreducer";

const store=configureStore({
reducer:{
    user:userreducer
}
})

export default  store