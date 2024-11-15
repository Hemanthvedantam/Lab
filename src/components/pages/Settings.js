import React, { useState } from 'react';
import {
  Box,
  Typography,
  Divider,
  Grid,
  Paper,
  Switch,
  FormControlLabel,
  TextField,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';

export default function Settings() {
  // State to hold configuration settings
  const [settings, setSettings] = useState({
    newUser: '',
    userRole: '',
    emailNotifications: false,
    smsNotifications: false,
    cropManagementAccess: true,
    farmerManagementAccess: true,
    reportsAccess: false,
    defaultYieldUnit: 'kg',
    revenueCurrency: 'USD',
  });

  const [showSnackbar, setShowSnackbar] = useState(false);

  // Handle Save Changes - could persist to backend or local storage here
  const handleSaveChanges = () => {
    console.log("Settings saved:", settings); // Example persistence, replace with actual save logic
    setShowSnackbar(true);
  };

  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Box
        sx={{
          padding: '20px',
          backgroundColor: '#3a3f51',
          color: '#fff',
          borderRadius: '8px',
          textAlign: 'center',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography variant="h4">Admin Configuration</Typography>
        <Typography variant="body1">
          Configure global settings for the Agriculture Management System
        </Typography>
      </Box>

      <Divider />

      {/* User Management Section */}
      <Paper elevation={3} sx={{ padding: '20px', borderRadius: '8px', backgroundColor: '#e3f2fd' }}>
        <Typography variant="h5" gutterBottom>
          User Management
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Add New User"
              variant="outlined"
              fullWidth
              value={settings.newUser}
              onChange={(e) => setSettings({ ...settings, newUser: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Assign Role (Admin/User)"
              variant="outlined"
              fullWidth
              value={settings.userRole}
              onChange={(e) => setSettings({ ...settings, userRole: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="primary" fullWidth>
              Add User
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Notification Settings Section */}
      <Paper elevation={3} sx={{ padding: '20px', borderRadius: '8px', backgroundColor: '#fffde7' }}>
        <Typography variant="h5" gutterBottom>
          Notification Settings
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={settings.emailNotifications}
              onChange={(e) =>
                setSettings({ ...settings, emailNotifications: e.target.checked })
              }
              color="primary"
            />
          }
          label="Enable Email Notifications"
        />
        <FormControlLabel
          control={
            <Switch
              checked={settings.smsNotifications}
              onChange={(e) =>
                setSettings({ ...settings, smsNotifications: e.target.checked })
              }
              color="primary"
            />
          }
          label="Enable SMS Notifications"
        />
      </Paper>

      {/* Access Control for Modules */}
      <Paper elevation={3} sx={{ padding: '20px', borderRadius: '8px', backgroundColor: '#e8f5e9' }}>
        <Typography variant="h5" gutterBottom>
          Module Access Control
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={settings.cropManagementAccess}
              onChange={(e) =>
                setSettings({ ...settings, cropManagementAccess: e.target.checked })
              }
              color="primary"
            />
          }
          label="Access to Crop Management"
        />
        <FormControlLabel
          control={
            <Switch
              checked={settings.farmerManagementAccess}
              onChange={(e) =>
                setSettings({ ...settings, farmerManagementAccess: e.target.checked })
              }
              color="primary"
            />
          }
          label="Access to Farmer Management"
        />
        <FormControlLabel
          control={
            <Switch
              checked={settings.reportsAccess}
              onChange={(e) =>
                setSettings({ ...settings, reportsAccess: e.target.checked })
              }
              color="primary"
            />
          }
          label="Access to Reports"
        />
      </Paper>

      {/* System Configuration Section */}
      <Paper elevation={3} sx={{ padding: '20px', borderRadius: '8px', backgroundColor: '#fff3e0' }}>
        <Typography variant="h5" gutterBottom>
          System Configuration
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Default Crop Yield Unit (kg)"
              variant="outlined"
              fullWidth
              value={settings.defaultYieldUnit}
              onChange={(e) => setSettings({ ...settings, defaultYieldUnit: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Default Revenue Currency (USD)"
              variant="outlined"
              fullWidth
              value={settings.revenueCurrency}
              onChange={(e) => setSettings({ ...settings, revenueCurrency: e.target.value })}
            />
          </Grid>
        </Grid>
        <Box sx={{ marginTop: '20px' }}>
          <Button variant="contained" color="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Box>
      </Paper>

      {/* Snackbar for Save Confirmation */}
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={() => setShowSnackbar(false)}
      >
        <Alert onClose={() => setShowSnackbar(false)} severity="success">
          Settings saved successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}
