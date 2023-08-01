import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const AboutUs = () => {
    const shebak: string = 'https://i.imgur.com/CbQkpLh.png';
    const isMobile = useMediaQuery({ maxWidth: 786 });

    return (
        <Box display={'flex'} flexDirection={'row'} alignItems={'center'}
            justifyContent={'space-around'} height={'1080px'}
            sx={{ backgroundImage: `url(https://i.imgur.com/e370B0h.png)` }}>
            <Stack flexDirection={'row'} alignItems={'center'}>
                <Box component='img' src={shebak} />
                <Stack alignItems={'flex-start'}>
                    <Typography variant='h1'>About us</Typography>
                    <Typography variant='body1'>Your steps that start with us are going in a scientific and modern way to make you implement</Typography>
                    <Typography variant='body1'>the marketing mix to be your steps to success closer and make you in the top.</Typography>
                    <Typography variant='body1'></Typography>
                </Stack>
            </Stack>
        </Box>
    )
}
