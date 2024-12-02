import React, { useState, useEffect } from 'react';
import { Card } from '@mui/material';
import {
  Box, Button,Checkbox, FormControlLabel, Typography, Grid, Alert, Paper, IconButton, List, ListItem, ListItemText,TextField
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
  const [profileData, setProfileData] = useState({
    name:'',
    age:'',
    nid: '',
    phone: '',
    emergencyContact: '',
    village: '',
    upazilla: '',
    postOffice: '',
    district: '',
    division: '',
  });

  const [MedicalHistoryData, setMedicalHistory] = useState({
      inducedAbortion: '',
      accidentalMiscarriage: '',
      stillBirth:'',
      neonatalDeath: '',
      congenitalAbnormality: { count: '', description: '' },
      pretermLabor: '',
      caesareanSection: '',
    });

  const [isDiseaseDropdownOpen, setIsDiseaseDropdownOpen] = useState(false);
  const [isSurgeryDropdownOpen, setIsSurgeryDropdownOpen] = useState(false);
  const [selectedDiseases, setSelectedDiseases] = useState([]);
  const [selectedPreviousSurgery, setSelectedPreviousSurgery] = useState([]);

  const diseasesList = [
    "Diabetes",
    "Hypertension",
    "Tuberculosis",
    "Pyelonephritis",
    "Thyroid Disorder",
    "Cardiac Disease",
    "Epilepsy",
    "Viral Hepatitis",
    "Preeclampsia",
    "Anaemia",
    "HIV",
  ];

  const surgeryList = [
    "Myomectomy",
    "complete perinatal tear",
    "vesicovaginal fistula",
    "stress incontinence",
  ];

  
  
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


const [formData, setFormData] = useState({
  currentWeight: '',
  weightChange: '',
  nextMilestone: '',
});

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



  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Update the weightData state
    setWeightData({
      currentWeight: formData.currentWeight,
      weightChange: formData.weightChange,
      nextMilestone: formData.nextMilestone,
    });
  
    // Optionally clear the form
    setFormData({
      currentWeight: '',
      weightChange: '',
      nextMilestone: '',
    });
  
    // Provide user feedback
    alert('Data updated successfully!');
  };
  

  const handleOptionClick = (option) => {
    setActiveOption(option);
    if (option === 'weight') fetchWeightData();
    if (option === 'localResources') fetchLocalResources();
    if (option === 'social') fetchPosts();
    if (option === 'vaccination') fetchVaccinationHistory();
  };


  //Egula Saba korse
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  const handleProfileUpdate = () => {
    // Mock API call or state update
    console.log('Updated Profile Data:', profileData);
    alert('Profile updated successfully!');
  };

  const handleMedicalHistory = (e) => {
    const { name, value } = e.target;
    setMedicalHistory((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMedicalHistoryUpdate = () => {
    // Mock API call or state update
    console.log('Updated Profile Data:',MedicalHistoryData);
    alert('Medical History updated successfully!');
  };

  const handleDiseaseChange = (disease) => {
    setSelectedDiseases((prev) =>
      prev.includes(disease)
        ? prev.filter((item) => item !== disease)
        : [...prev, disease]
    );
  };

  const handleDiseaseOkClick = () => {
    setIsDiseaseDropdownOpen(false);
  };

  const handlePreviousSurgeryChange = (surgery) => {
    setSelectedPreviousSurgery((prev) =>
      prev.includes(surgery)
        ? prev.filter((item) => item !== surgery)
        : [...prev, surgery]
    );
  };

  const handlePreviousSurgeryOkClick = () => {
    setIsSurgeryDropdownOpen(false);
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
          <SidebarItem onClick={() => handleOptionClick('medicalHistory')}>
            <HealthAndSafety sx={{ marginRight: '10px' }} />
            <ListItemText primary="Medical History" />
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
          activeOption ==='medicalHistory' ? 'Medical History' :
            activeOption === 'risk' ? 'Risk Analysis' :
              activeOption === 'schedule' ? 'Vaccination Schedule' :
                activeOption === 'diet' ? 'Diet Chart' :
                  activeOption === 'contacts' ? 'Emergency Contacts' :
                    activeOption === 'weight' ? 'Weight & Growth Tracking' :
                      activeOption === 'localResources' ? 'Local Resources' :
                        activeOption === 'social' ? 'Social Community' :
                          activeOption === 'vaccination' ? 'Vaccination History' : 'Settings'}
        </MainTitle>

      {activeOption === 'profile' && (
  <Box>
    <SectionTitle>Personal Information</SectionTitle>
    <Paper sx={{ padding: '16px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', mb: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Basic Information</Typography>
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

    <SectionTitle>Address Information</SectionTitle>
    <Paper sx={{ padding: '16px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
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

    <ButtonStyled variant="contained" onClick={handleProfileUpdate} sx={{ mt: 3 }}>
      Update
    </ButtonStyled>
  </Box>
)}

{activeOption === 'medicalHistory' && (
  <Box sx={{ padding: '16px' }}>
      
      <Paper sx={{ padding: '16px', mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Reproductive History
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1">Miscarriage History</Typography>
          <TextField
            label="Induced Abortion"
            variant="outlined"
            fullWidth
            name="inducedAbortion"
            value={MedicalHistoryData.inducedAbortion}
            onChange={handleMedicalHistory}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Accidental Miscarriage"
            variant="outlined"
            fullWidth
            name="accidentalMiscarriage"
            value={MedicalHistoryData.accidentalMiscarriage}
            onChange={handleMedicalHistory}
          />
        </Box>

        <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1">Previous Child History </Typography>
        <TextField
          label="Previous Neonatal Death Count"
          variant="outlined"
          fullWidth
          name="neonatalDeath"
          value={MedicalHistoryData.neonatalDeath}
          onChange={handleMedicalHistory}
          sx={{ mb: 2 }}
        />
          <TextField
          label="Previous StillBirth Count"
          variant="outlined"
          fullWidth
          name="stillBirth"
          value={MedicalHistoryData.stillBirth}
          onChange={handleMedicalHistory}
          sx={{ mb: 2 }}
        />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1">Previous Baby with Congenital Abnormality</Typography>
          <TextField
            label="Count"
            variant="outlined"
            fullWidth
            name="congenitalAbnormality.count"
            value={MedicalHistoryData.congenitalAbnormality.count}
            onChange={(e) =>
              setMedicalHistory((prev) => ({
                ...prev,
                congenitalAbnormality: {
                  ...prev.congenitalAbnormality,
                  count: e.target.value,
                },
              }))
            }
            sx={{ mb: 2 }}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            name="congenitalAbnormality.description"
            value={MedicalHistoryData.congenitalAbnormality.description}
            onChange={(e) =>
              setMedicalHistory((prev) => ({
                ...prev,
                congenitalAbnormality: {
                  ...prev.congenitalAbnormality,
                  description: e.target.value,
                },
              }))
            }
          />
        </Box>
        <Typography variant="subtitle1">Previous Labour history</Typography>
        <TextField
          label="Previous Preterm Labour"
          variant="outlined"
          fullWidth
          name="pretermLabor"
          value={MedicalHistoryData.pretermLabor}
          onChange={handleMedicalHistory}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Previous Caesarean Section"
          variant="outlined"
          fullWidth
          name="caesareanSection"
          value={MedicalHistoryData.caesareanSection}
          onChange={handleMedicalHistory}
        />

<Typography variant="h6" sx={{ mb: 2 }}>Diseases</Typography>
      <Button
        variant="outlined"
        onClick={() => setIsDiseaseDropdownOpen(!isDiseaseDropdownOpen)}
        sx={{ mb: 2 }}
      >
        {isDiseaseDropdownOpen ? "Hide" : "Select Diseases"}
      </Button>

      {isDiseaseDropdownOpen && (
        <Box sx={{ pl: 2, pt: 1 }}>
          {diseasesList.map((disease, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={selectedDiseases.includes(disease)}
                  onChange={() => handleDiseaseChange(disease)}
                />
              }
              label={disease}
            />
          ))}
          <Button
            variant="contained"
            onClick={handleDiseaseOkClick}
            sx={{ mt: 2 }}
          >
            OK
          </Button>
        </Box>
      )}


  {selectedDiseases.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1">Selected Diseases:</Typography>
          <Typography variant="body1">{selectedDiseases.join(", ")}</Typography>
        </Box>
      )}

    

    <Typography variant="h6" sx={{ mb: 2 }}>Previous Surgery History</Typography>
      <Button
        variant="outlined"
        onClick={() => setIsSurgeryDropdownOpen(!isSurgeryDropdownOpen)}
        sx={{ mb: 2 }}
      >
        {isSurgeryDropdownOpen ? "Hide" : "Select Previous Surgery"}
      </Button>

      {isSurgeryDropdownOpen && (
        <Box sx={{ pl: 2, pt: 1 }}>
          {surgeryList.map((surgery, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={selectedPreviousSurgery.includes(surgery)}
                  onChange={() => handlePreviousSurgeryChange(surgery)}
                />
              }
              label={surgery}
            />
          ))}
          <Button
            variant="contained"
            onClick={handlePreviousSurgeryOkClick}
            sx={{ mt: 2 }}
          >
            OK
          </Button>
        </Box>
      )}

     {selectedPreviousSurgery.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1">Selected Surgery:</Typography>
          <Typography variant="body1">{selectedPreviousSurgery.join(", ")}</Typography>
        </Box>
      )}

    </Paper>
    <ButtonStyled variant="contained" onClick={handleMedicalHistoryUpdate} sx={{ mt: 3 }}>
      Update
    </ButtonStyled>
    </Box>
  )
};


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

