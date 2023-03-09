import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Info } from '../../components/Common/info'
import { USER } from '../../constants/common'

export function About() {
  return (
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
          About
        </Typography>
      </Stack>

      <Container>
        <Box sx={{ my: { xs: 4, md: 8 } }}>
          <Typography
            variant="h4"
            marginBottom={2}
            fontWeight={700}
            textAlign="center"
            textTransform="uppercase"
          >
            About
          </Typography>

          <Info user={USER} />
        </Box>
      </Container>
    </Box>
  )
}
