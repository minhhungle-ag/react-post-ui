import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../../components/Layout/MainLayout'
import { Auth } from '../Auth'
import { Blogs } from '../Blog'
import User from '../User'

export function Main(props) {
  return (
    <MainLayout>
      <Routes>
        <Route index element={<Navigate to="blog" />} />
        <Route path="blog/*" element={<Blogs />} />
        <Route path="user/*" element={<User />} />
        <Route path="auth/*" element={<Auth />} />
      </Routes>
    </MainLayout>
  )
}
