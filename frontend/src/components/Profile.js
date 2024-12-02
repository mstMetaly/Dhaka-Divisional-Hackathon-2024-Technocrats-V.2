import React, { useState } from 'react';
import { Paper, Typography, TextField } from '@mui/material';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    age: '',
    nid: '',
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
          label="NID"
          variant="outlined"
          fullWidth
          name="nid"
          value={profileData.nid}
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
    </div>
  );
};

export default Profile;

