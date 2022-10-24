import React from 'react'

import { Route, Routes } from 'react-router-dom'
import { HomeDetail } from './pages/HomeDetail'
import { HomePage } from './pages/HomePage'

export default function Home(props) {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path=":postId" element={<HomeDetail />} />
    </Routes>
  )
}
