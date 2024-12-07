import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, Button, Modal, TextField, List, ListItem, ListItemText } from '@mui/material';

// Initial products data for the farmer
const productsData = [
  { name: 'Tomatoes', price: '₹100/kg', available: '500 kg' },
  { name: 'Potatoes', price: '₹60/kg', available: '800 kg' },
  { name: 'Carrots', price: '₹120/kg', available: '400 kg' },
  { name: 'Onions', price: '₹90/kg', available: '300 kg' },
];

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openSellModal, setOpenSellModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [username, setUsername] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [breed, setBreed] = useState('');
  const [userCart, setUserCart] = useState([]);
  const [soldItems, setSoldItems] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  const handleUserLogin = () => setIsUserLoggedIn(true);
  const handleUserLogout = () => setIsUserLoggedIn(false);

  const handleOpenSellModal = (product) => {
    setSelectedProduct(product);
    setOpenSellModal(true);
  };

  const handleCloseSellModal = () => {
    setOpenSellModal(false);
    setQuantity('');
    setPrice('');
    setBreed('');
  };

  const handleSell = () => {
    if (!quantity || !price || !breed) {
      alert('Please fill in all the details to proceed.');
      return;
    }

    // Add sold item to the soldItems array
    const soldItem = { ...selectedProduct, quantity, price, breed };
    setSoldItems((prevSoldItems) => [...prevSoldItems, soldItem]);
    alert(`${selectedProduct.name} has been sold!`);
    handleCloseSellModal();
  };

  const handleAddToUserCart = (product) => {
    setUserCart((prevUserCart) => [...prevUserCart, product]);
  };

  const handleBuy = () => {
    if (userCart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    alert('Purchase successful!');
    setUserCart([]); // Clear the cart after purchase
  };

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
      {/* Farmer Dashboard */}
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
                sx={{ marginTop: '15px' }}
                onClick={() => isLoggedIn && handleOpenSellModal(product)}
                disabled={!isLoggedIn}
              >
                Sell
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* User Dashboard */}
      <Box
        sx={{
          marginTop: '40px',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '20px',
          borderRadius: '8px',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          User Dashboard
        </Typography>
        {!isUserLoggedIn ? (
          <Box sx={{ mt: 2 }}>
            <TextField
              label="Username"
              variant="outlined"
              sx={{ backgroundColor: '#fff', borderRadius: '4px', mb: 2, width: '100%' }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ width: '100%', padding: '12px', fontSize: '16px' }}
              onClick={handleUserLogin}
            >
              Sign In
            </Button>
          </Box>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleUserLogout}
            sx={{ mt: 2, width: '100%', padding: '12px', fontSize: '16px' }}
          >
            Logout
          </Button>
        )}

        {/* Sold Items Section */}
        <Typography variant="h5" sx={{ marginBottom: '20px', textAlign: 'center' }}>
          Sold Items
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {soldItems.length > 0 ? (
            soldItems.map((item, index) => (
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
                    {item.name}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#4caf50', fontSize: '16px' }}>
                    Price: {item.price}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#ff9800', fontSize: '16px' }}>
                    Breed: {item.breed}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#888', fontSize: '14px' }}>
                    Quantity: {item.quantity}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ marginTop: '15px' }}
                    onClick={() => handleAddToUserCart(item)}
                  >
                    Add to Cart
                  </Button>
                </Paper>
              </Grid>
            ))
          ) : (
            <Typography variant="body1" sx={{ color: '#888', textAlign: 'center' }}>
              No items available for sale.
            </Typography>
          )}
        </Grid>

        {/* Cart */}
        <Typography variant="h5" sx={{ marginTop: '30px', marginBottom: '20px' }}>
          Your Cart
        </Typography>
        <List>
          {userCart.length > 0 ? (
            userCart.map((cartItem, index) => (
              <ListItem key={index}>
                <ListItemText primary={cartItem.name} secondary={`Price: ${cartItem.price}`} />
              </ListItem>
            ))
          ) : (
            <Typography variant="body1" sx={{ color: '#888', textAlign: 'center' }}>
              Your cart is empty
            </Typography>
          )}
        </List>

        {/* Buy Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleBuy}
          sx={{ width: '100%', padding: '12px', fontSize: '16px', marginTop: '20px' }}
        >
          Buy Now
        </Button>
      </Box>

      {/* Sell Modal */}
      <Modal open={openSellModal} onClose={handleCloseSellModal}>
        <Box sx={{ padding: '30px', backgroundColor: 'white', maxWidth: '400px', margin: '0 auto', marginTop: '100px' }}>
          <Typography variant="h6" sx={{ marginBottom: '20px' }}>
            Confirm Sale of {selectedProduct?.name}
          </Typography>
          <TextField
            label="Quantity"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <TextField
            label="Price (per unit)"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            label="Breed"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSell}
            fullWidth
            sx={{ mt: 2 }}
          >
            Confirm Sell
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
