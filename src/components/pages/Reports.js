import React from 'react';
import { Box, Typography, Grid, Paper, LinearProgress } from '@mui/material';

// Crop data with percentage values for bar visualization
const cropReports = [
  { name: 'Tomatoes', yield: 70, revenue: 60, growthRate: 10 },
  { name: 'Potatoes', yield: 90, revenue: 45, growthRate: 8 },
  { name: 'Carrots', yield: 50, revenue: 30, growthRate: 12 },
  { name: 'Onions', yield: 35, revenue: 25, growthRate: 7 },
];

export default function Reports() {
  return (
    <Box
      sx={{
        padding: '20px',
        height: '100vh',
        backgroundImage: 'url(https://source.unsplash.com/1600x900/?nature,farm,fields)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        overflowY: 'auto',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Crop Reports
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '10px', fontSize: '18px' }}>
          Detailed insights on crop yields, revenue, and growth trends.
        </Typography>
      </Box>

      {/* Crop Reports Section */}
      <Typography
        variant="h5"
        sx={{
          marginBottom: '20px',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
        Crop Performance Reports
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {cropReports.map((crop, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Paper
              elevation={6}
              sx={{
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#333',
                textAlign: 'center',
                borderRadius: '10px',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                {crop.name}
              </Typography>

              {/* Yield Progress Bar */}
              <Typography variant="body1" sx={{ color: '#4caf50', fontSize: '16px', fontWeight: '500' }}>
                Yield: {crop.yield}%
              </Typography>
              <LinearProgress
                variant="determinate"
                value={crop.yield}
                sx={{
                  height: '10px',
                  borderRadius: '5px',
                  backgroundColor: '#dcedc8',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#4caf50',
                  },
                  marginBottom: '10px',
                }}
              />

              {/* Revenue Progress Bar */}
              <Typography variant="body1" sx={{ color: '#ff9800', fontSize: '16px', fontWeight: '500' }}>
                Revenue: {crop.revenue}%
              </Typography>
              <LinearProgress
                variant="determinate"
                value={crop.revenue}
                sx={{
                  height: '10px',
                  borderRadius: '5px',
                  backgroundColor: '#ffe0b2',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#ff9800',
                  },
                  marginBottom: '10px',
                }}
              />

              {/* Growth Rate Progress Bar */}
              <Typography variant="body1" sx={{ color: '#1976d2', fontSize: '16px', fontWeight: '500' }}>
                Growth Rate: {crop.growthRate}%
              </Typography>
              <LinearProgress
                variant="determinate"
                value={crop.growthRate}
                sx={{
                  height: '10px',
                  borderRadius: '5px',
                  backgroundColor: '#bbdefb',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#1976d2',
                  },
                }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
