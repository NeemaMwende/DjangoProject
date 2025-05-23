import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useLocation } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import FeedIcon from '@mui/icons-material/Feed';

const drawerWidth = 240;

export default function NavBar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Oxyrich Industries
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            
              <ListItem disabledPadding>
                <ListItemButton component={Link} to="" selected={"" === path}>
                  <ListItemIcon>
                   <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItemButton>
              </ListItem>

                  <ListItem disabledPadding>
                <ListItemButton component={Link} to="/create" selected={"/create" === path}>
                  <ListItemIcon>
                   <AddIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"Create"} />
                </ListItemButton>
              </ListItem>


                  <ListItem disabledPadding>
                <ListItemButton component={Link} to="/about" selected={"/about" === path}>
                  <ListItemIcon>
                   <FeedIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"About"} />
                </ListItemButton>
              </ListItem>
            
          </List>
          {/* <Divider /> */}
       
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        
      </Box>
    </Box>
  );
}
