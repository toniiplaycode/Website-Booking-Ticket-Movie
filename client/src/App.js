import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/home/HomePage.jsx';
import MoviePage from './pages/movies/MoviesPage.jsx';
import NewsPage from './pages/news/NewsPage.jsx';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import MobileNav from './components/MobileNav.jsx';
import BackDropMobileNav from './components/BackDropMobileNav.jsx';

import { useDispatch, useSelector } from 'react-redux';
import Footer from './components/Footer.jsx';

function App() {
  const showDrawer = useSelector((state) => state.mobileNav.showDrawer);

  const blurBackdrop = showDrawer ? "blurBackdrop" : "";

  return (
    <div className="App">
        <MobileNav />
        {showDrawer && <BackDropMobileNav />}

        <div className={blurBackdrop}>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/movies' element={<MoviePage/>}/>
            <Route path='/news' element={<NewsPage/>}/>
          </Routes>
          <Footer />
        </div>
    </div>
  );
}

export default App;
