
function ServiceCard({ service }) {

    return(
        <li className="service-li">
            <h2>{service.title}</h2>
            <div className="service-info">
                <div>Posted by: {service.user.name}</div>
                <div>Location: {service.location}</div>
            </div>   
            <div>
                <div className="service-image">
                    <img src={service.image} />
                </div>
                <div className="service-description">
                    <div className="service-description-title">Description: </div>
                    {service.description}
                </div>    
            </div>         
        </li>
    )
}

export default ServiceCard;