import React from 'react'
import Stars from './stars'
export default function Waves() {
  return (
    <>
    <Stars/>
    <div className='waveAnimation'>
    
    <div className='wave-wrapper bg-top'>
        <div className=' wave wave-top'   ></div>
    </div>
    <div className='wave-wrapper bg-middle'>
        
        <div className=' wave wave-mid'   ></div>
    </div>
    <div className='wave-wrapper bg-bottom'>
       
        
        <div className='wave wave-bottom'   ></div>
    </div>
    </div>
    </>
  )
}
