import { Box, Drawer } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { menuList } from '../../constants/common'

export function Sidebar({ open, onClose }) {
  const token = localStorage.getItem('token')

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        sx={{
          p: 2,
          width: { xs: 240, sm: 350 },

          '.active > div': {
            color: 'primary.main',
            backgroundColor: 'grey.100',
          },
        }}
      >
        {menuList.map((menu, idx) => (
          <NavLink
            key={idx}
            to={menu.link}
            className={({ isActive }) => (isActive ? 'active' : '')}
            style={{ textDecoration: 'none' }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',

                mb: 0.5,
                p: 1,
                borderRadius: '4px',

                color: 'grey.500',
                backgroundColor: 'white',

                '&:hover': {
                  backgroundColor: 'grey.50',
                },
              }}
              onClick={() => onClose?.()}
            >
              <Box>{menu.label}</Box>
            </Box>
          </NavLink>
        ))}

        {token ? (
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
            style={{ textDecoration: 'none' }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',

                mb: 0.5,
                p: 1,
                borderRadius: '4px',

                color: 'grey.500',
                backgroundColor: 'white',

                '&:hover': {
                  backgroundColor: 'grey.50',
                },
              }}
              onClick={() => {
                onClose?.()
                localStorage.setItem('token', '')
                localStorage.setItem('userId', '')
              }}
            >
              <Box>Logout</Box>
            </Box>
          </NavLink>
        ) : (
          <>
            <NavLink
              to="/auth/login"
              className={({ isActive }) => (isActive ? 'active' : '')}
              style={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',

                  mb: 0.5,
                  p: 1,
                  borderRadius: '4px',

                  color: 'grey.500',
                  backgroundColor: 'white',

                  '&:hover': {
                    backgroundColor: 'grey.50',
                  },
                }}
                onClick={() => onClose?.()}
              >
                <Box>Login</Box>
              </Box>
            </NavLink>

            <NavLink
              to={'/auth/signup'}
              className={({ isActive }) => (isActive ? 'active' : '')}
              style={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',

                  mb: 0.5,
                  p: 1,
                  borderRadius: '4px',

                  color: 'grey.500',
                  backgroundColor: 'white',

                  '&:hover': {
                    backgroundColor: 'grey.50',
                  },
                }}
              >
                <Box>Sign Up</Box>
              </Box>
            </NavLink>
          </>
        )}
      </Box>
    </Drawer>
  )
}
