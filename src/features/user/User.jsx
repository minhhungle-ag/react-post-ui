import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MyPosts } from './pages/MyPosts'
import { Profile } from './pages/Profile'

export default function User(props) {
  return (
    <Routes>
      <Route index element={<Navigate to="profile" />} />
      <Route path="profile" element={<Profile />} />
      <Route path="blog" element={<MyPosts />} />
    </Routes>
  )
}
