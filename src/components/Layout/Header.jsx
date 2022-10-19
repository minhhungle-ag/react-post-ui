import MenuIcon from '@mui/icons-material/Menu'
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica'
import { alpha, Stack } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { NavLink } from 'react-router-dom'

const pages = [
  { label: 'Blog', link: '/blog' },
  { label: 'About me', link: '/about' },
]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

export function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar disableGutters sx={{ py: { xs: 2, md: 2.5 } }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}
          >
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

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'flex',
                md: 'none',
              },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'flex', md: 'none' },
                mt: 2,
                '.MuiPaper-root': {
                  width: '100%',
                },

                '.active li': {
                  bgcolor: (theme) => alpha(theme.palette.primary.main, 0.6),
                },
              }}
            >
              {pages.map((page, idx) => (
                <NavLink
                  key={idx}
                  to={page.link}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography width="100%" textAlign="center">
                      {page.label}
                    </Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>

          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ display: { md: 'none' }, flexGrow: 1, mr: 2 }}
          >
            <SouthAmericaIcon sx={{ fontSize: 48 }} />

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

          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 2,
              '.active button': {
                bgcolor: (theme) => alpha(theme.palette.common.white, 0.1),
                backdropFilter: '10px',
              },
            }}
          >
            {pages.map((page, idx) => (
              <NavLink
                to={page.link}
                key={idx}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    textTransform: 'none',
                  }}
                >
                  {page.label}
                </Button>
              </NavLink>
            ))}
          </Stack>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://static.wixstatic.com/media/2e2a49_d456d06d41b346d3b36f426cb4142859~mv2.jpg/v1/fill/w_581,h_596,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2e2a49_d456d06d41b346d3b36f426cb4142859~mv2.jpg"
                />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, idx) => (
                <NavLink key={idx}>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
