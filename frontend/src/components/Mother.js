import React, { useState, useEffect } from 'react';
import { Card } from '@mui/material';
import {
  Box, Button, Typography, Grid, Alert, Paper, IconButton, List, ListItem, ListItemText,
} from '@mui/material';
import {
  CalendarToday, Contacts, LocalDining, HealthAndSafety, Settings, Person, Notifications,
} from '@mui/icons-material';
import { styled } from '@mui/system';

// Styled Components for Sidebar and Content Area
const Container = styled(Box)({
  display: 'flex',
  height: '100vh',
  backgroundColor: '#f5f5f5',
});

const Sidebar = styled(Box)({
  width: '250px',
  backgroundColor: '#00796b',
  color: '#fff',
  paddingTop: '20px',
  boxShadow: '4px 0 12px rgba(0, 0, 0, 0.1)',
  height: '100vh',
});

const SidebarItem = styled(ListItem)({
  padding: '15px',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#004d40',
    cursor: 'pointer',
  },
});

const ContentArea = styled(Box)({
  flex: 1,
  padding: '20px',
  backgroundColor: '#fff',
  overflowY: 'auto',
  boxShadow: 'inset 0px 0px 10px rgba(0, 0, 0, 0.1)',
});

const SectionTitle = styled(Typography)({
  fontSize: '1.25rem',
  fontWeight: 500,
  marginBottom: '20px',
  color: '#00796b',
});

const ButtonStyled = styled(Button)({
  backgroundColor: '#00796b',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#004d40',
  },
  borderRadius: '8px',
  padding: '8px 16px',
  marginTop: '10px',
});

const CardTitle = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '8px',
  fontSize: '1.1rem',
});

const CardContent = styled(Box)({
  backgroundColor: '#ffffff',
  padding: '16px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const IconBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  borderRadius: '50%',
  backgroundColor: '#f1f1f1',
  margin: '8px',
  width: '50px',
  height: '50px',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#004d40',
  },
});

const MainTitle = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#00796b',
});

