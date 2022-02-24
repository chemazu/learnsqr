import React from 'react'
import "./style.scss"
import union from "../../resource/Union.svg"
import lendsqr from "../../resource/lendsqr.svg"

export default function Logo() {
  return (
    <div className='logo'>
        <img src={union} alt="union" className='union'/>
        <img src={lendsqr} alt="lendsqr"/>
    </div>
  )
}
