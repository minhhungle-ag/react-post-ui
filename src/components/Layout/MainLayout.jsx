import { Box } from '@mui/material'
import React from 'react'
import { Header } from './Header'

export function MainLayout({ children }) {
  return (
    <Box height="100vh">
      <Header />
      <Box>{children}</Box>
    </Box>
  )
}
