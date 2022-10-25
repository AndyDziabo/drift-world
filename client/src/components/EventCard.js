
function EventCard({ event }) {
    console.log(event)
    return(
        <li>
            <h2>{event.name}</h2>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <p>{event.entry_fee}</p>
            <p>{event.description}</p>
            <img src={event.image} />
            <p>posted by: {event.user.name}</p>
        </li>
    )
}

export default EventCard;