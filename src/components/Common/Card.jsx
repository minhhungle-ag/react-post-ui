import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

function Card({ title, short_description, imageUrl, author, createdAt }) {
    return (
        <Box boxShadow={3}>
            <Box position="relative" height={0} paddingTop="56.25%">
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    component="img"
                    width="100%"
                    height="100%"
                    src={imageUrl}
                />
            </Box>

            <Stack spacing={1}>
                <Typography variant="body1">{author}</Typography>
                <Typography variant="body2">{createdAt}</Typography>

                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2">{short_description}</Typography>
            </Stack>
        </Box>
    )
}

export default Card
