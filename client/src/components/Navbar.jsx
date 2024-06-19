import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faUser,
  faBars,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { showDrawer } from "../reducers/mobileNavSlide";
import { toggleSignin, toggleSignup } from "../reducers/modalSigninSignup";
import { useEffect } from "react";
import { fetchInforUser, handleLogout } from "../reducers/apiLoginLogout";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const roleUserJWT = useSelector((state) => state.apiLoginLogout.roleUserJWT);

  useEffect(() => {
    dispatch(fetchInforUser(roleUserJWT.id));
  }, [roleUserJWT]);

  const inforUser = useSelector((state) => state.apiLoginLogout.inforUser);

  return (
    <div className="nav-container">
      <div className="nav-icon-menu-contaienr d-lg-none">
        <FontAwesomeIcon
          icon={faBars}
          className="nav-icon-menu"
          onClick={() => {
            dispatch(showDrawer());
          }}
        />
      </div>
      <div className="nav-logo">
        <img
          src="/images/logo.png"
          className="logo"
          onClick={() => navigate("/")}
        />
        <span className="text-logo" onClick={() => navigate("/")}>
          FANTASTIC
        </span>
      </div>
      <nav className="d-none d-lg-block">
        <ul className="nav-items">
          <li>
            <NavLink to="/" className="nav-item">
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className="nav-item">
              Phim chiếu
            </NavLink>
          </li>
          <li>
            <NavLink to="/purchase" className="nav-item">
              Đặt vé
            </NavLink>
          </li>
          {(inforUser.roleId == "R1" || inforUser.roleId == "R2") && (
            <li>
              <NavLink to="/admin" className="nav-item">
                Quản lý
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      <div className="nav-signup-signin">
        {Object.keys(inforUser).length != 0 ? (
          <>
            <span
              className="name-user-navbar d-none d-lg-inline"
              onClick={() => navigate("/user")}
            >
              {inforUser.firstName}
            </span>
            <FontAwesomeIcon
              icon={faUser}
              className="switch-modal-icon"
              onClick={() => navigate("/user")}
            />
            <FontAwesomeIcon
              icon={faSignOut}
              className="switch-modal-icon icon-signout d-none d-lg-inline"
              onClick={() => {
                dispatch(handleLogout());
                navigate("/");
              }}
            />
          </>
        ) : (
          <>
            <FontAwesomeIcon
              icon={faUser}
              className="switch-modal-icon"
              onClick={() => dispatch(toggleSignin())}
            />
            <FontAwesomeIcon
              icon={faChevronDown}
              className="switch-modal-icon d-none d-lg-inline"
            />
            <div className="signup-signin-container">
              <div onClick={() => dispatch(toggleSignin())}>Đăng nhập</div>
              <div onClick={() => dispatch(toggleSignup())}>Đăng ký</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
