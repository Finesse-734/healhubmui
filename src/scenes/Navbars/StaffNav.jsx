import { Box, Button, List, ListItem, Typography, useTheme } from '@mui/material'
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Item = ({ title, to}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
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

const StaffNav = () => {

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
        <Box>
            <List sx={{
                display:"flex", flexDirection:"row", justifyContent: "space-between"
            }}>
                <Item
                    title="Home"
                    to="/"
                />
                <Item
                    title="Reception"
                    to="/"
                />
                <Item
                    title="Doctor"
                    to="/"
                />
                <Item
                    title="Medical Store"
                    to="/"
                />
                <Item
                    title="Lab"
                    to="/"
                />
            </List>
        </Box>
        <Box display="flex" alignItems="center" gap={2} >
            <Button variant='contained' sx={{
                backgroundColor: colors.primary[500],
                fontFamily: "Source Sans 3",
                textTransform: "none",
                fontSize: 14
            }}>Logout</Button>
        </Box>
    </Box>
  )
}

export default StaffNav
