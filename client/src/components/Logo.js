import { NavLink } from "react-router-dom";
import logo from '../images/drift-world-logo.png';

function Logo(){
    return(
        <div className="logo">
            <div>
                <NavLink to="/" exact>
                    <img alt="drift-world" src={logo} />
                </NavLink>
            </div>
        </div>
    )
}

export default Logo