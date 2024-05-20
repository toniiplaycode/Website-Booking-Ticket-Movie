import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faX } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { hiddenDrawer } from "../reducers/mobileNavSlice";
import { useNavigate } from "react-router-dom";
import { toggleSignin, toggleSignup } from "../reducers/modalSigninSignup";
import { useLocation } from "react-router-dom";
import { fetchInforUser, handleLogout } from "../reducers/apiLoginLogout";
import { useEffect } from "react";
import { toast } from "react-toastify";

const MobileNav = () => {
  const dispatch = useDispatch();
  const showDrawer = useSelector((state) => state.mobileNav.showDrawer);

  let drawerClasses = showDrawer ? "side-drawer open" : "side-drawer";

  const navigate = useNavigate();

  const location = useLocation();

  const idRoleUser = useSelector((state) => state.apiLoginLogout.idRoleUser);

  useEffect(() => {
    dispatch(fetchInforUser(idRoleUser.id));
  }, [idRoleUser]);

  const inforUser = useSelector((state) => state.apiLoginLogout.inforUser);

  const isStatistical = () => {
    return window.location.pathname.endsWith("/admin");
  };

  useEffect(() => {
    // Gọi hàm isStatistical khi location (URL) thay đổi
    isStatistical();
  }, [location]);

  return (
    <div className={drawerClasses}>
      <div className="drawer-container">
        <div className="drawer-icon-closed">
          <FontAwesomeIcon
            icon={faX}
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(hiddenDrawer())}
          />
        </div>
        <div className="drawer-item">
          <p
            className={location.pathname == "/" ? "active-mobile" : ""}
            onClick={() => {
              navigate("/");
              dispatch(hiddenDrawer());
            }}
          >
            Trang chủ
          </p>
          <p
            className={location.pathname == "/movies" ? "active-mobile" : ""}
            onClick={() => {
              navigate("/movies");
              dispatch(hiddenDrawer());
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
          {(inforUser.roleId == "R1" || inforUser.roleId == "R2") && (
            <>
              <p
                onClick={() => {
                  navigate("/admin/statistical");
                  dispatch(hiddenDrawer());
                }}
              >
                Quản lý
              </p>
              <div className="drawer-item-child-container">
                <p
                  className={
                    location.pathname == "/admin/statistical" ||
                    location.pathname == "/admin"
                      ? "drawer-item-child active-mobile"
                      : "drawer-item-child"
                  }
                  onClick={() => {
                    navigate("/admin/statistical");
                    dispatch(hiddenDrawer());
                  }}
                >
                  Thống kê
                </p>
                <p
                  className={
                    location.pathname == "/admin/adminFilms"
                      ? "drawer-item-child active-mobile"
                      : "drawer-item-child"
                  }
                  onClick={() => {
                    navigate("/admin/adminFilms");
                    dispatch(hiddenDrawer());
                  }}
                >
                  Phim
                </p>
                <p
                  className={
                    location.pathname == "/admin/adminTypeof"
                      ? "drawer-item-child active-mobile"
                      : "drawer-item-child"
                  }
                  onClick={() => {
                    navigate("/admin/adminTypeof");
                    dispatch(hiddenDrawer());
                  }}
                >
                  Thể loại phim
                </p>
                <p
                  className={
                    location.pathname == "/admin/adminCalenderReleases"
                      ? "drawer-item-child active-mobile"
                      : "drawer-item-child"
                  }
                  onClick={() => {
                    navigate("/admin/adminCalenderReleases");
                    dispatch(hiddenDrawer());
                  }}
                >
                  Suất chiếu
                </p>
                <p
                  className={
                    location.pathname == "/admin/AdminPayments"
                      ? "drawer-item-child active-mobile"
                      : "drawer-item-child"
                  }
                  onClick={() => {
                    navigate("/admin/AdminPayments");
                    dispatch(hiddenDrawer());
                  }}
                >
                  Thanh toán
                </p>
                <p
                  className={
                    location.pathname == "/admin/adminTickets"
                      ? "drawer-item-child active-mobile"
                      : "drawer-item-child"
                  }
                  onClick={() => {
                    navigate("/admin/adminTickets");
                    dispatch(hiddenDrawer());
                  }}
                >
                  Vé
                </p>

                {inforUser && inforUser.roleId == "R1" ? (
                  <p
                    className={
                      location.pathname == "/admin/adminCinemas"
                        ? "drawer-item-child active-mobile"
                        : "drawer-item-child"
                    }
                    onClick={() => {
                      navigate("/admin/adminCinemas");
                      dispatch(hiddenDrawer());
                    }}
                  >
                    Rạp
                  </p>
                ) : (
                  <p
                    className="drawer-item-child drawer-item-child-block"
                    onClick={() => {
                      toast.warning("Chỉ có quản lý mới truy cập !");
                    }}
                  >
                    Rạp
                    <div className="adminpage-navbar-item-block">
                      <FontAwesomeIcon
                        className="card-icon"
                        icon={faTriangleExclamation}
                      />
                    </div>
                  </p>
                )}

                {inforUser && inforUser.roleId == "R1" ? (
                  <p
                    className={
                      location.pathname == "/admin/adminCinemaRooms"
                        ? "drawer-item-child active-mobile"
                        : "drawer-item-child"
                    }
                    onClick={() => {
                      navigate("/admin/adminCinemaRooms");
                      dispatch(hiddenDrawer());
                    }}
                  >
                    Phòng chiếu
                  </p>
                ) : (
                  <p
                    className="drawer-item-child drawer-item-child-block"
                    onClick={() => {
                      toast.warning("Chỉ có quản lý mới truy cập !");
                    }}
                  >
                    Phòng chiếu
                    <div className="adminpage-navbar-item-block">
                      <FontAwesomeIcon
                        className="card-icon"
                        icon={faTriangleExclamation}
                      />
                    </div>
                  </p>
                )}

                {inforUser && inforUser.roleId == "R1" ? (
                  <p
                    className={
                      location.pathname == "/admin/adminUsers"
                        ? "drawer-item-child active-mobile"
                        : "drawer-item-child"
                    }
                    onClick={() => {
                      navigate("/admin/adminUsers");
                      dispatch(hiddenDrawer());
                    }}
                  >
                    Khách hàng
                  </p>
                ) : (
                  <p
                    className="drawer-item-child drawer-item-child-block"
                    onClick={() => {
                      toast.warning("Chỉ có quản lý mới truy cập !");
                    }}
                  >
                    Khách hàng
                    <div className="adminpage-navbar-item-block">
                      <FontAwesomeIcon
                        className="card-icon"
                        icon={faTriangleExclamation}
                      />
                    </div>
                  </p>
                )}

                {inforUser && inforUser.roleId == "R1" ? (
                  <p
                    className={
                      location.pathname == "/admin/adminRole"
                        ? "drawer-item-child active-mobile"
                        : "drawer-item-child"
                    }
                    onClick={() => {
                      navigate("/admin/adminRole");
                      dispatch(hiddenDrawer());
                    }}
                  >
                    Chức vụ
                  </p>
                ) : (
                  <p
                    className="drawer-item-child drawer-item-child-block"
                    onClick={() => {
                      toast.warning("Chỉ có quản lý mới truy cập !");
                    }}
                  >
                    Chứ vụ
                    <div className="adminpage-navbar-item-block">
                      <FontAwesomeIcon
                        className="card-icon"
                        icon={faTriangleExclamation}
                      />
                    </div>
                  </p>
                )}
              </div>
            </>
          )}

          <div className="drawer-signup-signin">
            {Object.keys(inforUser).length != 0 ? (
              <>
                <p
                  onClick={() => {
                    navigate("/user");
                    dispatch(hiddenDrawer());
                  }}
                >
                  {inforUser.firstName}
                </p>
                <p
                  onClick={() => {
                    dispatch(handleLogout());
                    dispatch(hiddenDrawer());
                    navigate("/");
                  }}
                >
                  Đăng xuất
                </p>
              </>
            ) : (
              <>
                <p
                  onClick={() => {
                    dispatch(toggleSignin());
                    dispatch(hiddenDrawer());
                  }}
                >
                  Đăng Nhập
                </p>
                <p
                  onClick={() => {
                    dispatch(toggleSignup());
                    dispatch(hiddenDrawer());
                  }}
                >
                  Đăng ký
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
