
function ServiceCard({ service }) {

    return(
        <li>
            <h2>{service.title}</h2>
            <img src={service.image} />
            <p>Location: {service.location}</p>
            <p>Description: {service.description}</p>
            <p>posted by: {service.user.name}</p>
        </li>
    )
}

export default ServiceCard;