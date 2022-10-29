import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from "react"
import HomePage from "../pages/HomePage/HomePage"
import Destiny from "../pages/Destiny/Destiny"


const Router = () => {
    return(
        <BrowserRouter>
           <Routes>
            <Route index element ={<Destiny/>} />
            <Route path='/InteresseDeDestinos' element ={<HomePage/>} />
           </Routes>
        </BrowserRouter>

    )

 }
 export default Router