import { NavLink } from "react-router-dom";
import classifieds from '../images/classifieds.png';
import events from '../images/events.png';
import services from '../images/services.png';
import hotdogs from '../images/hotdogs.png';

function Home(){
    return(
    <div>
        <div className="top">
            <div className="top-left">
                <div className="page-selection">
                    <NavLink to="/classifieds" exact>
                        <img alt="drift-world" src={classifieds} />
                    </NavLink>
                </div>
            </div>
            <div className="top-right">
                <div className="page-selection">
                    <NavLink to="/events" exact>
                        <img alt="drift-world" src={events} />
                    </NavLink>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="bottom-left">
                <div className="page-selection">
                    <NavLink to="/Services" exact>
                        <img alt="drift-world" src={services} />
                    </NavLink>
                </div>
            </div>
            <div className="bottom-right">
                <div className="page-selection">
                    <NavLink to="/media" exact>
                        <img alt="drift-world" src={hotdogs} />
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home