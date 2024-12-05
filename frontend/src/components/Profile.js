import React, { useState } from 'react';
import { Paper, Typography, TextField,Button } from '@mui/material';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    age: '',
    phone: '',
    emergencyContact: '',
    village: '',
    upazilla: '',
    postOffice: '',
    district: '',
    division: '',
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveUpdates = async () => {
    // Validate that all fields are filled (optional)
    if (Object.values(profileData).includes('')) {
      alert('Please fill out all fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/profile/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData), // Send profileData to backend
      });

      const result = await response.json();

      if (response.ok) {
        alert('Profile updated successfully');
        // Optionally reset the form or update UI
      } else {
        alert(`Error: ${result.message || 'Something went wrong'}`);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  };

  return (
    <div>
      <Paper sx={{ padding: '16px', mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Basic Information
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          name="name"
          value={profileData.name}
          onChange={handleProfileChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Age"
          variant="outlined"
          fullWidth
          name="age"
          value={profileData.age}
          onChange={handleProfileChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Phone"
          variant="outlined"
          fullWidth
          name="phone"
          value={profileData.phone}
          onChange={handleProfileChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Emergency Contact"
          variant="outlined"
          fullWidth
          name="emergencyContact"
          value={profileData.emergencyContact}
          onChange={handleProfileChange}
          sx={{ mb: 2 }}
        />
      </Paper>

      <Paper sx={{ padding: '16px' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Address Information
        </Typography>
        <TextField
          label="Village/Ward"
          variant="outlined"
          fullWidth
          name="village"
          value={profileData.village}
          onChange={handleProfileChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Upazilla"
          variant="outlined"
          fullWidth
          name="upazilla"
          value={profileData.upazilla}
          onChange={handleProfileChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Post Office"
          variant="outlined"
          fullWidth
          name="postOffice"
          value={profileData.postOffice}
          onChange={handleProfileChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="District"
          variant="outlined"
          fullWidth
          name="district"
          value={profileData.district}
          onChange={handleProfileChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Division"
          variant="outlined"
          fullWidth
          name="division"
          value={profileData.division}
          onChange={handleProfileChange}
          sx={{ mb: 2 }}
        />
      </Paper>
      <Button
  variant="contained"
  color="primary"
  onClick={handleSaveUpdates}
  sx={{
    fontWeight: 'bold', // Bold text
    backgroundColor: '#1976d2', // Custom background color (Material UI blue)
    padding: '10px 20px', // Padding for better spacing
    borderRadius: '8px', // Rounded corners
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    transition: 'all 0.3s ease', // Smooth transition for hover effect
    '&:hover': {
      backgroundColor: '#1565c0', // Darker blue on hover
      boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)', // Larger shadow on hover
    },
    '&:active': {
      backgroundColor: '#0d47a1', // Even darker blue when clicked
    },
  }}
>
        Save Updates
      </Button>
    </div>
    
  );
};

export default Profile;

