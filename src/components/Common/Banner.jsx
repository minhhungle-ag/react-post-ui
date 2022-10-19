import { Box } from '@mui/material'
import React from 'react'

export function Banner(props) {
  return (
    <Box position="relative" height={0} paddingTop="56.25%">
      <Box position="absolute" top={0} left={0} right={0} bottom={0}>
        <video
          width="100%"
          height="100%"
          src="https://video.wixstatic.com/video/375882_9f1a8e8b364946f38b7eb05436e76503/1080p/mp4/file.mp4"
          autoPlay
          muted
          preload="auto"
          loop
        />
      </Box>
    </Box>
  )
}
