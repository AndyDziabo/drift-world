import React, { useState } from "react";
import ServicesForm from './ServicesForm';
import ServicesList from "./ServicesList";


function Services(){
    const [showService, setShowService] = useState(false);
    
    function handleClick() {
        setShowService(!showService);
        console.log(showService)
    }
      
    return (
        <div>
            <div>
                Services
                <button onClick={handleClick}>{showService ? "Show all Ads" : "Create new Ad"}</button>
            </div>
            <div>
            {showService ? (
                <>
                New Services
                <ServicesForm />
                </>
            ) : (
                <>
                Services
                <ServicesList />
                </>
            )}
            </div>
        </div>
    )
}

export default Services