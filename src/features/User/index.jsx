import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../../components/Layout/MainLayout'
import AddEditPost from './pages/AddEditPost'
import Profile from './pages/Profile'

function User(props) {
  return (
    <MainLayout>
      <Routes>
        <Route index element={<Navigate to="profile" />} />
        <Route path="profile" element={<Profile />} />
        <Route path="add-new-post" element={<AddEditPost />} />
        <Route path="edit-post/:postId" element={<AddEditPost />} />
      </Routes>
    </MainLayout>
  )
}

export default User
