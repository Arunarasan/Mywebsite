import React from 'react'
import { MdJavascript } from 'react-icons/md'

const JS = () => {

  

  return (
    <div id='javaScriptsk'>
      <div id='jslogo' className='js'>
      <MdJavascript />

      </div >
      <div>
        <div id='progress'>
        <div id='sx'>
                <div id='circular' className='jsc1'>
                <span id="perc"> 75%</span>
            </div>
            <div><p id='text-name'>Syntax</p></div>
        </div>
        <div id='ds'>
        <div id='circular'className='jsc2'>
                <span id="perc" > 45%</span>
            </div>
            <div><p id='text-name'>Data Structuring</p></div>
        </div>
        <div id='ap'>
            <div id='circular' className='jsc3'>
                <span id="perc"> 65%</span>
            </div>
            <div><p id='text-name'>Application Based Knowledge</p></div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default JS