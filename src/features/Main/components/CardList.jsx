import { Box, Stack } from '@mui/material'
import dayjs from 'dayjs'
import React from 'react'
import Card from '../../../components/Common/Card'

export function CardList({ postList }) {
  return (
    <Stack direction="row" flexWrap="wrap" sx={{ mx: -1.5 }}>
      {Array.isArray(postList) &&
        postList.map((post, idx) => (
          <Box key={idx} sx={{ width: { xs: '100%', sm: 1 / 2, md: 1 / 3 } }}>
            <Box sx={{ p: 1.5 }}>
              <Card
                title={post.title}
                author={post.author}
                imageUrl={post.imageUrl}
                short_description={post.short_description}
                createdAt={dayjs(post.createdAt).format('MMM,DD YYYY HH:mm:ss')}
                avatar={post.avatar}
              />
            </Box>
          </Box>
        ))}
    </Stack>
  )
}
