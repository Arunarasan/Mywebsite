import React from 'react'
import { SiSpringboot } from 'react-icons/si'

const Spring = () => {

  

  return (
    <div id='javaScriptsk'>
      <div id='jslogo' className='sp'>
      <SiSpringboot />
      </div>
        <div id='progress'>
        <div id='sx'>
                <div id='circular' className='sc1'>
                <span id="perc"> 65%</span>
            </div>
            <div><p id='text-name'>Structuring</p></div>
        </div>
        <div id='ds'>
        <div id='circular'className='sc2'>
                <span id="perc" > 45%</span>
            </div>
            <div><p id='text-name'>Connectivity & Routing</p></div>
        </div>
        <div id='ap'>
        <div id='circular' className='sc3'>
                <span id="perc"> 65%</span>
            </div>
            <div><p id='text-name'>Application Based Knowledge</p></div>
        </div>
        </div>
    </div>
  )
}

export default Spring