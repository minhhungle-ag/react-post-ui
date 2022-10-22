import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { DEFAULT_THUMBNAIL } from '../../constants/common'
import { truncateText } from '../../utils/common'
import { PostInfo } from './PostInfo'

function Card({
  title,
  short_description,
  imageUrl,
  author,
  createdAt,
  avatar,
  action,
  selectedCard,
}) {
  return (
    <Box
      boxShadow={3}
      sx={{
        border: '2px solid',
        borderRadius: '4px',
        borderColor: selectedCard ? 'primary.main' : 'transparent',

        cursor: 'pointer',

        '&:hover': {
          boxShadow: (theme) => theme.shadows[10],
        },
      }}
    >
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
        <Typography variant="body1" fontWeight={900}>
          {truncateText(title, 40)}
        </Typography>
        <Typography variant="body2" sx={{ flexGrow: 1 }}>
          {truncateText(short_description, 80)}
        </Typography>
      </Stack>

      {action && <Box sx={{ p: 2 }}>{action}</Box>}
    </Box>
  )
}

export default Card
