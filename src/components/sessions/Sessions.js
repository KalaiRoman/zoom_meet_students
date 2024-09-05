import React from 'react'
import './Session.scss';
function Sessions() {
  return (
    <div>
     <div className='main-session-cards'>
     {Array(10).fill("kalai")?.map((item,index)=>{
        return(
          <div className='card-sessions'>
            <div>
            <h6>{index==0?"Maths":index==2?"Science":index==3?"English":index==4?"EVS":"Tamil"} Class</h6>
            </div>
            <div className='mt-3'>
              <button className='join-meeting'>Join Now </button>
            </div>
          </div>
        )
      })}
     </div>
    </div>
  )
}

export default Sessions