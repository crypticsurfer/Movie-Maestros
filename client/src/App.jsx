import './App.css'
import React from 'react';
import { Typography, AppBar, Box, Button, Menu, MenuItem, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core';
import { Movie } from '@material-ui/icons';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
//import Home from './pages/Home';
import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';

import useStyles from './styles';

const pages = ["HOME", "Filter", "Recommended", "Most Liked", "My Likes", "Random", "LOGIN"]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
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

    <ApolloProvider client={client}>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <Movie />
          <Typography variant='h6' >
            Movie Maestros
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {pages.map((page) => (
              <Button key={page} sx={{ color: 'white' }}>
                {page}
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                <MenuItem key={page} >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
                </MenuItem>
              ))}
            </Menu> */}
        </Toolbar>
      </AppBar>

       <div className="flex-column justify-flex-start min-100-vh">
       
        
        <div className={classes.container}>
           {/* <Header/> */}
           {/* <Home /> */}
           <Outlet />
           <Footer/>
         </div>
       </div>
     </ApolloProvider>
   );
 }

export default App;
