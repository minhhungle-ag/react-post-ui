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
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useUser } from '../../hooks/user'
import MainSearch from '../FormField/MainSearch'

const settings = [
  { label: 'Profile', link: 'profile' },
  { label: 'Logout', value: 'logout' },
]

const authSettings = [
  { label: 'Login', link: 'login' },
  { label: 'SignUp', link: 'signUp' },
]

export function Header({ postList, onSearchChange, onChange }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('userId')

  const { user } = useUser(userId)

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

    if (setting.value === 'logout') {
      localStorage.setItem('token', '')
      navigate(`/`)
    }

    handleCloseUserMenu()
  }
  function handleAuthSettingClick(setting) {
    if (setting.link) {
      navigate(`/auth/${setting.link}`)
    }

    handleCloseUserMenu()
  }

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
                  color: 'white',
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

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: token ? 0 : 1, color: 'white' }}>
                {token ? (
                  <Avatar alt="Remy Sharp" src={user?.avatar} />
                ) : (
                  <AccountCircleIcon fontSize="large" />
                )}
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
              {token &&
                settings.map((setting, idx) => (
                  <MenuItem key={idx} onClick={() => handleSettingClick(setting)}>
                    <Typography textAlign="center">{setting.label}</Typography>
                  </MenuItem>
                ))}

              {!token &&
                authSettings.map((setting, idx) => (
                  <MenuItem key={idx} onClick={() => handleAuthSettingClick(setting)}>
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
