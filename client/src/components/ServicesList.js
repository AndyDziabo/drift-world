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
                <h3>Services List</h3>
            </div>
            
            <ul className="main-list-ul">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </ul>
        </div>
    )
}

export default ServicesList