import React, { useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Layout from '../middleware/Layout';
import RoutingPaths from './RoutingPaths';
import Header from '../components/header/Header';
import { LogoutModal } from './../middleware/Modals';

function ProtectedRouter() {

  const navigate=useNavigate();
    const token=true;
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
 }
  return token?<>
  <div>
  <div className='main-sidebar-section'>
        <section className='header-section'>
                <Header/>
        </section>
        <section className='main-body-section'>
            <main>
              <div className='main-inside-body-section' >
                <div className='left-body-section'>
                  {RoutingPaths.slice(2)?.map((item,index)=>{
                    return(
                      <div className={pathName===item?.path?"active-button":'button-sidebar'} onClick={()=>window.location.assign(item?.path)}>
{item?.name}
                      </div>
                    )
                  })}
                  <div className='button-sidebar' onClick={handleShow}>
                    Logout
                  </div>
                </div>
                <div className='right-body-section'>
                <Outlet/>
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