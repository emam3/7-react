import { Avatar, Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const services = [
    {
        image: 'https://i.imgur.com/fLSHRPi.png',
        text: 'SEO, Search Engine Optimization'
    },
    {
        image: 'https://i.imgur.com/i6UcDha.png',
        text: 'Identity (Re branding)'
    },
    {
        image: 'https://i.imgur.com/jP8CdW2.png',
        text: 'Guideline for shooting before & after cases'
    },
    {
        image: 'https://i.imgur.com/H6QABKg.png',
        text: 'Branding'
    },
    {
        image: 'https://i.imgur.com/D992eO5.png',
        text: 'Identity inside branches'
    },
    {
        image: 'https://i.imgur.com/doDXUKd.png',
        text: 'Growth of sales'
    },
    {
        image: 'https://i.imgur.com/uU83wR4.png',
        text: 'Paid media'
    },
    {
        image: 'https://i.imgur.com/jkrMg7p.png',
        text: 'E-mail campaigns'
    },
    {
        image: 'https://i.imgur.com/iiYpCJs.png',
        text: 'Sonic brand'
    },
    {
        image: 'https://i.imgur.com/2uaGVO7.png',
        text: 'Content creation'
    },
    {
        image: 'https://i.imgur.com/UyujqKq.png',
        text: 'Growth of sales'
    },
    {
        image: 'https://i.imgur.com/6sRCUfO.png',
        text: 'Annual plan for marketing campaigns'
    },
    {
        image: 'https://i.imgur.com/0k5MCFC.png',
        text: 'Google Ads'
    },
    {
        image: 'https://i.imgur.com/ns4EBp2.png',
        text: 'Animation videos'
    },
    {
        image: 'https://i.imgur.com/PnKzVmq.png',
        text: 'Website development'
    }
]
export const OurServices = (): JSX.Element => {
    return (
        <Stack sx={{backgroundImage:'url(https://i.imgur.com/wNduj9X.png)', backgroundSize:'cover'}} height={'700px'}>
            <Typography mt={3} variant='h3'>What we will offer</Typography>
            <Grid mt={3} container spacing={2} width={'100%'} display={'flex'} justifyContent={'flex-end'}>
                {
                    services.map((service) => {
                        return (
                            <Grid display={'flex'} flexDirection={'row'} item xs={5} alignItems={'center'} justifyContent={'flex-start'}>
                                <Avatar src={service.image} sx={{mr:1}}/>
                                <Typography>{service.text}</Typography>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Stack>
    )
}
