import React from 'react'

import { Route, Routes } from 'react-router-dom'
import { HomeDetail } from './pages/HomeDetail'
import { HomePage } from './pages/HomePage'
import { Search } from './pages/Search'

export default function Home(props) {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/post-detail/:postId" element={<HomeDetail />} />
      <Route path="/search/:searchKey" element={<Search />} />
    </Routes>
  )
}
