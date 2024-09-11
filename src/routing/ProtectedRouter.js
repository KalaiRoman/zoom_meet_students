import React, { useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Layout from '../middleware/Layout';
import RoutingPaths from './RoutingPaths';
import Header from '../components/header/Header';
import { LogoutModal } from './../middleware/Modals';
import { useSelector } from 'react-redux';
import { Login } from '../pages/Pages';
function ProtectedRouter() {
  const loginReducer=useSelector((state)=>state?.login);
  const navigate=useNavigate();
  const pathName=window.location.pathname;
  const [show,setShow]=useState(false);
 const handleShow=()=>{
  setShow(true);
 }
 const handleClose=()=>{
  setShow(false);
 }
 const handleLogout=()=>{
  localStorage.clear();
  navigate("/");
  handleClose();
  window.location.reload(false);
 }
  return true?<>
  <div>
  <div className='main-sidebar-section'>
        <section className='header-section'>
                <Header/>
        </section>
        <section className='main-body-section'>
            <main>
              <div className='main-inside-body-section' >
                <div className='left-body-section'>
                  {RoutingPaths?.map((item,index)=>{
                  if(item?.name)
                  {
                    if(loginReducer?.token)
                    {
                      return(
                        <div className={pathName===item?.path?"active-button":'button-sidebar'} onClick={()=>window.location.assign(item?.path)}
                        style={{display:`${item?.class?"block":"none"}`}}
                        >
  {item?.name}
                        </div>
                      )
                    }
                    else{
                      return(
                        <div className={pathName===item?.path?"active-button":'button-sidebar'} onClick={()=>window.location.assign("/")}
                        style={{display:`${item?.class?"block":"none"}`}}
                        >
  {item?.name}
                        </div>
                      )
                    }
                    
                  }
                  else{
                    return null;
                  }
                  })}
                  <div className='button-sidebar' onClick={handleShow}>
                    Logout
                  </div>
                </div>
                <div className='right-body-section'>

                  {loginReducer?.token?<>
                <Outlet/>
                  
                  </>:<><Login/></>}
                </div>
              </div>
            </main>
        </section>
        <section className='footer-section'>
            <footer>
Footer
            </footer>
        </section>
    </div>

    {show && <LogoutModal show={show} handleClose={handleClose} handleLogout={handleLogout}/>}
  </div>
  </>:<Navigate to="/"/>
}

export default ProtectedRouter