import React,{useEffect, useState} from 'react'
import { ToastSuccess } from '../../middleware/ToastModel'
import { useSelector } from 'react-redux'
import './Home.scss';
import { useNavigate } from 'react-router-dom';
function Home() {

  const navigate=useNavigate();
  const socket=useSelector((state)=>state?.socket?.socket)
  const [message,setMessage]=useState("");
  useEffect(() => {
    if (socket && typeof socket.on === 'function') {
      socket.on("get-login", (mes) => {
        ToastSuccess(mes);
        setMessage(mes);
      });

      socket.on("user_count", (mes) => {
        ToastSuccess(mes);
        setMessage(mes);
      });
      return () => {
        socket.off("get-login");
      };
    } else {
      console.error("Socket not found");
    }
  }, [socket]); 


  const handleChangePath=(paramsid)=>{
    navigate(`/sessions?Name=${paramsid}`)
  }

  return (
    <div className='main-home-section'>
      <div className='inside-home-section'>
       <div className='main-box-flex'>
       <div className='Box-today'>
<div className='text-sizes'>
  05
</div>
<div className='metting-name'>
  Completed
</div>
        </div>

        <div className='Box-today' onClick={()=>handleChangePath("Today")}>
<div className='text-sizes'>
  05
</div>
<div className='metting-name'>
  Today
</div>
        </div>
        <div className='Box-today' onClick={()=>handleChangePath("Tomorrow")}>
<div className='text-sizes'>
  05
</div>
<div className='metting-name'>
  Tomorrow
</div>
        </div>
        <div className='Box-today' onClick={()=>handleChangePath("Yesterday")}>
<div className='text-sizes'>
  05
</div>
<div className='metting-name'>
  YesterDay
</div>
        </div>
       </div>
        </div> 
    </div>
  )
}

export default Home