import React from 'react'
import { useState } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { tokens } from '../../theme'
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Rsidebar = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Workbench");

  return (
    <Box
        sx={{
            "& .pro-sidebar-inner":{
                background: `${colors.primary[400]} !important`,
            },
            "& .pro-icon-wrapper":{
                background: "transparent !important"
            },
            "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important",
            },
            "& .pro-inner-item:hover": {
                color: "#868dfb !important",
            },
            "& .pro-menu-item.active": {
                color: "#6870fa !important",
            },
        }}
    >
        <Sidebar collapsed={isCollapsed}>
            <Menu iconShape = "square">
                <MenuItem
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    icon = {isCollapsed ? <MenuOutlinedIcon/> : undefined}
                    style={{
                        margin: "10px 0px 20px 0px",
                        color: colors.grey[200]
                    }}
                >
                    {!isCollapsed && (
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                        >
                            <Typography variant="h3" color={colors.grey[500]}>
                                Dashboard
                            </Typography>
                            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                            <MenuOutlinedIcon />
                            </IconButton>
                        </Box>
                        )}
                </MenuItem>
            </Menu>
        </Sidebar>
    </Box>
  )
}

export default Rsidebar
