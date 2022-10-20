import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../../components/Layout/MainLayout'
import Profile from './pages/Profile'

function User(props) {
  return (
    <MainLayout>
      <Routes>
        <Route index element={<Navigate to="profile" />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </MainLayout>
  )
}

export default User
