
function EventCard({ event }) {

    return(
        <li className="event-li">
            <div>
                <img src={event.image} />
            </div>
            <div className="event-specs">
                <h2>{event.name}</h2>
                <div className="event-info">
                    <div>Posted by: {event.user.name}</div>
                    <div>Date: {event.date}</div>
                    <div>Location: {event.location}</div>
                    <div>EntryFee: ${event.entry_fee}</div>
                </div>
            </div>
            <div className="event-description">
                <div className="event-description-title">Description: </div>
                {event.description}
            </div>
            
            
        </li>
    )
}

export default EventCard;