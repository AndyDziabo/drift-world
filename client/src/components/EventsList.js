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
        <div>
            Events List
            <ul>
                {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </ul>
        </div>
    )
}

export default EventsList