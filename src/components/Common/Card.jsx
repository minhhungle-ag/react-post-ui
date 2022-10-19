import { Avatar, Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

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
          src={imageUrl}
          sx={{ objectFit: 'cover' }}
          onError={(e) => (e.target.src = 'https://picsum.photos/1024/607')}
        />
      </Box>

      <Stack spacing={1} sx={{ p: 2 }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar src={avatar} alt={author} />

          <Box>
            <Typography variant="body1">{author}</Typography>
            <Typography variant="body2">{createdAt}</Typography>
          </Box>
        </Stack>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{short_description}</Typography>
      </Stack>
    </Box>
  )
}

export default Card
