import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Loading } from '../../../components/Common/Loading'
import { useUser } from '../../../hooks/user'

function Profile(props) {
  const { user, isLoading } = useUser('2a416250-038f-4123-bf5d-057ba0aac479')

  return isLoading ? (
    <Loading />
  ) : (
    <Box>
      <Container>
        <Stack direction="row" flexWrap="wrap" sx={{ py: 8, mx: -3 }}>
          <Box sx={{ width: { xs: '100%', md: 1 / 2 } }}>
            <Box sx={{ p: 3 }}>
              <Box sx={{ p: 1 }} boxShadow={3}>
                <Box component="img" alt="user" src={user?.avatar} sx={{ width: '100%' }} />
              </Box>
            </Box>
          </Box>

          <Box sx={{ width: { xs: '100%', md: 1 / 2 } }}>
            <Stack spacing={2} sx={{ p: 3 }}>
              <Typography variant="h6" textTransform="uppercase">
                {user?.role}
              </Typography>

              <Stack direction="row" alignItems="center">
                <Typography variant="body" color="grey" marginRight={3} minWidth={100}>
                  Name:
                </Typography>
                <Typography variant="body">{user?.fullname}</Typography>
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
      </Container>
    </Box>
  )
}

export default Profile
