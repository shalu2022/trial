// Navbar.js - Top Navigation Bar
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box, IconButton, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MailIcon from '@mui/icons-material/Mail';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuOpen2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <AppBar position="static" sx={{ background: "#fff", color:'#000' }}>
      <Toolbar>
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Application
        </Typography> */}
        <Button color="inherit" component={Link} to="/">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/patient-register">
          Patient Register
        </Button>
        <Button
          color="inherit"
          onClick={handleMenuOpen2}
        >
          Patient Data
        </Button>
        <Menu
          anchorEl={anchorEl2}
          open={Boolean(anchorEl2)}
          onClose={handleMenuClose2}
        >
          <MenuItem onClick={handleMenuClose2} component={Link} to="/patient-data">Patient Sub Page</MenuItem>
          <MenuItem onClick={handleMenuClose2} component={Link} to="/patient-data">Patient Sub Page</MenuItem>
        </Menu>
        <Button
          color="inherit"
          onClick={handleMenuOpen}
        >
          Operation Theater
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/operation-theater">Sub-page 1</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/operation-theater">Sub-page 2</MenuItem>
        </Menu>
        <Button color="inherit" component={Link} to="/reports">
          Reports
        </Button>
       <Menu>
       <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
       </Menu>
      </Toolbar>
     
    </AppBar>
  );
};

export default Navbar;



