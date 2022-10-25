
function ServiceCard({ service }) {
    console.log(service)
    return(
        <li>
            <h2>{service.title}</h2>
            <p>{service.location}</p>
            <p>{service.description}</p>
            <img src={service.image} />
            <p>posted by: {service.user.name}</p>
        </li>
    )
}

export default ServiceCard;