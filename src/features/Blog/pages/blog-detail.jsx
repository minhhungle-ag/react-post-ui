/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Loading } from '../../../components/Common/Loading'
import { PostInfo } from '../../../components/Common/PostInfo'
import { DEFAULT_THUMBNAIL } from '../../../constants/common'
import { usePost } from '../../../hooks/post'
import { usePosts } from '../../../hooks/posts'
import { randomNumberInRange } from '../../../utils/common'
import { RecentPostList } from '../components/RecentPostList'

export function BlogDetail() {
  const [params, setParams] = useState({
    page: 1,
    limit: 6,
  })
  const { postId } = useParams()
  const navigate = useNavigate()

  const { post, isLoading } = usePost(postId)
  const { postList, pagination } = usePosts({
    ...params,
  })

  useEffect(() => {
    if (post) {
      const randomPage = randomNumberInRange(1, pagination?.total_page)
      setParams((params) => ({
        ...params,
        page: randomPage,
        author: post?.author,
        recentId: post.id,
      }))
    }
  }, [post])

  const newPostList = postList?.filter((item) => item.id !== postId)

  return isLoading ? (
    <Loading />
  ) : (
    <Box>
      <Box height={300}>
        <Box
          width="100%"
          height="100%"
          component="img"
          alt="banner"
          src="https://picsum.photos/1368/300?blur=2"
          sx={{ objectFit: 'cover' }}
          onError={(e) => (e.target.src = 'https://picsum.photos/id/2/1368/300?blur=2')}
        />
      </Box>

      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Container>
          <Typography
            variant="h3"
            textAlign="center"
            fontWeight={500}
            sx={{ mb: { xs: 2, md: 6 } }}
          >
            Post detail
          </Typography>

          <Stack spacing={3}>
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

            <Typography variant="h4" fontWeight={400} sx={{ mb: { xs: 2, md: 6 } }}>
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

            {Array.isArray(newPostList) && newPostList.length > 0 && (
              <Box>
                <Typography variant="h5" fontWeight={500}>
                  Recent Posts
                </Typography>

                <RecentPostList
                  postList={newPostList}
                  onCardClick={(postId) => navigate(`/blog/${postId}`)}
                  columnLimit={4}
                />
              </Box>
            )}
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
