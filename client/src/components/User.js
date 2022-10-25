import { useEffect, useState } from "react";
import UserAd from "./UserAd";
import UserAdEdit from "./UserAdEdit";
import UserEvents from "./UserEvents";
import UserHotdogs from "./UserHotdogs";
import UserServices from "./UserServices";

function User() {
    const [ads, setAds] = useState([]);
    const [events, setEvents] = useState([]);
    const [services, setServices] = useState([]);
    const [hotdogs, setHotdogs] = useState([]);
    const [toggleAdEdit, setToggleAdEdit] = useState(false);
    const [currentAd, setCurrentAd] = useState();

    useEffect(() => {
        fetch("/user_ads")
            .then((r) => r.json())
            .then(data => setAds(data));
        fetch("/user_events")
            .then((r) => r.json())
            .then(data => setEvents(data));
        fetch("/user_services")
            .then((r) => r.json())
            .then(data => setServices(data));
        fetch("/user_hotdogs")
            .then((r) => r.json())
            .then(data => setHotdogs(data));
    }, []);

    function handleAdDelete(id){
        const updatedAds = ads.filter((ad) => ad.id !== id);
        setAds(updatedAds);
    }

    function handleEventDelete(id){
        const updatedEvents = events.filter((event) => event.id !== id);
        setEvents(updatedEvents);
    }

    function handleServiceDelete(id){
        const updatedServices = services.filter((service) => service.id !== id);
        setServices(updatedServices);
    }

    function handleHotdogDelete(id){
        const updatedHotdogs = hotdogs.filter((hotdog) => hotdog.id !== id);
        setHotdogs(updatedHotdogs);
    }

    return(
        <div className="user-main">
            <div className="user-list">
                user page
                <div>
                    ads
                    <ul>
                        {ads.map((ad) => (<UserAd key={ad.id} ad={ad} onAdDelete={handleAdDelete} setCurrentAd={setCurrentAd} setToggleAdEdit={setToggleAdEdit} />))}
                    </ul>
                </div>
                <div>
                    events
                    <ul>
                        {events.map((event) => (<UserEvents key={event.id} event={event} onEventDelete={handleEventDelete} />))}
                    </ul>
                </div>
                <div>
                    services
                    <ul>
                        {services.map((service) => (<UserServices key={service.id} service={service} onServiceDelete={handleServiceDelete} />))}
                    </ul>
                </div>
                <div>
                    hotdog
                    <ul>
                        {hotdogs.map((hotdog) => (<UserHotdogs key={hotdog.id} hotdog={hotdog} onHotdogDelete={handleHotdogDelete} />))}
                    </ul>
                </div>
                
            </div>
            <div className="user-edit">
                {toggleAdEdit ? <UserAdEdit currentAd={currentAd} setToggleAdEdit={setToggleAdEdit} /> : null}
            </div>
        </div>
    )
}

export default User;