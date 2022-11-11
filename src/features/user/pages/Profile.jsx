/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Loading } from '../../../components/Common/Loading'
import { useUser } from '../../../hooks/user'
import { Info } from '../components/info'

export function Profile() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('userId')

  const { user, isLoading } = useUser(userId)

  if (!token) {
    navigate('/auth/login')
    return null
  }

  return isLoading ? (
    <Loading />
  ) : (
    <Box>
      <Stack position="relative" height={300} justifyContent="center" alignItems="center">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          width="100%"
          height="100%"
          component="img"
          alt="banner"
          src="https://picsum.photos/id/2/1368/300?blur=5"
          sx={{ objectFit: 'cover' }}
        />

        <Typography
          variant="h3"
          textAlign="center"
          fontWeight={500}
          position="relative"
          zIndex={2}
          color="white"
        >
          My profile
        </Typography>
      </Stack>

      <Box sx={{ my: { xs: 4, md: 8 } }}>
        <Container>
          <Info user={user} onBtnClick={() => navigate('/user/blog')} />
        </Container>
      </Box>
    </Box>
  )
}
