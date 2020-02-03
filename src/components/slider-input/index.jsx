import React from 'react'
import './style.css'

const SliderInput = () =>{
    return(
        <div className = "input-wrapper">
            <div className = "input-inner">
                <label>Bet amount</label>
                <input type="number" name="bet-amount" palceholder="Input bet amount"/>
                <button>1/2</button>
                <button>x2</button>

            </div>
        </div>
    )
}
export default SliderInput;