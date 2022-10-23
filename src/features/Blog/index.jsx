import React from 'react'

import { Route, Routes } from 'react-router-dom'
import { Blog } from './pages/Blog'
import { BlogDetail } from './pages/blog-detail'

export default function Blogs(props) {
  return (
    <Routes>
      <Route index element={<Blog />} />
      <Route path=":postId" element={<BlogDetail />} />
    </Routes>
  )
}