function Mother() {
  const [activeOption, setActiveOption] = useState('profile');
  const [schedule, setSchedule] = useState([]);
  const [dietChart, setDietChart] = useState([]);
  const [emergencyContacts, setEmergencyContacts] = useState([]);
  const [riskAnalysis, setRiskAnalysis] = useState(null);
  const [weightData, setWeightData] = useState(null);
  const [localResources, setLocalResources] = useState([]);
  const [posts, setPosts] = useState([]);
  const [vaccinationHistory, setVaccinationHistory] = useState([]);
  const [milestones, setMilestones] = useState([
    { week: 12, milestone: "First ultrasound completed!" },
    { week: 22, milestone: "Felt baby’s first movement!" },
  ]);

  const fetchWeightData = () => {
    // Mock API call to fetch weight data
    setWeightData({
      currentWeight: 70, // kg
      previousWeight: 68, // kg
      weightChange: 2, // kg gained
      nextMilestone: 'You’re almost at your 3-month weight milestone!',
    });
  };

  const fetchLocalResources = () => {
    // Mock data for local resources (you can integrate with Google Places API here)
    setLocalResources([
      { name: 'City Hospital', vicinity: '123 Main St' },
      { name: 'Pregnancy Clinic', vicinity: '456 Health Ave' },
    ]);
  };

  const fetchPosts = () => {
    // Mock data for social posts (this can be replaced with Firebase)
    setPosts([
      { author: 'Anna', content: 'Just got my first ultrasound today! So excited!' },
      { author: 'Maria', content: 'Has anyone experienced morning sickness at week 12?' },
    ]);
  };

  const fetchVaccinationHistory = () => {
    // Mock data for vaccination history
    setVaccinationHistory([
      { date: '2024-08-15', vaccine: 'Flu Vaccine' },
      { date: '2024-10-01', vaccine: 'Tdap (Tetanus, Diphtheria, Pertussis)' },
    ]);
  };

  const handleOptionClick = (option) => {
    setActiveOption(option);
    if (option === 'weight') fetchWeightData();
    if (option === 'localResources') fetchLocalResources();
    if (option === 'social') fetchPosts();
    if (option === 'vaccination') fetchVaccinationHistory();
  };

  return (
    <Container>
      {/* Sidebar Section */}
      <Sidebar>
        <List>
          <SidebarItem onClick={() => handleOptionClick('profile')}>
            <Person sx={{ marginRight: '10px' }} />
            <ListItemText primary="Profile" />
          </SidebarItem>
          <SidebarItem onClick={() => handleOptionClick('risk')}>
            <HealthAndSafety sx={{ marginRight: '10px' }} />
            <ListItemText primary="Risk Analysis" />
          </SidebarItem>
          <SidebarItem onClick={() => handleOptionClick('schedule')}>
            <CalendarToday sx={{ marginRight: '10px' }} />
            <ListItemText primary="Vaccination Schedule" />
          </SidebarItem>
          <SidebarItem onClick={() => handleOptionClick('diet')}>
            <LocalDining sx={{ marginRight: '10px' }} />
            <ListItemText primary="Diet Chart" />
          </SidebarItem>
          <SidebarItem onClick={() => handleOptionClick('contacts')}>
            <Contacts sx={{ marginRight: '10px' }} />
            <ListItemText primary="Emergency Contacts" />
          </SidebarItem>
          <SidebarItem onClick={() => handleOptionClick('settings')}>
            <Settings sx={{ marginRight: '10px' }} />
            <ListItemText primary="Settings" />
          </SidebarItem>
          <SidebarItem onClick={() => handleOptionClick('weight')}>
            <HealthAndSafety sx={{ marginRight: '10px' }} />
            <ListItemText primary="Weight & Growth" />
          </SidebarItem>
          <SidebarItem onClick={() => handleOptionClick('localResources')}>
            <CalendarToday sx={{ marginRight: '10px' }} />
            <ListItemText primary="Local Resources" />
          </SidebarItem>
          <SidebarItem onClick={() => handleOptionClick('social')}>
            <Notifications sx={{ marginRight: '10px' }} />
            <ListItemText primary="Social Community" />
          </SidebarItem>
          <SidebarItem onClick={() => handleOptionClick('vaccination')}>
            <CalendarToday sx={{ marginRight: '10px' }} />
            <ListItemText primary="Vaccination History" />
          </SidebarItem>
        </List>
      </Sidebar>

      {/* Content Area Section */}
      <ContentArea>
        <MainTitle>
          {activeOption === 'profile' ? 'Your Profile' :
            activeOption === 'risk' ? 'Risk Analysis' :
              activeOption === 'schedule' ? 'Vaccination Schedule' :
                activeOption === 'diet' ? 'Diet Chart' :
                  activeOption === 'contacts' ? 'Emergency Contacts' :
                    activeOption === 'weight' ? 'Weight & Growth Tracking' :
                      activeOption === 'localResources' ? 'Local Resources' :
                        activeOption === 'social' ? 'Social Community' :
                          activeOption === 'vaccination' ? 'Vaccination History' : 'Settings'}
        </MainTitle>

        {activeOption === 'weight' && (
          <Box sx={{ mb: 3 }}>
            <SectionTitle>Weight & Growth Tracking</SectionTitle>
            <CardContent>
              {weightData ? (
                <>
                  <Typography>Your current weight: {weightData.currentWeight} kg</Typography>
                  <Typography>Weight gained: {weightData.weightChange} kg</Typography>
                  <Typography>{weightData.nextMilestone}</Typography>
                </>
              ) : (
                <Typography>Loading weight data...</Typography>
              )}
            </CardContent>
          </Box>
        )}

        {activeOption === 'localResources' && (
          <Box sx={{ mb: 3 }}>
            <SectionTitle>Local Resources</SectionTitle>
            <ButtonStyled variant="contained" onClick={fetchLocalResources}>
              Find Nearby Doctors/Clinics
            </ButtonStyled>
            {localResources.length > 0 ? (
              <Grid container spacing={2}>
                {localResources.map((resource, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Paper sx={{ padding: '16px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
                      <CardTitle>{resource.name}</CardTitle>
                      <Typography>Address: {resource.vicinity}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography>No local resources found.</Typography>
            )}
          </Box>
        )}

        {activeOption === 'social' && (
          <Box sx={{ mb: 3 }}>
            <SectionTitle>Social Community</SectionTitle>
            <ButtonStyled variant="contained" onClick={fetchPosts}>
              Load Community Posts
            </ButtonStyled>
            {posts.length > 0 ? (
              <Grid container spacing={2}>
                {posts.map((post, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Card sx={{ padding: '16px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
                      <Typography variant="h6">{post.author}</Typography>
                      <Typography>{post.content}</Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography>No community posts yet.</Typography>
            )}
          </Box>
        )}

        {activeOption === 'vaccination' && (
          <Box sx={{ mb: 3 }}>
            <SectionTitle>Vaccination History</SectionTitle>
            <ButtonStyled variant="contained" onClick={fetchVaccinationHistory}>
              View Vaccination History
            </ButtonStyled>
            {vaccinationHistory.length > 0 ? (
              <Grid container spacing={2}>
                {vaccinationHistory.map((vaccine, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Paper sx={{ padding: '16px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
                      <CardTitle>{vaccine.date}</CardTitle>
                      <Typography>{vaccine.vaccine}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography>No vaccination records found.</Typography>
            )}
          </Box>
        )}
      </ContentArea>
    </Container>
  );
}

export default Mother;

