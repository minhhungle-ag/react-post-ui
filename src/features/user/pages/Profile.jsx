/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container, Typography } from '@mui/material'
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
      <Box height={300}>
        <Box
          width="100%"
          height="100%"
          component="img"
          alt="banner"
          src="https://picsum.photos/1368/300?blur=2"
          sx={{ objectFit: 'cover' }}
          onError={(e) => (e.target.src = 'https://picsum.photos/id/2/1368/300?blur=2')}
        />
      </Box>

      <Box sx={{ my: { xs: 4, md: 8 } }}>
        <Container>
          <Typography
            variant="h3"
            textAlign="center"
            fontWeight={500}
            sx={{ mb: { xs: 2, md: 6 } }}
          >
            My profile
          </Typography>

          <Info user={user} onBtnClick={() => navigate('/user/blog')} />
        </Container>
      </Box>
    </Box>
  )
}
