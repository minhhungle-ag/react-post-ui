import { Box, Container, Pagination, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loading } from '../../../components/Common/Loading'
import { usePosts } from '../../../hooks/posts'
import { useUser } from '../../../hooks/user'
import { Info } from '../components/info'
import MyPostList from '../components/MyPostList'

function Profile(props) {
  const [params, setParams] = useState({
    page: 1,
    limit: 2,
  })

  const navigate = useNavigate()
  const { user, isLoading } = useUser('2a416250-038f-4123-bf5d-057ba0aac479')
  const { postList, pagination, removeMutation } = usePosts(params)

  async function handleRemovePost(post) {
    const message = `Do You Really Want To Remove "${post.title}"?`
    if (window.confirm(message)) {
      await removeMutation.mutateAsync(post.id)
    }
  }

  return isLoading ? (
    <Loading />
  ) : (
    <Box sx={{ my: { xs: 4, md: 8 } }}>
      <Container>
        <Typography variant="h3" textAlign="center" fontWeight={500} sx={{ mb: { xs: 2, md: 6 } }}>
          My profile
        </Typography>

        <Info user={user} onBtnClick={() => navigate('/user/add-new-post')} />

        <Typography variant="h3" textAlign="center" fontWeight={500} sx={{ my: { xs: 2, md: 6 } }}>
          My latest posts
        </Typography>

        <MyPostList
          postList={postList || []}
          onCardClick={(postId) => navigate(`/blog/${postId}`)}
          onEdit={(postId) => navigate(`/user/edit-post/${postId}`)}
          onRemove={handleRemovePost}
        />

        {postList?.length > 0 && (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ my: { xs: 2, md: 6 } }}
          >
            <Pagination
              count={pagination?.total_page}
              onChange={(event, page) => setParams({ ...params, page: page })}
              variant="outlined"
              shape="rounded"
              page={params.page}
            />
          </Stack>
        )}
      </Container>
    </Box>
  )
}

export default Profile
