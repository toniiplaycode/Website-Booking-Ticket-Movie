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
  const showDrawer = useSelector((state) => state.mobileNavSlide.showDrawer);
  const showSignin = useSelector((state) => state.modalSigninSignup.showSignin);
  const showSignup = useSelector((state) => state.modalSigninSignup.showSignup);
  const showTrailer = useSelector((state) => state.modalTrailer.showTrailer);

  let blurBackdrop = showDrawer ? "blurBackdrop" : "";

  if (showSignin || showSignup || showTrailer) {
    blurBackdrop = "blurBackdrop";
  }

  // check tài khoản admin
  const roleUserJWT = useSelector((state) => state.apiLoginLogout.roleUserJWT);
  const token = useSelector((state) => state.apiLoginLogout.token);

  useEffect(() => {
    if (token && roleUserJWT) {
      dispatch(fetchInforUser(roleUserJWT.id));
    }
  }, [roleUserJWT]);

  const inforUser = useSelector((state) => state.apiLoginLogout.inforUser);

  const statusPostLogin = useSelector(
    (state) => state.apiLoginLogout.statusPostLogin
  );
  const statusUpdateUser = useSelector(
    (state) => state.apiUpdateUser.statusUpdateUser
  );

  useEffect(() => {
    if (statusPostLogin == "succeeded") {
      dispatch(fetchListTicketUser(roleUserJWT.id));
    };
  }, [statusPostLogin]);

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
