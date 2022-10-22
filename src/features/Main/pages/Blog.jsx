import { Box, Pagination, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Banner } from '../../../components/Common/Banner'
import { Loading } from '../../../components/Common/Loading'
import { usePosts } from '../../../hooks/posts'
import CardBanner from '../components/CardBanner'
import { CardList } from '../components/CardList'

export function Blog(props) {
  const [params, setParams] = useState({
    page: 1,
    limit: 6,
  })

  const { postList, pagination, isLoading } = usePosts(params)
  const navigate = useNavigate()

  return isLoading ? (
    <Loading />
  ) : (
    <Box>
      <Banner />

      <Box sx={{ position: 'relative', mt: { xs: 2, sm: -15, md: -30, lg: -45 }, zIndex: 2 }}>
        <Container>
          <CardBanner />
        </Container>
      </Box>

      <Box sx={{ py: 8 }}>
        <Container>
          <Typography variant="h3" textAlign="center" fontWeight={500} sx={{ mb: 6 }}>
            Latest post
          </Typography>

          <CardList
            postList={postList || []}
            onCardClick={(postId) => navigate(`/blog/${postId}`)}
          />

          <Stack direction="row" alignItems="center" justifyContent="center" sx={{ mt: 6 }}>
            <Pagination
              count={pagination?.total_page}
              onChange={(event, page) => setParams({ ...params, page: page })}
              variant="outlined"
              shape="rounded"
              page={params.page}
            />
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
