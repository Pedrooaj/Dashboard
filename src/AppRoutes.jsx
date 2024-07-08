import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyles/GlobalStyle'
import HomePage from './Pages/Home'
import LoginPage from './Pages/Login'
import NotFound from './Pages/NotFoud'
import { AuthProvider, AuthContext } from './Contexts/AuthContext'
import { useContext } from 'react'
import Loading from './Pages/Loading'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function AppRoutes() {
  function Private({ children }) {
    const navigate = useNavigate();
    const { user, loading } = useContext(AuthContext);
    if (loading) {
      return <Loading />
    }
    if (!user) {
      return navigate('/login')
    }
    return children
  }


  return (
    <Router>
      <AuthProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Private><HomePage /></Private>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </AuthProvider>
    </Router>

  )
}

export default AppRoutes
