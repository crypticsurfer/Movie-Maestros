import React from 'react';
import { Typography, AppBar, Box, Button, Menu, MenuItem, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { Movie } from '@material-ui/icons';

import useStyles from '../styles';

const pages = ["HOME", "Filter", "Recommended", "Most Liked", "My Likes", "Random", "LOGIN"]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function Header() {
    const classes = useStyles()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
<CssBaseline />
<AppBar position='relative'>
  <Toolbar>
    <Movie />
    <Typography variant='h6' >
      Movie Maestros
    </Typography>
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      {pages.map((page) => (
        <Button key={page}>
          <Typography style = {{color: 'white' }}>
          {page}
          </Typography>
         
        </Button>
      ))}
    </Box>
    {/* <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        >
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
        {pages.map((page) => (
          <Box key={page}>
          <MenuItem  onClick={handleCloseNavMenu}>
          <MenuItem  >
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
          </MenuItem>
          </Box>
        ))}
      </Menu> */}
  </Toolbar>
</AppBar>
</>
    )
}
export default Header;