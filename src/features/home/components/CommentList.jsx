import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

function CommentList({ commentList }) {
  return (
    <Stack spacing={1}>
      {Array.isArray(commentList) &&
        commentList.length > 0 &&
        commentList.map((item, idx) => (
          <Box key={idx}>
            <Typography variant="body1" fontWeight={500}>
              {item.name}
            </Typography>
            <Typography variant="body2">{item.comment}</Typography>
          </Box>
        ))}
    </Stack>
  )
}

export default CommentList
