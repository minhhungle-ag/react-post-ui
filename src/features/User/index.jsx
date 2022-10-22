import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile'

function User(props) {
  return (
    <Routes>
      <Route index element={<Navigate to="profile" />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  )
}

export default User
