import React, { useState } from 'react';
import { Box, Typography, Button, Stack, Divider } from '@mui/material';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import Crops from './pages/Crops';
import Reports from './pages/Reports';
import Farmer from './pages/Farmer';
import Settings from './pages/Settings';

export default function Dashboard() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleMouseEnter = () => {
    setSidebarOpen(true);
  };

  const handleMouseLeave = () => {
    setSidebarOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#f7f9fc' }}>
      {/* Sidebar */}
      <Box
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          width: sidebarOpen ? '280px' : '70px',
          transition: 'width 0.3s',
          backgroundColor: '#283593',
          padding: sidebarOpen ? '30px 20px' : '30px 10px',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          boxShadow: '3px 0 10px rgba(0,0,0,0.2)',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: sidebarOpen ? 'center' : 'left',
            fontSize: sidebarOpen ? '1.5rem' : '1rem',
            transition: 'font-size 0.3s',
          }}
        >
          {sidebarOpen ? 'AgriDashboard' : 'AD'}
        </Typography>
        <Divider sx={{ backgroundColor: '#5c6bc0', marginBottom: '20px' }} />

        <Stack
          direction="column"
          spacing={2}
          sx={{
            '& .MuiButton-root': {
              color: '#fff',
              fontSize: '17px',
              justifyContent: sidebarOpen ? 'flex-start' : 'center',
              padding: '10px 20px',
              borderRadius: '10px',
              '&:hover': {
                backgroundColor: '#3949ab',
              },
              '&.active': {
                backgroundColor: '#1e88e5',
                fontWeight: 'bold',
              },
            },
          }}
        >
          <Button
            component={Link}
            to="/dashboard"
            className={location.pathname === '/dashboard' ? 'active' : ''}
          >
            {sidebarOpen ? 'Dashboard' : 'D'}
          </Button>
          <Button
            component={Link}
            to="/dashboard/crops"
            className={location.pathname === '/dashboard/crops' ? 'active' : ''}
          >
            {sidebarOpen ? 'Crops' : 'C'}
          </Button>
          <Button
            component={Link}
            to="/dashboard/farmer"
            className={location.pathname === '/dashboard/farmer' ? 'active' : ''}
          >
            {sidebarOpen ? 'Farmer' : 'F'}
          </Button>
          <Button
            component={Link}
            to="/dashboard/reports"
            className={location.pathname === '/dashboard/reports' ? 'active' : ''}
          >
            {sidebarOpen ? 'Reports' : 'R'}
          </Button>
          <Button
            component={Link}
            to="/dashboard/settings"
            className={location.pathname === '/dashboard/settings' ? 'active' : ''}
          >
            {sidebarOpen ? 'Settings' : 'S'}
          </Button>
        </Stack>

        <Divider sx={{ backgroundColor: '#5c6bc0', margin: '20px 0' }} />
        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            color: '#b0bec5',
            fontSize: sidebarOpen ? '0.875rem' : '0.7rem',
          }}
        >
          © 2024 AgriCorp
        </Typography>
      </Box>

      {/* Main Content Area */}
      <Box sx={{ flex: 1, padding: '30px', overflowY: 'auto' }}>
        <Routes>
          <Route
            path="/"
            element={<Typography variant="h4">Welcome to the Dashboard</Typography>}
          />
          <Route path="crops" element={<Crops />} />
          <Route path="farmer" element={<Farmer />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </Box>
    </Box>
  );
}
