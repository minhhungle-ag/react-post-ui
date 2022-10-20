import SouthAmericaIcon from '@mui/icons-material/SouthAmerica'
import { Stack } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const settings = [
  { label: 'Profile', link: 'profile' },
  { label: 'Login', link: '' },
  { label: 'Logout', link: '' },
]

export function Header() {
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const navigate = useNavigate()

  function handleOpenUserMenu(event) {
    setAnchorElUser(event.currentTarget)
  }

  function handleCloseUserMenu() {
    setAnchorElUser(null)
  }

  function handleSettingClick(setting) {
    if (setting.link) {
      navigate(`/user/${setting.link}`)
    }

    handleCloseUserMenu()
  }

  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar disableGutters sx={{ py: { xs: 2, md: 2.5 } }}>
          <Link to="/blog">
            <Stack direction="row" alignItems="center" spacing={2}>
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
                <MenuItem onClick={() => handleSettingClick(setting)}>
                  <Typography textAlign="center">{setting.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
