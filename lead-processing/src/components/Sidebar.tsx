import React from 'react';
import { Box, Typography, Avatar, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, AccessTime, ListAlt, BusinessCenter, Description, AttachMoney, Event, Photo, Person, Map, BarChart } from '@mui/icons-material';

interface SidebarProps {
  selectedMenu: string;
  setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
}

const menuItems = [
  { text: 'Dashboard', icon: <Dashboard /> },
  { text: 'Time Tracking', icon: <AccessTime /> },
  { text: 'Task List', icon: <ListAlt /> },
  { text: 'Lead Pipeline', icon: <BusinessCenter /> },
  { text: 'Estimates', icon: <Description /> },
  { text: 'Invoices', icon: <AttachMoney /> },
  { text: 'Projects', icon: <Event /> },
  { text: 'Schedule', icon: <Event /> },
  { text: 'Photos & Files', icon: <Photo /> },
  { text: 'Customers', icon: <Person /> },
  { text: 'Map', icon: <Map /> },
  { text: 'Reports', icon: <BarChart /> },
];

const Sidebar: React.FC<SidebarProps> = ({ selectedMenu, setSelectedMenu }) => (
  <Box sx={{ width: '250px', backgroundColor: '#f5f5f5', height: '100vh', position: 'relative' }}>
    <Typography variant="h6" sx={{ p: 2 }}>CONSTRUCTION SERVICE</Typography>
    <List>
      {menuItems.map((item) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton
            onClick={() => setSelectedMenu(item.text)}
            sx={{ color: selectedMenu === item.text ? '#1976d2' : '#000' }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>

    {/* User Info Box positioned at the bottom */}
    <Box sx={{
      position: 'absolute', // absolute positioning inside the sidebar
      bottom: 0, // stick to the bottom
      // width: '100%', // ensure it takes full width
      p: 2,
      backgroundColor: '#f5f5f5'
    }}>
      <Avatar src="https://via.placeholder.com/32" alt="User" sx={{ mb: 1 }} />
      <Typography variant="body2">Muaz Sheikh</Typography>
      <Typography variant="caption">8:25 AM, Aug 13, 2024</Typography>
    </Box>
  </Box>
);

export default Sidebar;
