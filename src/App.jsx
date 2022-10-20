import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Main } from './features/Main'
import { NotFound } from './components/Layout/NotFound'
import User from './features/User'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="blog" />} />
      <Route path="/blog/*" element={<Main />} />
      <Route path="/user/*" element={<User />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
