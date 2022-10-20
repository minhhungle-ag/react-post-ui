import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Loading } from '../../../components/Common/Loading'
import { PostInfo } from '../../../components/Common/PostInfo'
import { DEFAULT_THUMBNAIL } from '../../../constants/common'
import { usePost } from '../../../hooks/post'

export function BlogDetail() {
  const { postId } = useParams()
  const { post, isLoading } = usePost(postId)

  return isLoading ? (
    <Loading />
  ) : (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h3" textAlign="center" fontWeight={500} sx={{ mb: 6 }}>
          Post detail
        </Typography>

        <Stack spacing={4}>
          <Box position="relative" paddingTop="56.25%" height={0} boxShadow={3}>
            <Box position="absolute" top={0} left={0} right={0} bottom={0} padding={1}>
              <Box
                component="img"
                width="100%"
                height="100%"
                src={post?.imageUrl || DEFAULT_THUMBNAIL}
                sx={{ objectFit: 'cover' }}
                onError={(event) => (event.target.src = DEFAULT_THUMBNAIL)}
              />
            </Box>
          </Box>

          <Typography variant="h4" fontWeight={400} sx={{ mb: 6 }}>
            {post?.title}
          </Typography>

          <Stack spacing={2}>
            <PostInfo avatar={post?.avatar} author={post?.author} createdAt={post?.createdAt} />

            <Divider />

            <Typography variant="h5">{post?.short_description}</Typography>

            <Typography variant="body1" textAlign="justify">
              {post?.description}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
