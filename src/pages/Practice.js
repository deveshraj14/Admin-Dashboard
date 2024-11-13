

// Sidebar.js
import './Sidebars.css';
import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { HomeOutlined, ExpandLess, ExpandMore, FormatBold } from '@mui/icons-material';
const Sidebar = ({ collapsed, onToggle }) => {
  return (
    // <Drawer variant="permanent" anchor="left" className={`drawer ${collapsed ? 'collapsed' : ''}`}>
    <Drawer
    variant="permanent"
    anchor="left"
    sx={{
      width: collapsed ? '60px' : '240px',
      backgroundColor: '#737474', // Set the sidebar background color
      color: 'yellow', // Set text color to yellow
      '& .MuiDrawer-paper': {
        backgroundColor: '#f1f1f1', // Ensure the background is green for the paper element
        color: '#737474', // Ensure the text is yellow for the paper element
        width: collapsed ? '60px' : '240px',
      },
    }}
  >
      <div>
        <IconButton onClick={onToggle} style={{ margin: '16px',color: 'Black' }}>
          {collapsed ? <ExpandMore /> : <ExpandLess />}
        </IconButton>
        <h2 style={{ textAlign: 'center', color: '#000080' }}>Vasitums</h2>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeOutlined />
              </ListItemIcon>
            
              <ListItemText primary="Main Menu" style={{color:'black', display: collapsed ? 'none' : 'block' }} />
            </ListItemButton>
          </ListItem>
          {/* <ListItemText primary="Add" style={{ display: collapsed ? 'none' : 'block' }} />
          <ListItemText primary="Delete" style={{ display: collapsed ? 'none' : 'block' }} />
          <ListItemText primary="Details" style={{ display: collapsed ? 'none' : 'block' }} />
          <ListItemText primary="Update" style={{ display: collapsed ? 'none' : 'block' }} /> */}
          <ListItem disablePadding>
            <ListItemButton
             sx={{
              '&:hover': {
                backgroundColor: 'grey', // Add yellow hover effect
              },
            }}
            >
              <ListItemText primary="Dashboard" style={{ display: collapsed ? 'none' : 'block' }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
             sx={{
              '&:hover': {
                backgroundColor: 'grey', // Add yellow hover effect
              },
            }}
            >
              <ListItemText primary="Recruitment" style={{ display: collapsed ? 'none' : 'block' }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
             sx={{
              '&:hover': {
                backgroundColor: '#737474', // Add yellow hover effect
              },
            }}
            >
              <ListItemText primary="Schedule" style={{ display: collapsed ? 'none' : 'block' }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
             sx={{
              '&:hover': {
                backgroundColor: 'black', // Add yellow hover effect
              },
            }}
            >
              <ListItemText primary="Employees" style={{ display: collapsed ? 'none' : 'block' }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeOutlined />
              </ListItemIcon>
              <ListItemText primary="Others" style={{color:'black', display: collapsed ? 'none' : 'block' }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
             sx={{
              '&:hover': {
                backgroundColor: 'grey', // Add yellow hover effect
              },
            }}
            >
              <ListItemText primary="Support" style={{ display: collapsed ? 'none' : 'block' }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
             sx={{
              '&:hover': {
                backgroundColor: 'grey', // Add yellow hover effect
              },
            }}
            >
              <ListItemText primary="Settings" style={{ display: collapsed ? 'none' : 'block' }} />
            </ListItemButton>
          </ListItem>
          {/* Add more items as needed */}
          
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
