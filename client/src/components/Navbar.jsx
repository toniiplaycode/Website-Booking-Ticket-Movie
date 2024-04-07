import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { showDrawer } from "../reducers/mobileNavSlice";
import { showSignin, showSignup } from "../reducers/modalSigninSignup";

const Navbar = () => {
    const navigate = useNavigate();

    const dispath = useDispatch();

    return(
        <div className="nav-container">
            <div className="nav-icon-menu-contaienr d-lg-none">
                <FontAwesomeIcon icon={faBars} 
                    className="nav-icon-menu"
                    onClick={() => {dispath(showDrawer())}}
                />
            </div>
            <div className="nav-logo">
                <img 
                    src="/images/logo.png"
                    className="logo"
                    onClick={() => navigate("/")}
                />
                <span className="text-logo"
                    onClick={() => navigate("/")}>
                        FANTASTIC
                </span>
            </div>
            <nav className="d-none d-lg-block">
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
                <FontAwesomeIcon icon={faChevronDown} className="switch-modal-icon d-none d-lg-inline" />
                <div className="signup-signin-container">
                    <div
                        onClick={()=> dispath(showSignin())}
                    >
                        Đăng nhập
                    </div>
                    <div
                        onClick={()=> dispath(showSignup())}
                    >
                        Đăng ký
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;