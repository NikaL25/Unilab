import HomePage from './Pages/HomePage/HomePage';
import FilterPage from './Pages/FilterPage/FilterPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailPage from './Pages/DetailPage/DetailPage';
import LoginPage from './Pages/AuthPages/LoginPage';
import RegisterPage from './Pages/AuthPages/RegisterPage';
import ResetEmail from './Pages/AuthPages/ResetEmail';
import Reset from './Pages/AuthPages/Reset';
import MapPage from './Pages/MapPage/MapPage';
function App() {
  return (
   

   
    <Router> {/* Обернем все приложение в Router */}
      <Routes> {/* Используем Routes для определения маршрутов */}
        <Route path="/" element={<HomePage />} /> {/* Главная страница */}
        <Route path="/filter" element={<FilterPage />} /> {/* Страница FilterPage */}
        <Route path="/details/:id" element={<DetailPage />} />
        <Route path="/details" element={<DetailPage />} /> {/* Страница FilterPage */}
        <Route path="/login" element={<LoginPage />} /> {/* Страница FilterPage */}
        <Route path="/register" element={<RegisterPage />} /> {/* Страница FilterPage */}
        <Route path="/resetEmail" element={<ResetEmail />} /> {/* Страница FilterPage */}
        <Route path="/reset" element={<Reset />} /> {/* Страница FilterPage */}
        <Route path="/map" element={<MapPage />} /> {/* Страница FilterPage */}
      </Routes>
    </Router>
  
  );
}

export default App;
