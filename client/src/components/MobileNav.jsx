import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { hiddenDrawer } from "../reducers/mobileNavSlice";
import { useNavigate } from "react-router-dom";
import { showSignin, showSignup } from "../reducers/modalSigninSignup";

const MobileNav = () => {
    const dispath = useDispatch();
    const showDrawer = useSelector((state) => state.mobileNav.showDrawer);

    let drawerClasses = showDrawer ? "side-drawer open" : "side-drawer";

    const navigate = useNavigate();

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
                    onClick={() => {
                        navigate("/");
                        dispath(hiddenDrawer());
                }}>
                    Trang chủ
                </p>
                <p 
                    onClick={() => {
                        navigate("/movies");
                        dispath(hiddenDrawer())
                    }}
                >
                    Phim chiếu
                </p>
                <p 
                    onClick={() => {
                        navigate("/news");
                        dispath(hiddenDrawer());
                    }}
                >
                    Tin tức
                </p>
                <div className="drawer-signup-signin">
                    <p onClick={()=> {
                        dispath(showSignin());
                        dispath(hiddenDrawer());
                    }}>Đăng Nhập</p>
                    <p onClick={()=> {
                        dispath(showSignup());
                        dispath(hiddenDrawer());
                    }}>Đăng ký</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MobileNav;
