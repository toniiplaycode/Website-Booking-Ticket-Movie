import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavbarAdmin = () => {
  const location = useLocation();

  const isStatistical = () => {
    return window.location.pathname.endsWith("/admin");
  };

  useEffect(() => {
    // Gọi hàm isStatistical khi location (URL) thay đổi
    isStatistical();
  }, [location]);

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
        <NavLink to="/admin/adminCinemas" className="adminpage-navbar-item">
          Rạp
        </NavLink>
        <NavLink to="/admin/adminCinemaRooms" className="adminpage-navbar-item">
          Phòng chiếu
        </NavLink>
        <NavLink to="/admin/adminTickets" className="adminpage-navbar-item">
          Vé
        </NavLink>
        <NavLink to="/admin/adminUsers" className="adminpage-navbar-item">
          Khách hàng
        </NavLink>
      </div>
    </div>
  );
};

export default NavbarAdmin;
