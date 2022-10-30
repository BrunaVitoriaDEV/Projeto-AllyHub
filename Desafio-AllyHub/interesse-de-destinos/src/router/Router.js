import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from "react"
import HomePage from "../pages/HomePage/HomePage"
import Destiny from "../pages/Destiny/Destiny"


const Router = () => {
    return(
        <BrowserRouter>
           <Routes>
            <Route index element ={<HomePage/>} />
            <Route path='/InteresseDeDestinos' element ={<Destiny/>} />
           </Routes>
        </BrowserRouter>

    )

 }
 export default Router