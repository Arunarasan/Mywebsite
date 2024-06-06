import React from 'react'
import { DiNodejs } from 'react-icons/di'

const Node = () => {

  

  return (
    <div id='javaScriptsk'>
      <div id='jslogo' className='node'>
      <DiNodejs />

      </div>
        <div id='progress'>
        <div id='sx'>
                <div id='circular' className='nc1'>
                <span id="perc"> 65%</span>
            </div>
            <div><p id='text-name'>Syntax</p></div>
        </div>
        <div id='ds'>
        <div id='circular'className='nc2'>
                <span id="perc" > 45%</span>
            </div>
            <div><p id='text-name'>Routing</p></div>
        </div>
        <div id='ap'>
        <div id='circular' className='nc3'>
                <span id="perc"> 60%</span>
            </div>
            <div><p id='text-name'>Application Based Knowledge</p></div>
        </div>
        </div>
    </div>
  )
}

export default Node