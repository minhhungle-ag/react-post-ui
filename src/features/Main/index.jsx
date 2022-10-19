import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../../components/Layout/MainLayout'
import { NotFound } from '../../components/Layout/NotFound'
import { About } from './pages/About'
import { Blog } from './pages/Blog'
import { BlogDetail } from './pages/blog-detail'

export function Main(props) {
  return (
    <MainLayout>
      <Routes>
        <Route index element={<Navigate to="blog" />} />
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="blog-detail/:postId" element={<BlogDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  )
}
