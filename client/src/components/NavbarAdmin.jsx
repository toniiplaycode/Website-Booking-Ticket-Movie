import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const NavbarAdmin = () => {
  const location = useLocation();

  const isStatistical = () => {
    return window.location.pathname.endsWith("/admin");
  };

  useEffect(() => {
    // Gọi hàm isStatistical khi location (URL) thay đổi
    isStatistical();
  }, [location]);

  const inforUser = useSelector((state) => state.apiLoginLogout.inforUser);

  return (
    <div className="adminpage-navbar">
      <div className="adminpage-navbar-container">
        <NavLink
          to={isStatistical() ? "/admin" : "/admin/statistical"}
          className="adminpage-navbar-item"
        >
          Thống kê
        </NavLink>
        <NavLink to="/admin/adminFilms" className="adminpage-navbar-item">
          Phim
        </NavLink>
        <NavLink to="/admin/adminTypeof" className="adminpage-navbar-item">
          Thể loại phim
        </NavLink>
        <NavLink
          to="/admin/adminCalenderReleases"
          className="adminpage-navbar-item"
        >
          Suất chiếu phim
        </NavLink>
        <NavLink to="/admin/AdminPayments" className="adminpage-navbar-item">
          Thanh toán
        </NavLink>
        <NavLink to="/admin/adminTickets" className="adminpage-navbar-item">
          Vé
        </NavLink>
        {inforUser && inforUser.roleId == "R1" ? (
          <NavLink to="/admin/adminCinemas" className="adminpage-navbar-item">
            Rạp
          </NavLink>
        ) : (
          <div
            className="adminpage-navbar-item"
            onClick={() => {
              toast.warning("Chỉ có quản lý mới truy cập !");
            }}
          >
            Rạp &nbsp;
            <FontAwesomeIcon
              className="card-icon"
              icon={faTriangleExclamation}
            />
          </div>
        )}
        {inforUser && inforUser.roleId == "R1" ? (
          <NavLink
            to="/admin/adminCinemaRooms"
            className="adminpage-navbar-item"
          >
            Phòng chiếu
          </NavLink>
        ) : (
          <div
            className="adminpage-navbar-item"
            onClick={() => {
              toast.warning("Chỉ có quản lý mới truy cập !");
            }}
          >
            Phòng chiếu &nbsp;
            <FontAwesomeIcon
              className="card-icon"
              icon={faTriangleExclamation}
            />
          </div>
        )}
        {inforUser && inforUser.roleId == "R1" ? (
          <NavLink to="/admin/adminUsers" className="adminpage-navbar-item">
            Khách hàng
          </NavLink>
        ) : (
          <div
            className="adminpage-navbar-item"
            onClick={() => {
              toast.warning("Chỉ có quản lý mới truy cập !");
            }}
          >
            Khách hàng &nbsp;
            <FontAwesomeIcon
              className="card-icon"
              icon={faTriangleExclamation}
            />
          </div>
        )}
        {inforUser && inforUser.roleId == "R1" ? (
          <NavLink to="/admin/adminRole" className="adminpage-navbar-item">
            Chức vụ
          </NavLink>
        ) : (
          <div
            className="adminpage-navbar-item"
            onClick={() => {
              toast.warning("Chỉ có quản lý mới truy cập !");
            }}
          >
            Chức vụ &nbsp;
            <FontAwesomeIcon
              className="card-icon"
              icon={faTriangleExclamation}
            />
            <div className="adminpage-navbar-item-block"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarAdmin;
