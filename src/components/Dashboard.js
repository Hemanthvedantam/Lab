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
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#eef2f9' }}>
      {/* Sidebar */}
      <Box
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          width: sidebarOpen ? '280px' : '70px',
          transition: 'width 0.3s',
          backgroundColor: '#2c3e50',
          padding: sidebarOpen ? '30px 20px' : '30px 10px',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          boxShadow: '3px 0 15px rgba(0,0,0,0.3)',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: sidebarOpen ? 'center' : 'left',
            fontSize: sidebarOpen ? '1.7rem' : '1rem',
            transition: 'font-size 0.3s',
            color: '#f1c40f',
          }}
        >
          {sidebarOpen ? 'AgriDashboard' : 'AD'}
        </Typography>
        <Divider sx={{ backgroundColor: '#34495e', marginBottom: '20px' }} />

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
              transition: 'all 0.3s',
              '&:hover': {
                backgroundColor: '#1abc9c',
                transform: 'scale(1.05)',
              },
              '&.active': {
                backgroundColor: '#16a085',
                fontWeight: 'bold',
                borderLeft: sidebarOpen ? '5px solid #f1c40f' : 'none',
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
            {sidebarOpen ? 'Farmers' : 'F'}
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

        <Divider sx={{ backgroundColor: '#34495e', margin: '20px 0' }} />
        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            color: '#95a5a6',
            fontSize: sidebarOpen ? '0.875rem' : '0.7rem',
          }}
        >
          © 2024 AgriCorp - Empowering Farmers
        </Typography>
      </Box>

      {/* Main Content Area */}
      <Box
        sx={{
          flex: 1,
          padding: '30px',
          overflowY: 'auto',
          backgroundColor: '#f7f9fc',
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: '#2c3e50',
                    fontWeight: 'bold',
                    marginBottom: '10px',
                  }}
                >
                  Welcome to AgriDashboard
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#7f8c8d',
                    marginBottom: '20px',
                  }}
                >
                  Your one-stop platform for managing your crops, tracking market trends, and growing smarter.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#34495e',
                  }}
                >
                  Explore crop insights, get market updates, connect with the farming community, and access modern farming solutions—all in one place.
                </Typography>
              </Box>
            }
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
