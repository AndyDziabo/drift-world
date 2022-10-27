import React, { useState } from "react";
import ClassifiedsForm from './ClassifiedsForm';
import ClassifiedsList from "./ClassifiedsList";
import "./ClassifiedStyle/classified.css";

function Classifieds({ user }){
    const [showAd, setShowAd] = useState(false);
    
    function handleClick() {
        setShowAd(!showAd);
    }
      
    return (
        <div className="main-classified">
            <div className="title">
                <h2>Classifieds</h2>
                <button onClick={handleClick}>{showAd ? "Show Ads" : "Create Ad"}</button>
            </div>
            <div className="ads">
            {showAd ? (
                <>
                <ClassifiedsForm setShowAd={setShowAd} user={user}  />
                </>
            ) : (
                <>
                <ClassifiedsList />
                </>
            )}
            </div>
        </div>
    )
}

export default Classifieds