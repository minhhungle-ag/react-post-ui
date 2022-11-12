import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Box, Button, IconButton, Stack } from '@mui/material'
import React from 'react'
import { SwanCard } from '../../../components/Common/SwanCard'

function MyPostList({ postList, onCardClick, onEdit, onRemove, onDetailClick }) {
  return (
    <Stack direction="row" flexWrap="wrap" sx={{ mx: -1.5 }}>
      {Array.isArray(postList) &&
        postList.map((post, idx) => (
          <Box
            key={idx}
            sx={{ width: { xs: '100%', md: 1 / 2 } }}
            onClick={() => onCardClick?.(post)}
          >
            <Box sx={{ p: 1.5 }}>
              <SwanCard
                title={post.title}
                author={post.author}
                imageUrl={post.imageUrl}
                short_description={post.short_description}
                createdAt={post.createdAt}
                avatar={post.avatar}
                action={
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Button variant="contained" onClick={() => onDetailClick?.(post)}>
                      Detail
                    </Button>

                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation()
                        onEdit?.(post)
                      }}
                    >
                      <EditIcon />
                    </IconButton>

                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation()
                        onRemove?.(post)
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                }
              />
            </Box>
          </Box>
        ))}
    </Stack>
  )
}

export default MyPostList
