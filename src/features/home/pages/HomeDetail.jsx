/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Loading } from '../../../components/Common/Loading'
import { PostInfo } from '../../../components/Common/PostInfo'
import { CURRENT_LIMIT, DEFAULT_THUMBNAIL } from '../../../constants/common'
import { useComments } from '../../../hooks/comments'
import { usePost } from '../../../hooks/post'
import { usePosts } from '../../../hooks/posts'
import { useUser } from '../../../hooks/user'
import { randomNumberInRange } from '../../../utils/common'
import CommentForm from '../components/CommentForm'
import CommentList from '../components/CommentList'
import { RecentPostList } from '../components/RecentPostList'

export function HomeDetail() {
  const [params, setParams] = useState({
    page: 1,
    limit: CURRENT_LIMIT,
  })

  const [commentParams, setCommentParams] = useState({
    page: 1,
    limit: CURRENT_LIMIT,
  })
  const { postId } = useParams()
  const navigate = useNavigate()

  const userId = localStorage.getItem('userId')

  const { user } = useUser(userId)
  const { post, isLoading } = usePost(postId)
  const { postList, pagination } = usePosts({
    ...params,
  })

  console.log('postList: ', postList)

  const {
    commentList,
    pagination: commentPagination,
    addMutation,
  } = useComments({
    ...commentParams,
    postId: postId,
  })

  useEffect(() => {
    if (post) {
      const randomPage = randomNumberInRange(1, pagination?.total_page)
      setParams((params) => ({
        ...params,
        page: randomPage,
        author: post.author,
        recentId: post.id,
      }))
    }
  }, [post])

  const newPostList = postList?.filter((item) => item.id !== postId)

  async function handleFormSubmit(formValues) {
    const data = {
      postId: postId,
      name: formValues.name,
      comment: formValues.comment,
    }

    await addMutation.mutateAsync(data)
  }

  return isLoading ? (
    <Loading />
  ) : (
    <Box>
      <Stack position="relative" height={300} justifyContent="center" alignItems="center">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          width="100%"
          height="100%"
          component="img"
          alt="banner"
          src="https://picsum.photos/id/3/1368/300?blur=5"
          sx={{ objectFit: 'cover' }}
        />

        <Typography
          variant="h3"
          textAlign="center"
          fontWeight={500}
          position="relative"
          zIndex={2}
          color="white"
        >
          Post detail
        </Typography>
      </Stack>

      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Container>
          <Stack spacing={3}>
            <Typography variant="h4" fontWeight={400}>
              {post?.title}
            </Typography>

            <Stack spacing={2}>
              <PostInfo avatar={post?.avatar} author={post?.author} createdAt={post?.createdAt} />

              <Divider />

              <Typography variant="h5">{post?.short_description}</Typography>

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

              <Typography variant="body1" textAlign="justify">
                {post?.description}
              </Typography>
            </Stack>

            <Divider />

            <Stack spacing={3}>
              <Typography variant="h5" fontWeight={500}>
                Comments
              </Typography>

              <Box sx={{ width: { xs: '100%', md: 1 / 2 } }}>
                <CommentForm onFormSubmit={handleFormSubmit} username={user?.fullName} />
              </Box>

              <Box>
                <CommentList commentList={commentList || []} />
              </Box>

              {commentList?.length < commentPagination?.total && (
                <Box maxWidth={200}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      setCommentParams({
                        ...commentParams,
                        limit: commentParams.limit + CURRENT_LIMIT,
                      })
                    }
                  >
                    Load more...
                  </Button>
                </Box>
              )}
            </Stack>

            <Divider />

            {Array.isArray(newPostList) && newPostList.length > 0 && (
              <Box>
                <Typography variant="h5" fontWeight={500}>
                  Recent Posts
                </Typography>

                <RecentPostList
                  postList={newPostList}
                  onCardClick={(postId) => navigate(`/home/post-detail/${postId}`)}
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
