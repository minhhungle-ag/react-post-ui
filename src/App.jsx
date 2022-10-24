import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/Layout/MainLayout'
import NotFound from './components/Layout/NotFound'
import Auth from './features/auth/Auth'
import Home from './features/home/Home'
import User from './features/user/User'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home/*" element={<Home />} />
        <Route path="user/*" element={<User />} />
        <Route path="auth/*" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  )
}

export default App
