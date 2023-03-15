import React from 'react'
// css for the app
import { useTheme, ThemeProvider } from '@mui/material'
import './App.css'
// Router Import
import { Routes, Route, Navigate } from 'react-router-dom'

//pages User
import LoginUser from './pagesUser/Login'
import SignUpUser from './pagesUser/SignUp'
import PlaceDesUsers from './pagesUser/PlaceDesUsers'
import PlaceUser from './pagesUser/PlaceUser'
import LandingPage from './Landing/LandingPage'
import ForgetPassword from './pagesUser/ForgetPassword'

function App() {
  const theme = useTheme()
  const jwt = localStorage.getItem('accessToken')
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          {/* Landing */}
          <Route path="/" element={<LandingPage />} />
          {/* User */}
          <Route
            path="/login"
            element={!jwt || jwt === '' ? <LoginUser /> : <Navigate to="/" />}
          />
          <Route
            path="/forgetPassword"
            element={
              !jwt || jwt === '' ? <ForgetPassword /> : <Navigate to="/" />
            }
          />
          <Route
            path="/signup"
            element={!jwt || jwt === '' ? <SignUpUser /> : <Navigate to="/" />}
          />
          <Route path="/places/:categ" element={<PlaceDesUsers />} />
          <Route path="/place/:placeId" element={<PlaceUser />} />
          {/* protection for none existing routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
