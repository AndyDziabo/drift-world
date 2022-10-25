import React, { useState } from "react";
import ClassifiedsForm from './ClassifiedsForm';
import ClassifiedsList from "./ClassifiedsList";

function Classifieds({ user }){
    const [showAd, setShowAd] = useState(false);
    
    function handleClick() {
        setShowAd(!showAd);
        console.log(showAd)
    }
      
    return (
        <div>
            <div>
                Classifieds
                <button onClick={handleClick}>{showAd ? "Show all Ads" : "Create new Ad"}</button>
            </div>
            <div>
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