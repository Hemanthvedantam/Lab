import React from 'react';
import { Typography, Box, Grid, Paper } from '@mui/material';

const cropsData = [
  { name: 'Wheat', netWorth: '₹15,00,000' },
  { name: 'Rice', netWorth: '₹12,00,000' },
  { name: 'Corn', netWorth: '₹10,00,000' },
  { name: 'Barley', netWorth: '₹8,00,000' },
  { name: 'Potatoes', netWorth: '₹7,00,000' },
  { name: 'Tomatoes', netWorth: '₹6,00,000' },
  { name: 'Onions', netWorth: '₹5,50,000' },
  { name: 'Soybeans', netWorth: '₹9,00,000' },
];

export default function Crops() {
  return (
    <Box
      sx={{
        padding: '40px',
        height: '100vh',
        backgroundImage: 'url(https://source.unsplash.com/1600x900/?agriculture,field)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'auto',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          padding: '15px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          borderRadius: '10px',
          marginBottom: '20px',
          width: 'fit-content',
          textAlign: 'center',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        Crop Management
      </Typography>

      <Typography
        paragraph
        sx={{
          textAlign: 'center',
          padding: '15px',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '8px',
          fontSize: '18px',
          maxWidth: '700px',
          margin: '0 auto 40px auto',
          color: '#d1d1d1',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        Monitor crop data including names and net worth of each crop.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {cropsData.map((crop, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Paper
              elevation={8}
              sx={{
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                color: '#333',
                textAlign: 'center',
                borderRadius: '10px',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.4)',
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.25rem', color: '#283593' }}>
                {crop.name}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1rem', color: '#388e3c', fontWeight: '600' }}>
                Net Worth: {crop.netWorth}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
