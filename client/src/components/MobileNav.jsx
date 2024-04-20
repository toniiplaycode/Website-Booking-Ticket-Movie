import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { hiddenDrawer } from "../reducers/mobileNavSlice";
import { useNavigate } from "react-router-dom";
import { showSignin, showSignup } from "../reducers/modalSigninSignup";
import { useLocation } from 'react-router-dom';
import { p } from "react-router-hash-link";

const MobileNav = () => {
    const dispath = useDispatch();
    const showDrawer = useSelector((state) => state.mobileNav.showDrawer);

    let drawerClasses = showDrawer ? "side-drawer open" : "side-drawer";

    const navigate = useNavigate();

    const location = useLocation();

    const logged = true;

    return (
    <div className={drawerClasses}>
        <div className="drawer-container">
            <div className="drawer-icon-closed">
                <FontAwesomeIcon icon={faX} style={{cursor: "pointer"}} 
                    onClick={()=> dispath(hiddenDrawer())}
                />
            </div>
            <div className="drawer-item">
                <p 
                    className={location.pathname == "/" ? "active-mobile" : ""}
                    onClick={() => {
                        navigate("/");
                        dispath(hiddenDrawer());
                }}>
                    Trang chủ
                </p>
                <p 
                    className={location.pathname == "/movies" ? "active-mobile" : ""}
                    onClick={() => {
                        navigate("/movies");
                        dispath(hiddenDrawer())
                    }}
                >
                    Phim chiếu
                </p>
                <p 
                    className={location.pathname == "/purchase" ? "active-mobile" : ""}
                    onClick={() => {
                        navigate("/purchase");
                        dispath(hiddenDrawer());
                    }}
                >
                    Đặt vé
                </p>
                <p 
                    className={location.pathname == "/admin" ? "active-mobile" : ""}
                    onClick={() => {
                        navigate("/admin");
                        dispath(hiddenDrawer());
                    }}
                >
                    Quản lý
                </p>

                <div className="drawer-item-child-container">
                    <p 
                        className={location.pathname == "/admin/adminFilms" ? "drawer-item-child active-mobile" : "drawer-item-child"}
                        onClick={() => {
                        navigate("/admin/adminFilms");
                        dispath(hiddenDrawer());
                        }}
                    >
                        Phim
                    </p>
                    <p 
                        className={location.pathname == "/admin/adminTypeof" ? "drawer-item-child active-mobile" : "drawer-item-child"}
                        onClick={() => {
                        navigate("/admin/adminTypeof");
                        dispath(hiddenDrawer());
                        }}
                    >
                        Thể loại phim
                    </p>
                    <p 
                        className={location.pathname == "/admin/adminShowtimes" ? "drawer-item-child active-mobile" : "drawer-item-child"}
                        onClick={() => {
                        navigate("/admin/adminShowtimes");
                        dispath(hiddenDrawer());
                        }}
                    >
                        Lịch chiếu
                    </p>
                    <p 
                        className={location.pathname == "/admin/adminCalenderReleases" ? "drawer-item-child active-mobile" : "drawer-item-child"}
                        onClick={() => {
                        navigate("/admin/adminCalenderReleases");
                        dispath(hiddenDrawer());
                        }}
                    >
                        Suất chiếu 
                    </p>
                    <p 
                        className={location.pathname == "/admin/adminCinemas" ? "drawer-item-child active-mobile" : "drawer-item-child"}
                        onClick={() => {
                        navigate("/admin/adminCinemas");
                        dispath(hiddenDrawer());
                        }}
                    >
                        Rạp
                    </p>
                    <p 
                        className={location.pathname == "/admin/adminCinemaRooms" ? "drawer-item-child active-mobile" : "drawer-item-child"}
                        onClick={() => {
                        navigate("/admin/adminCinemaRooms");
                        dispath(hiddenDrawer());
                        }}
                    >
                        Phòng chiếu
                    </p>
                    <p 
                        className={location.pathname == "/admin/adminTickets" ? "drawer-item-child active-mobile" : "drawer-item-child"}
                        onClick={() => {
                        navigate("/admin/adminTickets");
                        dispath(hiddenDrawer());
                        }}
                    >
                        Vé
                    </p>
                    <p 
                        className={location.pathname == "/admin/adminUsers" ? "drawer-item-child active-mobile" : "drawer-item-child"}
                        onClick={() => {
                        navigate("/admin/adminUsers");
                        dispath(hiddenDrawer());
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
                                    dispath(hiddenDrawer());
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
                                dispath(showSignin());
                                dispath(hiddenDrawer());
                            }}>Đăng Nhập</p>
                            <p onClick={()=> {
                                dispath(showSignup());
                                dispath(hiddenDrawer());
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
