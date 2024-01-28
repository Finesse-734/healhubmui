import { tokens } from '../../theme';
import { Box, useTheme, Typography } from '@mui/material';
import React from 'react'
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';

const Carousel1 = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box display="flex" flexDirection="row" gap="10%" p={5} alignItems="center">
        <Box display="flex" flexDirection="column" gap={5} alignItems="flex-start" width="45%" padding={"0px 0px 0px 50px"}>
            <Box>
                <Typography
                    variant='h1'
                    style={{
                        color: colors.primary[500],
                        fontWeight: 600
                    }}
                >
                    HealHub
                </Typography>
            </Box>
            <Box>
                <FormatQuoteOutlinedIcon
                    sx={{                       
                        rotate: "180deg",
                        color: colors.primary[600]
                    }}
                />
            </Box>
            <Box
                alignContent="center"
            >
                <Typography
                    variant='h3'
                >
                    Empowering Health, Eliminating Wait: Your digital<br/> guide to a Queue-Free Future!
                </Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="flex-end" width="90%">
                <FormatQuoteOutlinedIcon
                    sx={{
                        color: colors.primary[600]
                    }}
                />
            </Box>
        </Box>
        <Box width="45%" display="flex" alignItems="center">
            <img
                alt='illustration'
                src='./images/illustration.png'
            />
        </Box>
    </Box>
  )
}

export default Carousel1
