
function ClassifiedCard({ classified }) {
    console.log(classified)
    return(
        <li>
            <h2>{classified.name}</h2>
            <p>{classified.date}</p>
            <p>{classified.location}</p>
            <p>{classified.entry_fee}</p>
            <p>{classified.description}</p>
            <img src={classified.image} />
            <p>posted by: {classified.user.name}</p>
        </li>
    )
}

export default ClassifiedCard;