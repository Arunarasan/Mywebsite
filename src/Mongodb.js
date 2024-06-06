import React from 'react'
import { SiMongodb } from 'react-icons/si'

const Mongodb = () => {

  

  return (
    <div id='javaScriptsk'>
      <div id='jslogo' className='md'>
      <SiMongodb />

      </div>
        <div id='progress'>
        <div id='sx'>
                <div id='circular' className='mdc1'>
                <span id="perc"> 55%</span>
            </div>
            <div><p id='text-name'>Query</p></div>
        </div>
        <div id='ds'>
        <div id='circular'className='mdc2'>
                <span id="perc" > 45%</span>
            </div>
            <div><p id='text-name'>Data Structuring</p></div>
        </div>
        <div id='ap'>
        <div id='circular' className='mdc3'>
                <span id="perc"> 65%</span>
            </div>
            <div><p id='text-name'>Application Based Knowledge</p></div>
        </div>
        </div>
    </div>
  )
}

export default Mongodb