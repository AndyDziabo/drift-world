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
        <div>
            Services List
            <ul>
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </ul>
        </div>
    )
}

export default ServicesList