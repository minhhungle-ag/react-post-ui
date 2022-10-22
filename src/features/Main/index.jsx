import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../../components/Layout/MainLayout'
import { Blogs } from '../Blog'
import { Blog } from '../Blog/pages/Blog'
import User from '../User'

export function Main(props) {
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
