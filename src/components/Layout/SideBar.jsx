import { Box, Drawer } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { menuList } from '../../constants/common'

export function Sidebar({ open, onClose }) {
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
      </Box>
    </Drawer>
  )
}
