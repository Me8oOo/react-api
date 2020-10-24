import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {BrowserRouter} from 'react-router-dom';
// import { Button } from 'react-bootstrap';


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
      <App/>
     
  </BrowserRouter>
</React.StrictMode>,
  document.getElementById('root')
);