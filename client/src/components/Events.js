import React, { useState } from "react";
import EventsForm from './EventsForm';
import EventsList from "./EventsList";

function Events(){
    const [showEvent, setShowEvent] = useState(false);
    
    function handleClick() {
        setShowEvent(!showEvent);
    }
      
    return (
        <div>
            <div>
                Events
                <button onClick={handleClick}>{showEvent ? "Show all Ads" : "Create new Ad"}</button>
            </div>
            <div>
            {showEvent ? (
                <>
                <EventsForm setShowEvent={setShowEvent} />
                </>
            ) : (
                <>
                <EventsList />
                </>
            )}
            </div>
        </div>
    )
}

export default Events