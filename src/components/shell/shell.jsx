import React from 'react';
import "./shell.css";
import topshell from "../../assets/images/top.svg";
import bottomshell from "../../assets/images/bottom.svg";

const Shell = ({handlePopup}) => {


    return (
        
        <div className="shell-section">
            <div className="shell-content">

                <div className="shell-box" onClick={()=>handlePopup(`open`)}>
                        <img className="top-shell" src={topshell} alt="Top" />
                        <img className="bottom-shell" src={bottomshell} alt="Bottom" />
                </div>

            </div>       
        </div>
        
    );
};

export default Shell;