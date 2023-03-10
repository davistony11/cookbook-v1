import React from 'react';
import ReactDOM from 'react-dom';
import App from  "./app";
import {Provider} from "react-redux"
import "./index.css";
import store from "./redux/store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>  
        <App></App>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

