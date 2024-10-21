import React, { useState } from 'react';
import { Box, Grid, Card, CardContent, Typography, Button, Avatar, TextField, AppBar, Toolbar, IconButton, FilledTextFieldProps, OutlinedTextFieldProps, StandardTextFieldProps, TextFieldVariants } from '@mui/material';
import { DatePicker } from '@mui/lab';
import { Phone, Email, LocationOn, FilterList, CalendarToday, Sort } from '@mui/icons-material';
import { styled } from '@mui/system';
import { JSX } from 'react/jsx-runtime';

// Mock Data for Leads
const leadsData = [
  { 
    id: 1, 
    name: 'Brown\'s Bathroom Remodel', 
    phone: '(907) 555-0101', 
    email: 'example@email.com', 
    address: '4517 Washington Ave. Manchester, Kentucky 39495', 
    status: 'No Follow up', 
    revenue: '$120,000.00', 
    likelihood: '75%', 
    salesRep: ['https://via.placeholder.com/32', 'https://via.placeholder.com/32'] 
  },
  { 
    id: 2, 
    name: 'Nijum\'s Bedroom Remodel', 
    phone: '(907) 555-0101', 
    email: 'example@email.com', 
    address: '4517 Washington Ave. Manchester, Kentucky 39495', 
    status: 'Follow up', 
    revenue: '$150,000.00', 
    likelihood: '80%', 
    salesRep: ['https://via.placeholder.com/32', 'https://via.placeholder.com/32']
  },
  // Add more leads as needed
];

const stages = [
  { name: 'New', count: 20 },
  { name: 'Contact', count: 50 },
  { name: 'Upload Scope', count: 30 },
  { name: 'Estimate', count: 12 },
  { name: 'Sign Contract', count: 8 },
  { name: 'Payment', count: 2 },
  { name: 'Installation', count: 10 },
  { name: 'Completed', count: 10 },
  { name: 'Feedback', count: 30 },
];

const Sidebar = styled(Box)(({ theme }) => ({
  width: '250px',  // Adjust the width of the sidebar
  backgroundColor: '#2e3b4e',
  color: '#fff',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
}));

const LeadsDashboard = () => {
  const [selectedStage, setSelectedStage] = useState('New');
  const [dateRange, setDateRange] = useState([null, null]);

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar>
        <Typography variant="h6" sx={{ mb: 4 }}>CONSTRUCTION SERVICE</Typography>
        <Box component="nav" sx={{ mb: 4 }}>
          <Typography variant="body2" sx={{ mb: 2 }}>Main Menu</Typography>
          <Typography variant="body2" sx={{ mb: 2 }}><Button sx={{ color: '#fff', textTransform: 'none', mb: 2 }}>Dashboard</Button></Typography>
          <Typography variant="body2" sx={{ mb: 2 }}><Button sx={{ color: '#fff', textTransform: 'none', mb: 2 }}>Time Tracking</Button></Typography>
          <Typography variant="body2" sx={{ mb: 2 }}><Button sx={{ color: '#fff', textTransform: 'none', mb: 2 }}>Task List</Button></Typography>
          <Typography variant="body2" sx={{ mb: 2 }}><Button sx={{ color: '#fff', textTransform: 'none', mb: 2 }}>Lead Pipeline</Button></Typography>
           </Box>

      </Sidebar>

      <Box sx={{ flexGrow: 1, p: 3, backgroundColor: '#f4f6f8' }}>
        {/* Header */}
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box>
              <Button startIcon={<Sort />} color="primary">Sort by</Button>
              <Button startIcon={<FilterList />} color="primary">Filters</Button>
            </Box>
            <DatePicker
              label="Select Date Range"
              value={dateRange}
              onChange={(newValue: React.SetStateAction<null[]>) => setDateRange(newValue)}
              renderInput={(params: JSX.IntrinsicAttributes & { variant?: TextFieldVariants | undefined; } & Omit<OutlinedTextFieldProps | FilledTextFieldProps | StandardTextFieldProps, "variant">) => <TextField {...params} variant="outlined" size="small" />}
            />
          </Toolbar>
        </AppBar>

        {/* Stage Filters */}
        <Grid container spacing={1} sx={{ mt: 3 }}>
          {stages.map((stage) => (
            <Grid item key={stage.name}>
              <Button
                variant={selectedStage === stage.name ? 'contained' : 'outlined'}
                color="primary"
                onClick={() => setSelectedStage(stage.name)}
                sx={{
                  borderRadius: '20px',
                  padding: '6px 12px',
                  textTransform: 'none',
                }}
              >
                {stage.name} ({stage.count})
              </Button>
            </Grid>
          ))}
        </Grid>

        {/* Main Content Section */}
        <Typography variant="h5" sx={{ mt: 4 }}>
          Main Content Section (Leads and filters)
        </Typography>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {leadsData.map((lead) => (
            <Grid item xs={12} md={6} lg={4} key={lead.id}>
              <Card sx={{ borderRadius: '12px' }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">{lead.name}</Typography>
                  <Typography variant="body2">{lead.address}</Typography>
                  <Typography variant="body2">Revenue: {lead.revenue}</Typography>
                  <Typography variant="body2">Likelihood: {lead.likelihood}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default LeadsDashboard;
