import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { hiddenDrawer } from "../reducers/mobileNavSlice";
import { useNavigate } from "react-router-dom";
import { toggleSignin, toggleSignup } from "../reducers/modalSigninSignup";
import { useLocation } from 'react-router-dom';

const MobileNav = () => {
    const dispatch = useDispatch();
    const showDrawer = useSelector((state) => state.mobileNav.showDrawer);

    let drawerClasses = showDrawer ? "side-drawer open" : "side-drawer";

    const navigate = useNavigate();

    const location = useLocation();

    const logged = false;

    return (
    <div className={drawerClasses}>
        <div className="drawer-container">
            <div className="drawer-icon-closed">
                <FontAwesomeIcon icon={faX} style={{cursor: "pointer"}} 
                    onClick={()=> dispatch(hiddenDrawer())}
                />
            </div>
            <div className="drawer-item">
                <p 
                    className={location.pathname == "/" ? "active-mobile" : ""}
                    onClick={() => {
                        navigate("/");
                        dispatch(hiddenDrawer());
                }}>
                    Trang chủ
                </p>
                <p 
                    className={location.pathname == "/movies" ? "active-mobile" : ""}
                    onClick={() => {
                        navigate("/movies");
                        dispatch(hiddenDrawer())
                    }}
                >
                    Phim chiếu
                </p>
                <p 
                    className={location.pathname == "/purchase" ? "active-mobile" : ""}
                    onClick={() => {
                        navigate("/purchase");
                        dispatch(hiddenDrawer());
                    }}
                >
                    Đặt vé
                </p>
                <p 
                    className={location.pathname == "/admin" ? "active-mobile" : ""}
                    onClick={() => {
                        navigate("/admin");
                        dispatch(hiddenDrawer());
                    }}
                >
                    Quản lý
                </p>

                <div className="drawer-item-child-container">
                    <p 
                        className={location.pathname == "/admin/adminFilms" ? "drawer-item-child active-mobile" : "drawer-item-child"}
                        onClick={() => {
                        navigate("/admin/adminFilms");
                        dispatch(hiddenDrawer());
                        }}
                    >
                        Phim
                    </p>
                    <p 
                        className={location.pathname == "/admin/adminTypeof" ? "drawer-item-child active-mobile" : "drawer-item-child"}
                        onClick={() => {
                        navigate("/admin/adminTypeof");
                        dispatch(hiddenDrawer());
                        }}
                    >
                        Thể loại phim
                    </p>
                    <p 
                        className={location.pathname == "/admin/adminCalenderReleases" ? "drawer-item-child active-mobile" : "drawer-item-child"}
                        onClick={() => {
                        navigate("/admin/adminCalenderReleases");
                        dispatch(hiddenDrawer());
                        }}
                    >
                        Suất chiếu 
                    </p>
                    <p 
                        className={location.pathname == "/admin/adminCinemas" ? "drawer-item-child active-mobile" : "drawer-item-child"}
                        onClick={() => {
                        navigate("/admin/adminCinemas");
                        dispatch(hiddenDrawer());
                        }}
                    >
                        Rạp
                    </p>
                    <p 
                        className={location.pathname == "/admin/adminCinemaRooms" ? "drawer-item-child active-mobile" : "drawer-item-child"}
                        onClick={() => {
                        navigate("/admin/adminCinemaRooms");
                        dispatch(hiddenDrawer());
                        }}
                    >
                        Phòng chiếu
                    </p>
                    <p 
                        className={location.pathname == "/admin/adminTickets" ? "drawer-item-child active-mobile" : "drawer-item-child"}
                        onClick={() => {
                        navigate("/admin/adminTickets");
                        dispatch(hiddenDrawer());
                        }}
                    >
                        Vé
                    </p>
                    <p 
                        className={location.pathname == "/admin/adminUsers" ? "drawer-item-child active-mobile" : "drawer-item-child"}
                        onClick={() => {
                        navigate("/admin/adminUsers");
                        dispatch(hiddenDrawer());
                        }}
                    >
                        Khách hàng
                    </p>
                </div>

                <div className="drawer-signup-signin">
                    {logged ? (
                        <>
                            <p
                                onClick={() => {
                                    navigate("/user");
                                    dispatch(hiddenDrawer());
                                    }
                                }
                            >
                                Toàn
                            </p>
                            <p>Đăng xuất</p>
                        </>
                    ) : (
                        <>
                            <p onClick={()=> {
                                dispatch(toggleSignin());
                                dispatch(hiddenDrawer());
                            }}>Đăng Nhập</p>
                            <p onClick={()=> {
                                dispatch(toggleSignup());
                                dispatch(hiddenDrawer());
                            }}>Đăng ký</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    </div>
    );
};

export default MobileNav;
