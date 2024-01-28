import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme';

const Footer = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" padding={"20px 0px 20px 100px"} marginTop={"30px"} gap="20px"
        sx={{
            backgroundImage: "linear-gradient(183deg, #67C3F3 -8.57%, #5A98F2 82.96%)"
        }}
    >
        <img
            alt='logo'
            src='./images/logowhite.png'
            height="41px"
            width="auto"
        />
        <Typography
            variant='h5'
            sx={{
                color: colors.white[500]
            }}
        >
        Developed by the students of Indian Institute of Information Technology, Allahabad.<br/> Aims to reduce waiting time and hassle in government hospitals.
        </Typography>
    </Box>
  )
}

export default Footer
