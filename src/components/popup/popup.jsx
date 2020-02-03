import React from 'react';
import "./popup.css";
import caution from "../../assets/images/caution.svg";
import close from "../../assets/images/close.png";

const Popup = ({handlePopup}) => {


    return (
        
        <div className="popup-section">
            <div className="popup-content">

                <div className="popup-modal">
                    <div className="popup-header">
                        <h4><img src={caution} alt="Caution" /> CONFIRM </h4>
                        <a href="#" class="close" onClick={()=>handlePopup(`close`)}/>
                    </div>
                    <div className="popup-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>

            </div>       
        </div>
        
    );
};

export default Popup;