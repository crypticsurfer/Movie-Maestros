import React from 'react';
//import { Typography, AppBar, Box, Button, Menu, MenuItem, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { Movie } from '@material-ui/icons';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
//import AdbIcon from '@mui/icons-material/Adb';

// import useStyles from '../styles';

//const pages = ["HOME", "Recommended", "My Likes", "LOGIN"]
const pages = [{name:"HOME", url: "/"}, {name:"Recommended", url: "/recommended"}, {name:"Watchlist", url: "/watch-list"}, {name: "LOGIN", url: "/login"}]
const settings = ['Profile', 'Account', 'Logout']; 
function Header() {
    // const classes = useStyles()
    
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

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };

    return (
        <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Movie />
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MOVIE MAESTROS
            </Typography>
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                href="/login"

              >
                <MenuIcon />
              </IconButton>
              <Menu
      
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
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              // href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MOVIE MAESTROS
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  href={page.url}
                >
                  {page.name}
                </Button>
                
              ))}
            </Box>
  

  {/* nav dropdown */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
//         <>
// <CssBaseline />
// <AppBar position='relative'>
//   <Toolbar>
//     <Movie />
//     <Typography variant='h6' >
//       Movie Maestros
//     </Typography>
//     <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//       {pages.map((page) => (
//         <Button key={page}>
//           <Typography style = {{color: 'white' }}>
//           {page}
//           </Typography>
         
//         </Button>
//       ))}
//     </Box>
//     <Menu
//         id="menu-appbar"
//         anchorEl={anchorElNav}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'left',
//         }}
//         keepMounted
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'left',
//         }}
//         open={Boolean(anchorElNav)}
//         onClose={handleCloseNavMenu}
//         >
//         sx={{
//           display: { xs: 'block', md: 'none' },
//         }}
//         {pages.map((page) => (
//           <Box key={page}>
//           <MenuItem  onClick={handleCloseNavMenu}>
//           <MenuItem  >
//             <Typography textAlign="center">{page}</Typography>
//           </MenuItem>
//           </MenuItem>
//           </Box>
//         ))}
//       </Menu>
//   </Toolbar>
// </AppBar>
// </>
   // )
}
export default Header;