import { Box, Button, List, ListItem, Typography, useTheme, IconButton } from '@mui/material'
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Item = ({ title, to}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const signInLinkPath = '/sign-in';
    return(
        <ListItem
            style={{
                color: colors.grey[500],
                cursor: "pointer",
                width: "auto",
            }}
        >
            <NavLink to={to} style={{
                textDecoration: "none",
            }}>
                <Typography variant='h4' sx={{
                    color: colors.grey[500],
                    "&:hover": {
                        color: colors.primary[400]
                    }
                }}>{title}</Typography>
            </NavLink>
        </ListItem>
    )
}

const RegNavBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
    <Box display="flex" justifyContent="space-between" p={1}>
        <Box display="flex" justifyContent="center" alignItems="center">
            <Link to="/">
            <img
                alt='logo'
                height= "41px"
                width= "auto"
                src='./images/logo.png'
                style={{cursor: "pointer"}}
            />
            </Link>
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center" ml="0">
        <IconButton aria-label="back" color="primary" sx={{
            color: colors.primary[500],
            fontFamily: "Source Sans 3",
            textTransform: "none",
            fontSize: 14
        }}>
            <ArrowBackIcon />
        </IconButton>
        </Box>
        
        <Box display="flex" alignItems="center" gap={2}>
            <Typography 
                variant='h6'
                style={{
                    color: colors.primary[500],
                    fontWeight: 600,
                    textAlign: "right",
                }}
                >
                    Already have an account, {' '}
      <Link 
      component={Link}
      sx={{
        backgroundColor: colors.primary[500],
        fontFamily: "Source Sans 3",
        textTransform: "none",
        fontSize: 14
    }} 
      >
        Sign In
      </Link>
            </Typography>
        </Box>
    </Box>
    )
}

export default RegNavBar;