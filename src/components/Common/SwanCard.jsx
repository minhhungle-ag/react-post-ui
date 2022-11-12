import { Box, Divider, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { DEFAULT_THUMBNAIL } from '../../constants/common'
import { truncateText } from '../../utils/common'
import { PostInfo } from './PostInfo'

export function SwanCard({
  title,
  short_description,
  description,
  imageUrl,
  author,
  createdAt,
  avatar,
  action,

  showAllTitle,
  showAllDesc,
  showAllShortDesc,
}) {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      boxShadow={3}
      sx={{
        borderRadius: '4px',
        cursor: 'pointer',
        overflow: 'hidden',
        '&:hover': {
          boxShadow: (theme) => theme.shadows[10],
        },
      }}
    >
      <Box sx={{ width: { xs: '100%', md: 1 / 2 } }}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            minHeight: { xs: 200, sm: 300, md: 350 },

            backgroundImage: `url(${imageUrl || DEFAULT_THUMBNAIL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          onError={(event) => (event.target.src = DEFAULT_THUMBNAIL)}
        />
      </Box>

      <Stack spacing={2} sx={{ p: 2, width: { xs: '100%', md: 1 / 2 } }}>
        <PostInfo author={author} avatar={avatar} createdAt={createdAt} />

        <Divider />

        {title && (
          <Typography variant="body1" fontWeight={500}>
            {showAllTitle ? title : truncateText(title, 30)}
          </Typography>
        )}

        {short_description && (
          <Typography minHeight={60} variant="body1">
            {showAllShortDesc ? short_description : truncateText(short_description, 80)}
          </Typography>
        )}

        {description && (
          <Typography minHeight={60} variant="body2">
            {showAllDesc ? description : truncateText(description, 80)}
          </Typography>
        )}

        <Box sx={{ flexGrow: 1 }} />

        {action && (
          <>
            <Divider />
            {action}
          </>
        )}
      </Stack>
    </Stack>
  )
}
