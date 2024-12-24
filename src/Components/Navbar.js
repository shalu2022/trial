// Navbar.js - Top Navigation Bar
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box, IconButton, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';

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
    <AppBar position="static" sx={{ background: "#fff", color: '#6F6F6F',boxShadow: 'none', py:1 }} >
      <Toolbar>
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Application
        </Typography> */}
        <Box sx={{ display: 'flex', flexGrow: 1, paddingLeft:30}}>

        <Button sx={{ml:1,  textTransform: 'none'}} color="inherit" component={Link}  to="/">          
          <Typography fontSize={12}>Dashboard</Typography>
        </Button>
        <Button sx={{ml:1,  textTransform: 'none'}} color="inherit" component={Link} to="/patient-register"           
        >          
          <Typography fontSize={12}>Patient Register</Typography>
        </Button>
        <Button sx={{ml:1, textTransform: 'none'}} 
          color="inherit"
          onClick={handleMenuOpen2}
          endIcon={<ArrowDropDownIcon />}
        >          
          <Typography fontSize={12}>Patient Data</Typography>
        </Button>
        <Menu
          anchorEl={anchorEl2}
          open={Boolean(anchorEl2)}
          onClose={handleMenuClose2}
        >
          <MenuItem onClick={handleMenuClose2} component={Link} to="/patient-data">Patient Sub Page</MenuItem>
          <MenuItem onClick={handleMenuClose2} component={Link} to="/patient-data">Patient Sub Page</MenuItem>
        </Menu>
        <Button sx={{ml:1, textTransform: 'none'}} 
          color="inherit"
          onClick={handleMenuOpen}
          endIcon={<ArrowDropDownIcon />}
        >
          <Typography fontSize={12}>Operation Theater</Typography>
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/operation-theater">Sub-page 1</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/operation-theater">Sub-page 2</MenuItem>
        </Menu>
        <Button sx={{ml:0, py:2,   textTransform: 'none'
}} color="inherit" component={Link} to="/reports">          
          <Typography fontSize={12}>Reports</Typography>
        </Button>
        </Box>
       <MenuItem sx={{p:0}}>
        <IconButton color="inherit" disableRipple>
            <HelpOutlineIcon sx={{color:'revert'}} />
        </IconButton>
      </MenuItem>
      <MenuItem sx={{p:0}}>
        <IconButton
          color="inherit"
          disableRipple
        >
          <Badge variant="dot" color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </MenuItem>
      {/* <MenuItem sx={{p:0}}> */}
        <IconButton
          // size="large"
          color="inherit"
          disableRipple
        >
          <AccountBoxIcon sx={{fontSize:'40px'}} />
        </IconButton>
        <Box sx={{display:'flex', flexDirection:'column'}}>
        <Typography variant='body1' fontSize={12} fontWeight={600}>Hardeep</Typography>
        <Typography variant='subtitle2' fontSize={12} color='lightGrey' >STAFF</Typography>
        </Box>
        <MenuItem sx={{px:4}}>
        <IconButton size='small' color="inherit" disableRipple >
            <LogoutIcon sx={{color:'revert', fontSize:'16px'}} />
        </IconButton>
      </MenuItem>
      {/* </MenuItem> */}
      </Toolbar>
     
    </AppBar>
  );
};

export default Navbar;



