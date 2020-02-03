import React,{useState, useEffect} from 'react'
import './style.css'
const Slider = () =>{
const [sliderval, setSliderval] = useState(0)
useEffect(()=>{},[sliderval])
    const handleChange = (e) =>{
        setSliderval(e.target.value)
    }
    return(
        <div className="slider-wrapper">
             <div className="slider-inner">
            <span className="maxval">100</span>
            <input className="range" id="slider-input" type="range" value={sliderval} onChange={handleChange}/>
             <div className="color-red"></div>
             <div className="slider-moving-pointer-wrapper" style={{height:`${100 - sliderval}%`}}>
            
             <label className="slider-moving-pointer" htmlFor="slider-input">
             {100 - sliderval}
            </label>
            </div>
            <span className="minval">0</span>
            </div>
        </div>
    )
}
export default Slider