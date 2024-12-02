import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Button, TextField, Box, Typography, Grid, Paper, Modal } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../images/background.jpg';

// Styled components
const Container = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
}));

const LoginCard = styled(Paper)(() => ({
  padding: '32px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'rgba(255, 255, 255, 0.85)', // Semi-transparent for readability
  maxWidth: '400px',
  width: '100%',
}));

const ButtonStyled = styled(Button)(() => ({
  backgroundColor: '#00796b',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#004d40',
  },
  borderRadius: '8px',
  padding: '10px 16px',
  width: '100%',
}));

const SectionTitle = styled(Typography)(() => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#00796b',
  marginBottom: '20px',
}));

function Login() {
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber,setphoneNumber] = useState('');
  const [openSignUp, setOpenSignUp] = useState(false);
  const [signUpPhone, setSignUpPhone] = useState('');
  const [signUpNid, setSignUpNid] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role && password && phoneNumber) {
      if (role === 'mother') {
        navigate('/mother');
      } else if (role === 'worker') {
        navigate('/health-worker');
      } else if (role === 'official') {
        navigate('/official-personnel');
      } else {
        alert('Invalid role selected');
      }
    } else {
      alert('Please enter both role, Phone Number and password');
    }
  };

  const handleSignUp = () => {
    if (!signUpPhone || !signUpNid || !signUpPassword || !confirmPassword) {
      alert('Please fill out all fields');
      return;
    }
    if (signUpPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert('Successful account creation');
    setOpenSignUp(false);
    setSignUpPhone('');
    setSignUpNid('');
    setphoneNumber('');
    setSignUpPassword('');
    setConfirmPassword('');
  };

  return (
    <Container>
      <LoginCard>
        <SectionTitle>Login</SectionTitle>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              select
              label="Select Role"
              fullWidth
              value={role}
              onChange={(e) => setRole(e.target.value)}
              SelectProps={{
                native: true,
              }}
              sx={{ mb: 2 }}
            >
              <option value="">Select Role</option>
              <option value="mother">Mother</option>
              <option value="worker">Health Worker</option>
              <option value="official">Official Personnel</option>
            </TextField>
            <TextField
              label="Phone Number"
              type="number"
              fullWidth
              value={phoneNumber}
              onChange={(e) => setphoneNumber(e.target.value)}
              sx={{ mb: 3 }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 3 }}
            />
            <ButtonStyled onClick={handleLogin}>Login</ButtonStyled>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              fullWidth
              color="secondary"
              onClick={() => setOpenSignUp(true)}
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </LoginCard>

      {/* Sign-Up Modal */}
      <Modal open={openSignUp} onClose={() => setOpenSignUp(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Sign Up
          </Typography>
          <TextField
            label="Phone Number"
            fullWidth
            value={signUpPhone}
            onChange={(e) => setSignUpPhone(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="NID Number"
            fullWidth
            value={signUpNid}
            onChange={(e) => setSignUpNid(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            sx={{ mb: 3 }}
          />
          <ButtonStyled onClick={handleSignUp} sx={{ mb: 2 }}>
            Sign Up
          </ButtonStyled>
          <Button
            variant="outlined"
            fullWidth
            color="secondary"
            onClick={() => setOpenSignUp(false)}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </Container>
  );
}

export default Login;

