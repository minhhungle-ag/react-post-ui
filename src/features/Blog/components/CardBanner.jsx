import React from 'react'

import { Box, Stack, Typography } from '@mui/material'

function CardBanner(props) {
  return (
    <Box sx={{ p: 5, bgcolor: 'primary.main', maxWidth: 900, margin: '0 auto' }}>
      <Typography variant="h4" fontWeight={400} color="white">
        Featured Post
      </Typography>

      <Stack direction="row" flexWrap="wrap" sx={{ mx: -2 }}>
        <Box
          sx={{
            width: { xs: '100%', md: 1 / 2 },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Box>
              <Box
                sx={{ verticalAlign: 'middle' }}
                component="img"
                width="100%"
                src="https://static.wixstatic.com/media/2e2a49_e517229392d74f7498b1f7be7a78efee~mv2.jpg/v1/fill/w_424,h_318,fp_0.50_0.50,q_90,enc_auto/2e2a49_e517229392d74f7498b1f7be7a78efee~mv2.jpg"
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: '100%', md: 1 / 2 },
          }}
        >
          <Stack spacing={2} sx={{ p: 2, color: 'white' }}>
            <Typography variant="body2">Dec 15, 2021</Typography>
            <Typography variant="h5">Top Hikes In Australia</Typography>
            <Typography variant="body1" textAlign="justify">
              Create a blog post subtitle that summarizes your post in a few short, punchy sentences
              and entices your audience to continue reading....
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default CardBanner
