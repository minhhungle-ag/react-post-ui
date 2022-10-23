import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './features/admin'
import { Auth } from './features/auth'
import { Main } from './features/main'

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Main />} />
      <Route path="admin/*" element={<Admin />} />
      <Route path="auth/*" element={<Auth />} />
    </Routes>
  )
}

export default App
