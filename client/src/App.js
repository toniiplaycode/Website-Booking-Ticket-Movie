import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home/HomePage.jsx";
import MoviePage from "./pages/movies/MoviesPage.jsx";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import MobileNav from "./components/MobileNav.jsx";
import BackDropMobileNav from "./components/BackDropMobileNav.jsx";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer.jsx";
import LoginModal from "./components/LoginModal.jsx";
import SignupModal from "./components/SignupModal.jsx";
import MoviesDetailPage from "./pages/moviesDetail/MoviesDetailPage.jsx";
import TrailerModal from "./components/TrailerModal.jsx";
import PurchasePage from "./pages/purchase/PurchasePage.jsx";
import UserPage from "./pages/user/UserPage.jsx";
import AdminPage from "./pages/admin/AdminPage.jsx";
import { toggleTrailer } from "./reducers/modalTrailer.js";
import { toggleSignin, toggleSignup } from "./reducers/modalSigninSignup.js";
import NotFoundPage from "./components/NotFoundPage.jsx";
import { fetchInforUser } from "./reducers/apiLoginLogout.js";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { fetchListTicketUser } from "./reducers/apiUserTicket.js";

function App() {
  const dispatch = useDispatch();
  const showDrawer = useSelector((state) => state.mobileNav.showDrawer);
  const showSignin = useSelector((state) => state.modalSigninSignup.showSignin);
  const showSignup = useSelector((state) => state.modalSigninSignup.showSignup);
  const showTrailer = useSelector((state) => state.modalTrailer.showTrailer);

  let blurBackdrop = showDrawer ? "blurBackdrop" : "";

  if (showSignin || showSignup || showTrailer) {
    blurBackdrop = "blurBackdrop";
  }

  // check tài khoản admin
  const idRoleUser = useSelector((state) => state.apiLoginLogout.idRoleUser);
  const token = useSelector((state) => state.apiLoginLogout.token);

  useEffect(() => {
    if (token && idRoleUser) {
      dispatch(fetchInforUser(idRoleUser.id));
    }
  }, [idRoleUser]);

  const inforUser = useSelector((state) => state.apiLoginLogout.inforUser);

  // toast thông báo đăng nhập, đăng ký
  const statusPostLogin = useSelector(
    (state) => state.apiLoginLogout.statusPostLogin
  );
  const statusLogout = useSelector(
    (state) => state.apiLoginLogout.statusLogout
  );
  const statusPostSignUp = useSelector(
    (state) => state.apiSignup.statusPostSignUp
  );
  const statusUpdateUser = useSelector(
    (state) => state.apiUpdateUser.statusUpdateUser
  );
  const statusBookUserTicket = useSelector(
    (state) => state.apiUserTicket.statusBookUserTicket
  );


  useEffect(() => {
    if (statusPostLogin == "login failed") toast.error("Đăng nhập thất bại !");
    if (statusPostLogin == "succeeded") {
      dispatch(fetchListTicketUser(idRoleUser.id));
      toast.success("Đăng nhập thành công !")
    };
  }, [statusPostLogin]);

  useEffect(() => {
    if (statusPostSignUp == "signup failed") toast.error("Đăng ký thất bại !");
    if (statusPostSignUp == "succeeded") {
      toast.success("Đăng ký thành công !");
      dispatch(toggleSignin());
    }
  }, [statusPostSignUp]);

  useEffect(() => {
    if (statusLogout == "logout") toast.success("Đăng xuất tài khoản !");
  }, [statusLogout]);

  useEffect(() => {
    if (statusBookUserTicket == "succeeded")
      toast.success("Đặt vé thành công !");
  }, [statusBookUserTicket]);

  // fetch lại thông tin user khi update thông tin bên trang user
  useEffect(() => {
    dispatch(fetchInforUser(inforUser.id));
  }, [statusUpdateUser]);
  
  return (
    <div className="App">
      <MobileNav />
      {showDrawer && <BackDropMobileNav />}

      {showSignin && <LoginModal />}
      {showSignup && <SignupModal />}

      {showTrailer && <TrailerModal />}

      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div
        className={blurBackdrop}
        onClick={() => {
          showTrailer && dispatch(toggleTrailer());
          showSignin && dispatch(toggleSignin());
          showSignup && dispatch(toggleSignup());
        }}
      >
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/moviesDetail" element={<MoviesDetailPage />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/user" element={<UserPage />} />
          {(inforUser.roleId == "R1" || inforUser.roleId == "R2") && (
            <>
              <Route path="/admin/*" element={<AdminPage />} />{" "}
              {/* dấu * là lồng nháu */}
            </>
          )}
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
