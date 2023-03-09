import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/Layout/MainLayout'
import NotFound from './components/Layout/NotFound'
import { About } from './features/About/About'
import Auth from './features/auth/Auth'
import { Contact } from './features/Contact/Contact'
import Home from './features/home/Home'
import { MyPosts } from './features/user/pages/MyPosts'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home/*" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="post-management" element={<MyPosts />} />
        <Route path="auth/*" element={<Auth />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  )
}

export default App
