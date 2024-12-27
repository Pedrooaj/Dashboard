import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles/GlobalStyle';
import LoginPage from './Pages/Login';
import NotFound from './Pages/NotFoud';
import { AuthProvider, AuthContext } from './Contexts/AuthContext';
import { useContext, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Perfil from './Pages/Home/Perfil';
import Home from './Pages/Home/HomeIndex';
import GlobalRoute from './Pages/RotaGlobal';
import HomePage from "./Pages/Home';



function AppRoutes() {

  function Private({ children }) {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    if (!user) {
      navigate('/login')
    }
    return children

  }

  return (
    <Router>
      <AuthProvider>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<GlobalRoute />}>
            <Route path='/' element={
              <Private>
                  <HomePage />
              </Private>
            }>
              <Route index element={<Home />} />
              <Route path='Perfil' element={<Perfil />} />
            </Route>
            <Route path='/login' element={<LoginPage />} />
            <Route path='*' element={<NotFound />} />

          </Route>
        </Routes>
        <ToastContainer />
      </AuthProvider>
    </Router>

  )
}

export default AppRoutes
