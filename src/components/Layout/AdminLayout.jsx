import { Box, LinearProgress } from '@mui/material'

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/user'
import { AdminHeader } from './AdminHeader'

import { Sidebar } from './SideBar'

export function AdminLayout({ children }) {
  const userId = localStorage.getItem('userId')

  const { isLoading, user } = useUser(userId)
  const navigate = useNavigate()

  if (isLoading) {
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    )
  }

  if (!user) {
    navigate('/login')
    return null
  }

  if (user?.role !== 'admin') {
    navigate('/')
    return null
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        gridTemplateColumns: '240px 1fr',
        gridTemplateAreas: `"header header" "sidebar main"`,

        height: '100vh',
        maxHeight: '100vh',
        width: '100%',
      }}
    >
      <Box gridArea="header">
        <AdminHeader />
      </Box>

      <Box
        sx={{
          gridArea: 'sidebar',
          borderRight: '1.5px solid',
          borderColor: 'grey.300',
        }}
      >
        <Sidebar />
      </Box>

      <Box
        sx={{
          gridArea: 'main',
          padding: 2,
          backgroundColor: 'paper',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
