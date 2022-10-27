import React, { useState } from "react";
import ServicesForm from './ServicesForm';
import ServicesList from "./ServicesList";
import "./ServiceStyle/service.css";

function Services(){
    const [showService, setShowService] = useState(false);
    
    function handleClick() {
        setShowService(!showService);
    }
      
    return (
        <div className="main-service">
            <div className="title">
                <h2>Services</h2>
                <button onClick={handleClick}>{showService ? "Show Services" : "Create Service"}</button>
            </div>
            <div className="services">
            {showService ? (
                <>
                <ServicesForm setShowService={setShowService} />
                </>
            ) : (
                <>
                <ServicesList />
                </>
            )}
            </div>
        </div>
    )
}

export default Services