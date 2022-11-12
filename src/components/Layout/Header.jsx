import MenuIcon from '@mui/icons-material/Menu'
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica'
import { Button, Stack } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { menuList } from '../../constants/common'
import MainSearch from '../FormField/MainSearch'

export function Header({ onToggleDrawer, onSearchChange, onChange, postList }) {
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar disableGutters sx={{ py: { xs: 1, sm: 2, md: 3 } }}>
          <Link to="/home">
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <SouthAmericaIcon sx={{ fontSize: 58 }} />

              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  On The Trail
                </Typography>

                <Typography variant="body1">My blog travel</Typography>
              </Box>
            </Stack>
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          <Box
            position="relative"
            width={300}
            height={56}
            sx={{
              display: {
                xs: 'none',
                sm: 'block',
              },
            }}
          >
            <Box
              position="absolute"
              zIndex={1}
              sx={{
                '& *': {
                  color: 'white !important',
                },
              }}
              width={300}
            >
              <MainSearch
                postList={postList || []}
                onSearchChange={(value) => onSearchChange?.(value)}
                onChange={(values) => onChange?.(values)}
              />
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box direction="row" alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
            {menuList.map((item, idx) => (
              <NavLink to={item.link} key={idx}>
                <Button color="inherit">{item.label}</Button>
              </NavLink>
            ))}
          </Box>

          <IconButton
            size="large"
            sx={{ display: { md: 'none' } }}
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => onToggleDrawer?.()}
          >
            <MenuIcon size="large" />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
