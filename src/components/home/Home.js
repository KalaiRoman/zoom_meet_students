import React,{useEffect, useState} from 'react'
import { ToastSuccess } from '../../middleware/ToastModel'
import { useSelector } from 'react-redux'

function Home() {
  const socket=useSelector((state)=>state?.socket?.socket)
  const [message,setMessage]=useState("");
  useEffect(() => {
    if (socket && typeof socket.on === 'function') {
      socket.on("get-login", (mes) => {
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

  return (
    <div>Home 

<h1>message : {message}</h1>

    </div>
  )
}

export default Home