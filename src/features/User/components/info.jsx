import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

export function Info({ user, onBtnClick }) {
  return (
    <Stack direction="row" flexWrap="wrap" sx={{ mx: -3 }}>
      <Box sx={{ width: { xs: '100%', md: 1 / 2 } }}>
        <Box sx={{ p: 3 }}>
          <Box sx={{ p: 1 }} boxShadow={3}>
            <Box component="img" alt="user" src={user?.avatar} sx={{ width: '100%' }} />
          </Box>
        </Box>
      </Box>

      <Box sx={{ width: { xs: '100%', md: 1 / 2 } }}>
        <Stack spacing={3} sx={{ p: 3 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h6" textTransform="uppercase">
              {user?.fullname}
            </Typography>
            <Button variant="contained" color="primary" onClick={() => onBtnClick?.()}>
              Add new post
            </Button>
          </Stack>

          <Stack direction="row" alignItems="center">
            <Typography variant="body" color="grey" marginRight={3} minWidth={100}>
              role:
            </Typography>
            <Typography variant="body">{user?.role}</Typography>
          </Stack>

          <Stack direction="row" alignItems="center">
            <Typography variant="body" color="grey" marginRight={3} minWidth={100}>
              Email:
            </Typography>
            <Typography variant="body">{user?.email}</Typography>
          </Stack>

          <Stack direction="row" alignItems="center">
            <Typography variant="body" color="grey" marginRight={3} minWidth={100}>
              Gender:
            </Typography>
            <Typography variant="body">{user?.gender}</Typography>
          </Stack>

          <Stack direction="row" alignItems="center">
            <Typography variant="body" color="grey" marginRight={3} minWidth={100}>
              Age:
            </Typography>
            <Typography variant="body">{user?.age}</Typography>
          </Stack>

          <Stack direction="row" alignItems="flex-start">
            <Typography variant="body" color="grey" marginRight={3} minWidth={100}>
              Description:
            </Typography>
            <Typography variant="body" textAlign="justify">
              {user?.description}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  )
}
