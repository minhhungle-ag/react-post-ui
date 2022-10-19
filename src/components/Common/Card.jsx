import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { DEFAULT_THUMBNAIL } from '../../constants/common'
import { PostInfo } from './PostInfo'

function Card({ title, short_description, imageUrl, author, createdAt, avatar }) {
  return (
    <Box boxShadow={3}>
      <Box position="relative" height={0} paddingTop="56.25%">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          component="img"
          width="100%"
          height="100%"
          src={imageUrl || DEFAULT_THUMBNAIL}
          sx={{ objectFit: 'cover' }}
          onError={(event) => (event.target.src = DEFAULT_THUMBNAIL)}
        />
      </Box>

      <Stack spacing={1} sx={{ p: 2 }}>
        <PostInfo author={author} avatar={avatar} createdAt={createdAt} />
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{short_description}</Typography>
      </Stack>
    </Box>
  )
}

export default Card
