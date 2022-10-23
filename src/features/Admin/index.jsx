import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { AdminLayout } from '../../components/Layout/AdminLayout'
import Users from '../users/Users'

export default function Admin(props) {
  return (
    <AdminLayout>
      <Routes>
        <Route index element={<Navigate to="users" />} />
        <Route path="users" element={<Users />} />
      </Routes>
      <Outlet />
    </AdminLayout>
  )
}
