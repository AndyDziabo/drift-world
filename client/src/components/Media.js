import React, { useState } from "react";
import MediaForm from './MediaForm';
import MediaList from "./MediaList";
import "./HotdogStyle/hotdog.css";

function Media(){
    const [showMedia, setShowMedia] = useState(false);
    
    function handleClick() {
        setShowMedia(!showMedia);
    }
      
    return (
        <div className="main-hotdog">
            <div className="main-title">
                <h2>Media</h2>
                <button onClick={handleClick}>{showMedia ? "Show Hotdogs" : "Create Hotdog"}</button>
            </div>
            <div className="main-body">
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