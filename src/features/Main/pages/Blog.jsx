import { Box, Pagination, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import { Banner } from '../../../components/Common/Banner'
import { usePosts } from '../../../hooks/posts'
import { CardList } from '../components/CardList'

export function Blog(props) {
  const [params, setParams] = useState({
    page: 1,
    limit: 6,
  })
  const { postList, pagination } = usePosts(params)
  console.log({ pagination })
  return (
    <Box>
      <Banner />

      <Box sx={{ py: 8 }}>
        <Container>
          <Typography variant="h3" textAlign="center" fontWeight={500} sx={{ mb: 6 }}>
            Latest post
          </Typography>

          <CardList postList={postList || []} />

          <Stack direction="row" alignItems="center" justifyContent="center" sx={{ mt: 6 }}>
            <Pagination
              count={pagination?.total_page}
              onChange={(event, page) => setParams({ ...params, page: page })}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
