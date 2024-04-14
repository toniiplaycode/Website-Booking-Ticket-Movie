import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/home/HomePage.jsx';
import MoviePage from './pages/movies/MoviesPage.jsx';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import MobileNav from './components/MobileNav.jsx';
import BackDropMobileNav from './components/BackDropMobileNav.jsx';

import { useDispatch, useSelector } from 'react-redux';
import Footer from './components/Footer.jsx';
import LoginModal from './components/LoginModal.jsx';
import SignupModal from './components/SignupModal.jsx';
import MoviesDetailPage from './pages/moviesDetail/MoviesDetailPage.jsx';
import TrailerModal from './components/TrailerModal.jsx';
import PurchasePage from './pages/purchase/PurchasePage.jsx';

function App() {
  const showDrawer = useSelector((state) => state.mobileNav.showDrawer);
  const showSignin = useSelector((state) => state.modalSigninSignup.showSignin);
  const showSignup = useSelector((state) => state.modalSigninSignup.showSignup);
  const showTrailer = useSelector((state) => state.modalTrailer.showTrailer);

  let blurBackdrop = showDrawer ? "blurBackdrop" : "";

  if(showSignin || showSignup || showTrailer) {
    blurBackdrop = "blurBackdrop";
  }


  return (
    <div className="App">
        <MobileNav />
        {showDrawer && <BackDropMobileNav />}

        {showSignin && <LoginModal />}
        {showSignup && <SignupModal />}

        {showTrailer && <TrailerModal />}
        
        <div className={blurBackdrop}>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/movies' element={<MoviePage/>}/>
            <Route path='/moviesDetail' element={<MoviesDetailPage/>}/>
            <Route path='/purchase' element={<PurchasePage/>}/>
          </Routes>
          <Footer />
        </div>

    </div>
  );
}

export default App;
