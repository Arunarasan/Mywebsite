import React from 'react'
import { SiMysql } from 'react-icons/si'


const Mysql = () => {

  

  return (
    <div id='javaScriptsk'>
      <div id='jslogo' className='ms'>
      <SiMysql />
      </div>
        <div id='progress'>
        <div id='sx'>
                <div id='circular' className='msc1'>
                <span id="perc"> 65%</span>
            </div>
            <div><p id='text-name'>Query</p></div>
        </div>
        <div id='ds'>
        <div id='circular'className='msc2'>
                <span id="perc" > 45%</span>
            </div>
            <div><p id='text-name'>Data Structuring</p></div>
        </div>
        <div id='ap'>
        <div id='circular' className='msc3'>
                <span id="perc"> 60%</span>
            </div>
            <div><p id='text-name'>Application Based Knowledge</p></div>
        </div>
        </div>
    </div>
  )
}

export default Mysql