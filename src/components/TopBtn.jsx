import React from 'react'
import '../styles/components/topbtn.scss'
import useSmoothSCroll from '../hooks/useSmoothScroll'
const TopBtn = () => {
    const scrollTo=useSmoothSCroll()
  return (
    <div className='btn-all'>
      {/* icon_top.svg */}
    <button 
    onClick={(e)=>{
        e.preventDefault()
        scrollTo('Hero')
    }}
    className='top-btn'><img src="/img/icon_top.svg" alt="위로가기 버튼" /></button>
  
    <div className="s-btn">
    <a 
    onClick={(e)=>{
        e.preventDefault()
        scrollTo('Hello')
    }}
    className='second-btn'>TCB</a>
    </div>
      
    <a href="" className="talk-btn">
      1:1 Talk
    </a>
    <p>1:1 Talk</p>
    </div>
  )
}

export default TopBtn