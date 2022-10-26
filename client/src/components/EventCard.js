
function EventCard({ event }) {

    return(
        <li>
            <img src={event.image} />
            <h2>{event.name}</h2>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <p>EntryFee: ${event.entry_fee}</p>
            <p>Description: {event.description}</p>
            <p>posted by: {event.user.name}</p>
        </li>
    )
}

export default EventCard;