import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, Button, Modal, TextField } from '@mui/material';

const productsData = [
  { name: 'Tomatoes', price: '₹100/kg', available: '500 kg' },
  { name: 'Potatoes', price: '₹60/kg', available: '800 kg' },
  { name: 'Carrots', price: '₹120/kg', available: '400 kg' },
  { name: 'Onions', price: '₹90/kg', available: '300 kg' },
];

export default function Farmer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openSellModal, setOpenSellModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [username, setUsername] = useState('');

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);
  const handleOpenSellModal = (product) => {
    setSelectedProduct(product);
    setOpenSellModal(true);
  };
  const handleCloseSellModal = () => setOpenSellModal(false);

  return (
    <Box
      sx={{
        padding: '30px',
        height: '100vh',
        backgroundImage: 'url(https://source.unsplash.com/1600x900/?farm,fields)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '40px',
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '40px',
          width: '100%',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Farmer Dashboard
        </Typography>
        {!isLoggedIn ? (
          <Box sx={{ mt: 2 }}>
            <TextField
              label="Username"
              variant="outlined"
              sx={{ backgroundColor: '#fff', borderRadius: '4px', mb: 2, width: '100%' }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ width: '100%', padding: '12px', fontSize: '16px' }}
              onClick={handleLogin}
              disabled={!username}
            >
              Sign In
            </Button>
          </Box>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleLogout}
            sx={{ mt: 2, width: '100%', padding: '12px', fontSize: '16px' }}
          >
            Logout
          </Button>
        )}
      </Box>

      {/* Available Products Section */}
      <Typography
        variant="h5"
        sx={{
          marginBottom: '20px',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '12px',
          borderRadius: '8px',
          fontSize: '20px',
        }}
      >
        Available Products
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {productsData.map((product, index) => (
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
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {product.name}
              </Typography>
              <Typography variant="body1" sx={{ color: '#4caf50', fontSize: '16px' }}>
                Price: {product.price}
              </Typography>
              <Typography variant="body1" sx={{ color: '#ff9800', fontSize: '16px' }}>
                Available: {product.available}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  marginTop: '15px',
                  backgroundColor: isLoggedIn ? '#3a3f51' : '#a4a4a4',
                  '&:hover': { backgroundColor: isLoggedIn ? '#575d6b' : '#a4a4a4' },
                  cursor: isLoggedIn ? 'pointer' : 'not-allowed',
                }}
                onClick={() => isLoggedIn && handleOpenSellModal(product)}
                disabled={!isLoggedIn}
              >
                Sell
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Sell Confirmation Modal */}
      <Modal
        open={openSellModal}
        onClose={handleCloseSellModal}
        aria-labelledby="sell-modal-title"
        aria-describedby="sell-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            borderRadius: '8px',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="sell-modal-title" variant="h6" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
            Confirm Sale
          </Typography>
          <Typography id="sell-modal-description" sx={{ textAlign: 'center', mb: 3 }}>
            Are you sure you want to sell {selectedProduct?.name}?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <Button variant="contained" color="primary" onClick={handleCloseSellModal}>
              Confirm
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleCloseSellModal}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
