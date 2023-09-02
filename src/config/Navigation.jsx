import React from "react";
import {Routes,Route } from "react-router-dom";
import Home from "../Components/Home";
import Add_ads from '../Components/Ads/Add_ads'
function Navigation(){

return(<Routes>

    <Route element={<Home Add_ads={Add_ads}/>} path="/"></Route>
        <Route element={<Add_ads/>} path="/post"></Route>
    </Routes>)



}
export default Navigation