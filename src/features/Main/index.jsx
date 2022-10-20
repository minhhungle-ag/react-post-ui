import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../../components/Layout/MainLayout'
import { Blog } from './pages/Blog'
import { BlogDetail } from './pages/blog-detail'

export function Main(props) {
  return (
    <MainLayout>
      <Routes>
        <Route index element={<Blog />} />
        <Route path="/:postId" element={<BlogDetail />} />
      </Routes>
    </MainLayout>
  )
}
