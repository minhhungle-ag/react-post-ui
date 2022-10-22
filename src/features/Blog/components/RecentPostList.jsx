import { Box, Stack } from '@mui/material'
import React from 'react'
import Card from '../../../components/Common/Card'

export function RecentPostList({ postList, onCardClick, postId }) {
  return (
    <Stack direction="row" flexWrap="wrap" sx={{ mx: -1.5 }}>
      {Array.isArray(postList) &&
        postList.map((post, idx) => (
          <Box
            key={idx}
            sx={{
              width: { xs: '100%', sm: 1 / 2 },
            }}
            onClick={() => onCardClick?.(post.id)}
          >
            <Box sx={{ p: 1.5 }}>
              <Card
                title={post.title}
                author={post.author}
                imageUrl={post.imageUrl}
                short_description={post.short_description}
                createdAt={post.createdAt}
                avatar={post.avatar}
                selectedCard={postId === post.id}
              />
            </Box>
          </Box>
        ))}
    </Stack>
  )
}
