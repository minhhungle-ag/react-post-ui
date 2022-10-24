import { Box, Stack } from '@mui/material'
import React from 'react'
import { RecentCard } from '../../../components/Common/RecentCard'

export function RecentPostList({ postList, onCardClick }) {
  return (
    <Stack direction="row" flexWrap="wrap" sx={{ mx: -1.5 }}>
      {Array.isArray(postList) &&
        postList.map((post, idx) => (
          <Box
            key={idx}
            sx={{
              width: { xs: '100%', sm: 1 / 2, md: 1 / 3 },
            }}
            onClick={() => onCardClick?.(post.id)}
          >
            <Box sx={{ p: 1.5 }}>
              <RecentCard
                title={post.title}
                author={post.author}
                imageUrl={post.imageUrl}
                short_description={post.short_description}
                createdAt={post.createdAt}
                avatar={post.avatar}
              />
            </Box>
          </Box>
        ))}
    </Stack>
  )
}
