import React from 'react'
import { FaPython } from 'react-icons/fa'

const PY = () => {

  

  return (
    <div id='javaScriptsk'>
      <div id='jslogo' className='py'>
      <FaPython />
      </div>
        <div id='progress'>
        <div id='sx'>
                <div id='circular' className='pyc1'>
                <span id="perc"> 65%</span>
            </div>
            <div><p id='text-name'>text</p></div>
        </div>
        <div id='ds'>
        <div id='circular'className='pyc2'>
                <span id="perc" > 45%</span>
            </div>
            <div><p id='text-name'>text</p></div>
        </div>
        <div id='ap'>
        <div id='circular' className='pyc3'>
                <span id="perc"> 35%</span>
            </div>
            <div><p id='text-name'>text</p></div>
        </div>
        </div>
    </div>
  )
}

export default PY