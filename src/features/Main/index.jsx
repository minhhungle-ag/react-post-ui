import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../../components/Layout/MainLayout'
import Blogs from '../blog'
import User from '../user/User'

export default function Main(props) {
  return (
    <MainLayout>
      <Routes>
        <Route index element={<Navigate to="blog" />} />
        <Route path="blog/*" element={<Blogs />} />
        <Route path="user/*" element={<User />} />
      </Routes>
    </MainLayout>
  )
}
