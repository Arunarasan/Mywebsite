import React from 'react'
import { FaJava } from 'react-icons/fa'

const Java = () => {

  

  return (
    <div id='javaScriptsk'>
      <div id='jslogo' className='java'>
      <FaJava />

      </div>
        <div id='progress'>
        <div id='sx'>
                <div id='circular' className='jc1'>
                <span id="perc"> 75%</span>
            </div>
            <div><p id='text-name'>Syntax</p></div>
        </div>
        <div id='ds'>
        <div id='circular'className='jc2'>
                <span id="perc" > 55%</span>
            </div>
            <div><p id='text-name'>Data Structuring</p></div>
        </div>
        <div id='ap'>
        <div id='circular' className='jc3'>
                <span id="perc"> 75%</span>
            </div>
            <div><p id='text-name'>Application Based Knowledge</p></div>
        </div>
        </div>
    </div>
  )
}

export default Java