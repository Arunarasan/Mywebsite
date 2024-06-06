import React from 'react'
import { GrReactjs } from 'react-icons/gr'

const Reactjs = () => {

  

  return (
    <div id='javaScriptsk'>
      <div id='jslogo' className='rjs'>
      <GrReactjs />
      </div>
        <div id='progress'>
        <div id='sx'>
                <div id='circular' className='rjc1'>
                <span id="perc"> 75%</span>
            </div>
            <div><p id='text-name'>Syntax</p></div>
        </div>
        <div id='ds'>
        <div id='circular'className='rjc2'>
                <span id="perc" > 45%</span>
            </div>
            <div><p id='text-name'>Routing</p></div>
        </div>
        <div id='ap'>
        <div id='circular' className='rjc3'>
                <span id="perc"> 70%</span>
            </div>
            <div><p id='text-name'>Application Based Knowledge</p></div>
        </div>
        </div>
    </div>
  )
}

export default Reactjs