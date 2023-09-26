import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Layout from "../templates/Layout";
import Home from "../pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element= {<Layout />}> 
             <Route index element ={<Home />}/> 
           </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
