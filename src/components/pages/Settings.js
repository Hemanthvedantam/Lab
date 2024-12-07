import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  FormControlLabel,
  TextField,
  Button,
  Snackbar,
  Alert,
  Switch,
} from "@mui/material";

export default function Settings() {
  const [settings, setSettings] = useState({
    newUser: "",
    userRole: "",
    emailNotifications: false,
    smsNotifications: false,
    cropManagementAccess: true,
    farmerManagementAccess: true,
    reportsAccess: false,
    defaultYieldUnit: "kg",
    revenueCurrency: "USD",
  });

  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSaveChanges = () => {
    setShowSnackbar(true);
    setSnackbarMessage("Settings saved successfully!");
  };

  const handleAddUser = () => {
    if (settings.newUser && settings.userRole) {
      setShowSnackbar(true);
      setSnackbarMessage(`${settings.newUser} added as ${settings.userRole} successfully!`);
      setSettings({ ...settings, newUser: "", userRole: "" });
    } else {
      setShowSnackbar(true);
      setSnackbarMessage("Please fill in both user name and role.");
    }
  };

  return (
    <Box
      sx={{
        padding: "30px",
        backgroundColor: "#f5f6fa",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          padding: "20px",
          backgroundColor: "#00796b",
          color: "#fff",
          borderRadius: "8px",
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Admin Configuration
        </Typography>
        <Typography variant="body1">
          Configure global settings for the Agriculture Management System
        </Typography>
      </Box>

      {/* User Management Section */}
      <Paper
        elevation={3}
        sx={{
          padding: "25px",
          borderRadius: "10px",
          backgroundColor: "#e3f2fd",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "15px" }}>
          User Management
        </Typography>
        <Box sx={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <TextField
            label="Add New User"
            variant="outlined"
            fullWidth
            value={settings.newUser}
            onChange={(e) => setSettings({ ...settings, newUser: e.target.value })}
            sx={{ flex: "1 1 300px" }}
          />
          <TextField
            label="Assign Role (Admin/User)"
            variant="outlined"
            fullWidth
            value={settings.userRole}
            onChange={(e) => setSettings({ ...settings, userRole: e.target.value })}
            sx={{ flex: "1 1 300px" }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAddUser}
            sx={{ flex: "1 1 150px", fontWeight: "bold" }}
          >
            Add User
          </Button>
        </Box>
      </Paper>

      {/* Notification Settings Section */}
      <Paper
        elevation={3}
        sx={{
          padding: "25px",
          borderRadius: "10px",
          backgroundColor: "#fffde7",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "15px" }}>
          Notification Settings
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
        </Box>
      </Paper>

      {/* Access Control Section */}
      <Paper
        elevation={3}
        sx={{
          padding: "25px",
          borderRadius: "10px",
          backgroundColor: "#e8f5e9",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "15px" }}>
          Module Access Control
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
                onChange={(e) => setSettings({ ...settings, reportsAccess: e.target.checked })}
                color="primary"
              />
            }
            label="Access to Reports"
          />
        </Box>
      </Paper>

      {/* System Configuration Section */}
      <Paper
        elevation={3}
        sx={{
          padding: "25px",
          borderRadius: "10px",
          backgroundColor: "#fff3e0",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "15px" }}>
          System Configuration
        </Typography>
        <Box sx={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <TextField
            label="Default Crop Yield Unit (kg)"
            variant="outlined"
            fullWidth
            value={settings.defaultYieldUnit}
            onChange={(e) => setSettings({ ...settings, defaultYieldUnit: e.target.value })}
            sx={{ flex: "1 1 300px" }}
          />
          <TextField
            label="Default Revenue Currency (USD)"
            variant="outlined"
            fullWidth
            value={settings.revenueCurrency}
            onChange={(e) => setSettings({ ...settings, revenueCurrency: e.target.value })}
            sx={{ flex: "1 1 300px" }}
          />
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveChanges}
            sx={{ fontWeight: "bold" }}
          >
            Save Changes
          </Button>
        </Box>
      </Paper>

      {/* Snackbar for Feedback */}
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={() => setShowSnackbar(false)}
      >
        <Alert onClose={() => setShowSnackbar(false)} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
