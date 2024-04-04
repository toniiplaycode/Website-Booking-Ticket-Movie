import Navbar from './components/Navbar';
import HomePage from './pages/home/HomePage.jsx';
import MoviePage from './pages/movies/MoviesPage.jsx';
import NewsPage from './pages/news/NewsPage.jsx';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/movies' element={<MoviePage/>}/>
          <Route path='/news' element={<NewsPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
