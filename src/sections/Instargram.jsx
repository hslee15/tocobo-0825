import React from 'react'
import Images from "../util/instar"
import "../styles/sections/instagram.scss"

const Instargram = () => {
  return (
    <div className='inner instar-inner'>
      <div className="t-wrap">
        <h2 className='tit'>
          Instagram
        </h2>
        <p>
          @tocoba_official
        </p>
      </div>
      <ul className="instar-lst">
        {Images.map((img, idx)=>(
        <li key={idx}>
          <a href={img.link} target="_blank" rel="noopener noreferrer">
            <img src={img.src} alt={`instagram-${idx}`} />
          </a>
        </li>
          
        ))}
      </ul>
    </div>
  )
}

export default Instargram