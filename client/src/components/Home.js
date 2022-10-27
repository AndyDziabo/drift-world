import { NavLink } from "react-router-dom";

function Home(){
    return(
    <div>
        <div className="top">
            <div className="top-left">
                <div className="page-selection">
                    <NavLink to="/classifieds" exact>
                        Classifieds
                    </NavLink>
                </div>
            </div>
            <div className="top-right">
                <div className="page-selection">
                    <NavLink to="/events" exact>
                        Events
                    </NavLink>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="bottom-left">
                <div className="page-selection">
                    <NavLink to="/Services" exact>
                        Services
                    </NavLink>
                </div>
            </div>
            <div className="bottom-right">
                <div className="page-selection">
                    <NavLink to="/media" exact>
                        Hot Dog
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home