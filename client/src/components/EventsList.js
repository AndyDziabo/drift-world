import { useEffect, useState } from "react";
import EventCard from "./EventCard";

function EventsList() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("/events")
            .then((r) => r.json())
            .then(setEvents);
    }, []);


    return(
        <div className="main-list">
            <div className="event-type">
                <h3>Events List</h3>
            </div>
            
            <ul className="main-list-ul">
                {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </ul>
        </div>
    )
}

export default EventsList