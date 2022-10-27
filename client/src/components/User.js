import { useEffect, useState } from "react";
import "./UserStyle/user.css";
import UserAd from "./UserAd";
import UserAdEdit from "./UserAdEdit";
import UserEvents from "./UserEvents";
import UserEventsEdit from "./UserEventsEdit";
import UserHotdogs from "./UserHotdogs";
import UserHotdogsEdit from "./UserHotdogsEdit";
import UserServices from "./UserServices";
import UserServicesEdit from "./UserServicesEdit";

function User() {
    const [ads, setAds] = useState([]);
    const [events, setEvents] = useState([]);
    const [services, setServices] = useState([]);
    const [hotdogs, setHotdogs] = useState([]);
    const [toggleAdEdit, setToggleAdEdit] = useState(false);
    const [currentAd, setCurrentAd] = useState();
    const [toggleEventEdit, setToggleEventEdit] = useState(false);
    const [currentEvent, setCurrentEvent] = useState();
    const [toggleServiceEdit, setToggleServiceEdit] = useState(false);
    const [currentService, setCurrentService] = useState();
    const [toggleHotdogEdit, setToggleHotdogEdit] = useState(false);
    const [currentHotdog, setCurrentHotdog] = useState();

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
                <h2>Account Page</h2>
                <div>
                    <h3>Classifieds</h3>
                    <ul>
                        {ads.map((ad) => (
                            <UserAd 
                                key={ad.id} 
                                ad={ad} 
                                onAdDelete={handleAdDelete} 
                                setCurrentAd={setCurrentAd} 
                                setToggleAdEdit={setToggleAdEdit}
                                setToggleEventEdit={setToggleEventEdit}
                                setToggleServiceEdit={setToggleServiceEdit}
                                setToggleHotdogEdit={setToggleHotdogEdit} 
                            />
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Events</h3>
                    <ul>
                        {events.map((event) => (
                            <UserEvents 
                                key={event.id} 
                                event={event} 
                                onEventDelete={handleEventDelete} 
                                setCurrentEvent={setCurrentEvent} 
                                setToggleAdEdit={setToggleAdEdit}
                                setToggleEventEdit={setToggleEventEdit}
                                setToggleServiceEdit={setToggleServiceEdit}
                                setToggleHotdogEdit={setToggleHotdogEdit} 
                            />
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Services</h3>
                    <ul>
                        {services.map((service) => (
                            <UserServices 
                                key={service.id} 
                                service={service} 
                                onServiceDelete={handleServiceDelete} 
                                setCurrentService={setCurrentService} 
                                setToggleAdEdit={setToggleAdEdit}
                                setToggleEventEdit={setToggleEventEdit}
                                setToggleServiceEdit={setToggleServiceEdit}
                                setToggleHotdogEdit={setToggleHotdogEdit} 
                            />
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Hotdogs</h3>
                    <ul>
                        {hotdogs.map((hotdog) => (
                            <UserHotdogs 
                                key={hotdog.id} 
                                hotdog={hotdog} 
                                onHotdogDelete={handleHotdogDelete} 
                                setCurrentHotdog={setCurrentHotdog} 
                                setToggleAdEdit={setToggleAdEdit}
                                setToggleEventEdit={setToggleEventEdit}
                                setToggleServiceEdit={setToggleServiceEdit}
                                setToggleHotdogEdit={setToggleHotdogEdit} 
                            />
                        ))}
                    </ul>
                </div>
                
            </div>
            <div>
                {toggleAdEdit ? <UserAdEdit currentAd={currentAd} setToggleAdEdit={setToggleAdEdit} /> : null}
                {toggleEventEdit ? <UserEventsEdit currentEvent={currentEvent} setToggleEventEdit={setToggleEventEdit} /> : null}
                {toggleServiceEdit ? <UserServicesEdit currentService={currentService} setToggleServiceEdit={setToggleServiceEdit} /> : null}
                {toggleHotdogEdit ? <UserHotdogsEdit currentHotdog={currentHotdog} setToggleHotdogEdit={setToggleHotdogEdit} /> : null}
            </div>
        </div>
    )
}

export default User;