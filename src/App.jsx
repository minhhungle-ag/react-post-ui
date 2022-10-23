import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './features/Admin'
import { Main } from './features/Main'

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Main />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  )
}

export default App
