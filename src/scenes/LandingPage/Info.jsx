import { Box, Button, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme';
import React from 'react'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';

const Info = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box display="flex" flexDirection="row" gap="5%" alignItems="flex-start" margin={"30px 0 0 0"}>
        <Box display="flex" flexDirection="column" alignItems="flex-start" padding={"0px 0px 0px 50px"} gap="25px">
            <Typography
                variant='h2'
                fontWeight="500"
            >
                Download our mobile app
            </Typography>
            <Typography
                variant='h1'
                fontWeight="500"
            >
                ________
            </Typography>
            <Typography
                variant='h4'
                sx={{
                    color: colors.grey[400]
                }}
            >
            Our dedicated patient engagement app and web portal allow you to access information<br/> instantaneously and securely
            </Typography>
            <Button variant='outlined'
                sx={{
                    display: "flex",
                    flexDirection:"row",
                    alignItems:"center",
                    gap: "10px",
                    borderRadius: "50px",
                    padding: "10px 20px 10px 20px",
                }}
            >Download <DownloadOutlinedIcon/></Button>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="flex-start" padding={"0px 0px 0px 50px"} gap="25px"
            sx={{
                borderLeft: "4px solid",
                borderColor: colors.primary[400]
            }}
        >
            <Typography
                variant='h2'
                fontWeight="500"
            >
                Emergency Services
            </Typography>
            <Typography
                variant='h1'
                fontWeight="500"
            >
                ________
            </Typography>
            <Typography
                variant='h4'
                sx={{
                    color: colors.grey[400]
                }}
            >
            Healhub provides information whether the<br/> emergency services, commodities and medication<br/> is present in the concerned hospital or not.
            </Typography>
        </Box>
    </Box>
  )
}

export default Info
