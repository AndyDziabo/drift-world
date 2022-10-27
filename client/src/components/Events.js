import React, { useState } from "react";
import EventsForm from './EventsForm';
import EventsList from "./EventsList";
import "./EventStyle/event.css";

function Events(){
    const [showEvent, setShowEvent] = useState(false);
    
    function handleClick() {
        setShowEvent(!showEvent);
    }
      
    return (
        <div className="main-event">
            <div className="title">
                <h2>Events</h2>
                <button onClick={handleClick}>{showEvent ? "Show Events" : "Create Event"}</button>
            </div>
            <div className="events">
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