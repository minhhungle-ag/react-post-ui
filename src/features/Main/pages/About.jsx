import { Stack, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

export function About(props) {
    return (
        <Box sx={{ py: 8 }}>
            <Container>
                <Typography variant="h3" textAlign="center" fontWeight={400} sx={{ mb: 6 }}>
                    About me
                </Typography>

                <Stack direction="row" flexWrap="wrap" sx={{ mx: -2 }}>
                    <Box
                        sx={{
                            width: {
                                xs: '100%',
                                md: 1 / 2,
                            },
                        }}
                    >
                        <Box sx={{ p: 2 }}>
                            <Box sx={{ p: 2 }} boxShadow={3}>
                                <Box
                                    sx={{ verticalAlign: 'middle' }}
                                    component="img"
                                    width="100%"
                                    src="https://static.wixstatic.com/media/2e2a49_d456d06d41b346d3b36f426cb4142859~mv2.jpg/v1/fill/w_581,h_596,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2e2a49_d456d06d41b346d3b36f426cb4142859~mv2.jpg"
                                />
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            width: {
                                xs: '100%',
                                md: 1 / 2,
                            },
                        }}
                    >
                        <Stack sx={{ p: 2 }} spacing={2}>
                            <Typography variant="h5">Hi, thanks for dropping by!</Typography>
                            <Typography variant="body1" textAlign="justify">
                                I'm a paragraph. Click here to add your own text and edit me. It’s
                                easy. Just click “Edit Text” or double click me to add your own
                                content and make changes to the font. Feel free to drag and drop me
                                anywhere you like on your page. I’m a great place for you to tell a
                                story and let your users know a little more about you.
                            </Typography>

                            <Typography variant="body1" textAlign="justify">
                                This is a great space to write a long text about your company and
                                your services. You can use this space to go into a little more
                                detail about your company. Talk about your team and what services
                                you provide. Tell your visitors the story of how you came up with
                                the idea for your business and what makes you different from your
                                competitors. Make your company stand out and show your visitors who
                                you are.
                            </Typography>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default About
