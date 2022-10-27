import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

function ServicesList() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/services")
            .then((r) => r.json())
            .then(setServices);
    }, []);

    return(
        <div className="main-services-list">
            <div className="service-type">
                Services List
            </div>
            
            <ul className="services-list-ul">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </ul>
        </div>
    )
}

export default ServicesList