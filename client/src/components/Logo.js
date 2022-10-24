import { NavLink } from "react-router-dom";
import logo from '../images/driftLogo.png';

function Logo(){
    return(
        <div className="logo">
            <NavLink to="/" exact>
                <img alt="drift-world" src={logo} />
            </NavLink>
        </div>
    )
}

export default Logo