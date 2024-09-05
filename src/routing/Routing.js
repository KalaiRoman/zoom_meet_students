import { Routes,Route } from "react-router-dom";
import React from 'react'
import RoutingPaths from "./RoutingPaths";
import ProtectedRouter from "./ProtectedRouter";
function Routing() {
  return (
  <>
  <Routes>
  {RoutingPaths.slice(0,1)?.map((item,index)=>{
    return(
        <Route element={item?.component} exact={item?.exact} key={index} path={item?.path}></Route>
    )
  })}
  {RoutingPaths.slice(2)?.map((item,index)=>{
    return(
      <Route element={<ProtectedRouter/>} key={index}>
        <Route element={item?.component} exact={item?.exact} key={index} path={item?.path}></Route>
        </Route>
    )
  })}
    </Routes>
  </>
  )
}

export default Routing