import { NavLink } from "react-router-dom";

function Home(){
    return(
    <div>
        <div className="top">
            <div className="top-left">
                <NavLink to="/classifieds" exact>
                    Classifieds
                </NavLink>
            </div>
            <div className="top-right">
                <NavLink to="/events" exact>
                    Events
                </NavLink>
            </div>
        </div>
        <div className="bottom">
            <div className="bottom-left">
                <NavLink to="/Services" exact>
                    Services
                </NavLink>
            </div>
            <div className="bottom-right">
                <NavLink to="/media" exact>
                    Hot Dog
                </NavLink>
            </div>
        </div>
    </div>
    )
}

export default Home