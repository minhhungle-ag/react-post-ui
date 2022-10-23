import React from 'react'

import { Box, Divider, Stack, Typography } from '@mui/material'
import { PostInfo } from '../../../components/Common/PostInfo'

function CardBanner({ post }) {
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
                sx={{ verticalAlign: 'middle', objectFit: 'cover', maxHeight: 300 }}
                component="img"
                width="100%"
                height="100%"
                src={post?.imageUrl}
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
            <PostInfo author={post?.author} avatar={post?.avatar} createdAt={post?.createdAt} />
            <Divider color="white" />
            <Typography variant="h5">{post?.title}</Typography>
            <Typography variant="body1" textAlign="justify" flexGrow={1}>
              {post?.short_description}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default CardBanner
