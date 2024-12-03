import React, { useState } from 'react';
import { Paper, Typography, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';

const MedicalHistory = () => {
  const [medicalHistoryData, setMedicalHistory] = useState({
    inducedAbortion: '',
    accidentalMiscarriage: '',
    stillBirth: '',
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
    'Diabetes',
    'Hypertension',
    'Tuberculosis',
    'Pyelonephritis',
    'Thyroid Disorder',
    'Cardiac Disease',
    'Epilepsy',
    'Viral Hepatitis',
    'Preeclampsia',
    'Anaemia',
    'HIV',
  ];

  const surgeryList = [
    'Myomectomy',
    'complete perinatal tear',
    'vesicovaginal fistula',
    'stress incontinence',
  ];

  const handleMedicalHistoryChange = (e) => {
    const { name, value } = e.target;
    setMedicalHistory((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDiseaseChange = (disease) => {
    setSelectedDiseases((prev) =>
      prev.includes(disease)
        ? prev.filter((item) => item !== disease)
        : [...prev, disease]
    );
  };

  const handleSurgeryChange = (surgery) => {
    setSelectedPreviousSurgery((prev) =>
      prev.includes(surgery)
        ? prev.filter((item) => item !== surgery)
        : [...prev, surgery]
    );
  };

  return (
    <Paper sx={{ padding: '16px', mb: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Reproductive History
      </Typography>

      <TextField
        label="Induced Abortion"
        variant="outlined"
        fullWidth
        name="inducedAbortion"
        value={medicalHistoryData.inducedAbortion}
        onChange={handleMedicalHistoryChange}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Accidental Miscarriage"
        variant="outlined"
        fullWidth
        name="accidentalMiscarriage"
        value={medicalHistoryData.accidentalMiscarriage}
        onChange={handleMedicalHistoryChange}
        sx={{ mb: 2 }}
      />

      <Typography variant="h6" sx={{ mb: 2 }}>
        Previous Child History
      </Typography>
      <TextField
        label="Previous Neonatal Death Count"
        variant="outlined"
        fullWidth
        name="neonatalDeath"
        value={medicalHistoryData.neonatalDeath}
        onChange={handleMedicalHistoryChange}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Previous Stillbirth Count"
        variant="outlined"
        fullWidth
        name="stillBirth"
        value={medicalHistoryData.stillBirth}
        onChange={handleMedicalHistoryChange}
        sx={{ mb: 2 }}
      />

      <Typography variant="h6" sx={{ mb: 2 }}>
        Previous Baby with Congenital Abnormality
      </Typography>
      <TextField
        label="Count"
        variant="outlined"
        fullWidth
        name="congenitalAbnormality.count"
        value={medicalHistoryData.congenitalAbnormality.count}
        onChange={handleMedicalHistoryChange}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        name="congenitalAbnormality.description"
        value={medicalHistoryData.congenitalAbnormality.description}
        onChange={handleMedicalHistoryChange}
        sx={{ mb: 2 }}
      />

      <Typography variant="h6" sx={{ mb: 2 }}>
        Previous Labour History
      </Typography>
      <TextField
        label="Previous Preterm Labour"
        variant="outlined"
        fullWidth
        name="pretermLabor"
        value={medicalHistoryData.pretermLabor}
        onChange={handleMedicalHistoryChange}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Previous Caesarean Section"
        variant="outlined"
        fullWidth
        name="caesareanSection"
        value={medicalHistoryData.caesareanSection}
        onChange={handleMedicalHistoryChange}
        sx={{ mb: 2 }}
      />

      <Typography variant="h6" sx={{ mb: 2 }}>
        Diseases
      </Typography>
      <Button
        variant="outlined"
        onClick={() => setIsDiseaseDropdownOpen(!isDiseaseDropdownOpen)}
        sx={{ mb: 2 }}
      >
        {isDiseaseDropdownOpen ? 'Hide' : 'Select Diseases'}
      </Button>

      {isDiseaseDropdownOpen && (
        <div>
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
        </div>
      )}

      <Typography variant="h6" sx={{ mb: 2 }}>
        Previous Surgery History
      </Typography>
      <Button
        variant="outlined"
        onClick={() => setIsSurgeryDropdownOpen(!isSurgeryDropdownOpen)}
        sx={{ mb: 2 }}
      >
        {isSurgeryDropdownOpen ? 'Hide' : 'Select Previous Surgery'}
      </Button>

      {isSurgeryDropdownOpen && (
        <div>
          {surgeryList.map((surgery, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={selectedPreviousSurgery.includes(surgery)}
                  onChange={() => handleSurgeryChange(surgery)}
                />
              }
              label={surgery}
            />
          ))}
        </div>
      )}
    </Paper>
  );
};

export default MedicalHistory;
