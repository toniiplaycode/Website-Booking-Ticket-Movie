import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faUser } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const navigate = useNavigate();

    return(
        <div className="nav-container">
            <div className="nav-logo">
                <img 
                    src="/images/logo.png"
                    className="logo"
                />
                <span className="text-logo">FANTASTIC</span>
            </div>
            <nav>
                <ul className="nav-items">
                    <li>
                        <NavLink
                        to="/"
                        className="nav-item"
                        >
                        Trang chủ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/movies"
                        className="nav-item"
                        >
                        Phim chiếu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/news"
                        className="nav-item"
                        >
                        Tin tức
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="nav-signup-signin">
                <FontAwesomeIcon icon={faUser} className="switch-modal-icon" />
                {false ?? (<FontAwesomeIcon icon={faChevronUp} className="switch-modal-icon" />) } 
                <FontAwesomeIcon icon={faChevronDown} className="switch-modal-icon" />
            </div>
        </div>
    )
}

export default Navbar;