import { Box, Stack } from '@mui/material'
import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export function MainLayout({ children }) {
  return (
    <Stack width="100%" minHeight="100vh">
      <Header />
      <Box flexGrow={1}>{children}</Box>
      <Footer />
    </Stack>
  )
}
