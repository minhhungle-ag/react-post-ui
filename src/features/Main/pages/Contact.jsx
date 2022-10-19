import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'

export function Contact(props) {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h3" textAlign="center" fontWeight={500} sx={{ mb: 6 }}>
          Contact
        </Typography>

        <Stack direction="row" flexWrap="wrap" sx={{ mx: -2 }}>
          <Box
            sx={{
              width: {
                xs: '100%',
                md: 1 / 2,
              },
            }}
          >
            <Box sx={{ p: 2 }}>
              <Box sx={{ p: 2 }} boxShadow={3}>
                <Box
                  component="img"
                  width="100%"
                  src="https://static.wixstatic.com/media/375882_bdc2f1ccb66744cbbe04d17e05500eed~mv2.jpeg/v1/fill/w_581,h_431,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/375882_bdc2f1ccb66744cbbe04d17e05500eed~mv2.jpeg"
                />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: {
                xs: '100%',
                md: 1 / 2,
              },
            }}
          >
            <Stack sx={{ p: 2 }} spacing={2}>
              <Typography variant="h5">
                I am passionate about sharing my knowledge, travel experience and the useful tips
                I’ve learned on the trail.
              </Typography>

              <Typography variant="body1" textAlign="justify">
                I am passionate about sharing my knowledge, travel experience and the useful tips
                I’ve learned on the trail. I'm a paragraph. Click here to add your own text and edit
                me. It’s easy. Just click “Edit Text” or double click me to add your own content and
                make changes to the font. I’m a great place for you to tell a story and let your
                users know a little more about you.
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
