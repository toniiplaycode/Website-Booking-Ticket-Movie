import Container from "react-bootstrap/Container";
import NavbarAdmin from "../../components/NavbarAdmin";
import AdminStatistical from "./adminPage/AdminStatistical";
import AdminFilms from "./adminPage/AdminFilms";
import AdminCinemas from "./adminPage/AdminCinemas";
import AdminCinemaRooms from "./adminPage/AdminCinemaRooms";
import { Route, Routes } from "react-router-dom";
import AdminTypeof from "./adminPage/AdminTypeof";
import AdminTickets from "./adminPage/AdminTickets";
import AdminTicketDetail from "./components/AdminTicketDetail";
import AdminUsers from "./adminPage/AdminUsers";
import AdminCalenderReleases from "./adminPage/AdminCalenderReleases";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTypeof } from "../../reducers/apiAdminTypeof";
import { useEffect } from "react";
import { fetchAllCinema } from "../../reducers/apiCinema";
import AdminPayments from "./adminPage/AdminPayments";
import { fetchAllPayment } from "../../reducers/apiAdminPayment";
import AdminRole from "./adminPage/AdminRole";
import NotFoundPage from "../../components/NotFoundPage";

const AdminPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTypeof());
    dispatch(fetchAllCinema());
    dispatch(fetchAllPayment());
  }, []);

  const inforUser = useSelector((state) => state.apiLoginLogout.inforUser);

  return (
    <Container>
      <NavbarAdmin />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<AdminStatistical />} />
        <Route path="/statistical" element={<AdminStatistical />} />
        <Route path="/adminFilms" element={<AdminFilms />} />
        <Route path="/adminTypeof" element={<AdminTypeof />} />
        <Route
          path="/adminCalenderReleases"
          element={<AdminCalenderReleases />}
        />
        <Route path="/AdminPayments" element={<AdminPayments />} />
        <Route path="/adminTickets" element={<AdminTickets />} />
        <Route path="/adminTicketDetail" element={<AdminTicketDetail />} />
        {inforUser && inforUser.roleId == "R1" && (
          <>
            <Route path="/adminCinemas" element={<AdminCinemas />} />
            <Route path="/adminCinemaRooms" element={<AdminCinemaRooms />} />
            <Route path="/adminUsers" element={<AdminUsers />} />
            <Route path="/adminRole" element={<AdminRole />} />
          </>
        )}
      </Routes>
    </Container>
  );
};

export default AdminPage;
