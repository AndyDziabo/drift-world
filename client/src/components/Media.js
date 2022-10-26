import React, { useState } from "react";
import MediaForm from './MediaForm';
import MediaList from "./MediaList";

function Media(){
    const [showMedia, setShowMedia] = useState(false);
    
    function handleClick() {
        setShowMedia(!showMedia);
    }
      
    return (
        <div>
            <div>
                Media
                <button onClick={handleClick}>{showMedia ? "Show all Ads" : "Create new Ad"}</button>
            </div>
            <div>
            {showMedia ? (
                <>
                <MediaForm setShowMedia={setShowMedia} />
                </>
            ) : (
                <>
                <MediaList />
                </>
            )}
            </div>
        </div>
    )
}

export default Media