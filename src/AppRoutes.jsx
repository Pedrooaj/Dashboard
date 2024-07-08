import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyles/GlobalStyle'
import HomePage from './Pages/Home'
import LoginPage from './Pages/Login'
import NotFound from './Pages/NotFoud'
import { AuthProvider, AuthContext } from './Contexts/AuthContext'
import { useContext, useEffect, useState } from 'react'
import Loading from './Pages/Loading'









function AppRoutes() {


  function Private({ children }) {
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();
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
      </AuthProvider>
    </Router>

  )
}

export default AppRoutes
