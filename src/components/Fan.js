import React, { useState } from 'react'
import './Fan.css'

export default function Fan() {

  const [speed, setspeed] = useState(50)

  const speedChange = () => {
    const value = document.getElementById('sliderrange').value;
    setspeed(value);
    let ms = value / 100;
    document.getElementById('speeder').style.animationDuration = `${ms}s`
  }



  return (
    <div aria-checked="true">
      <div className="header">Wind Mill</div>
      <div className="box">
        <div className="stand">
          <div className="point" id="speeder">
            <p className="center"></p>
            <p className="fanblade fb1"></p>
            <p className="fanblade fb2"></p>
            <p className="fanblade fb3"></p>
          </div>
        </div>
        <div className="base"></div>
      </div>
      <div className="slider">
        <label htmlFor="">Max Speed
          <input type="range" min="1" max="100" id="sliderrange" onChange={speedChange} />Min Speed</label>
      </div>
      <div className="footer">Made with ❤️ by Rohan</div>
    </div>
  )
}
