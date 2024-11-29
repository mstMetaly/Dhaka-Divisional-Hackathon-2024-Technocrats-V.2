// import React, { useState } from 'react';
// import { styled } from '@mui/system';
// import { Button, TextField, Box, Typography, Grid, Paper } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// // Styled components using MUI's system
// const Container = styled(Box)({
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   minHeight: '100vh',
//   backgroundColor: '#f5f5f5',
// });

// const LoginCard = styled(Paper)({
//   padding: '32px',
//   borderRadius: '12px',
//   boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//   backgroundColor: '#ffffff',
//   maxWidth: '400px',
//   width: '100%',
// });

// const ButtonStyled = styled(Button)({
//   backgroundColor: '#00796b',
//   color: '#fff',
//   '&:hover': {
//     backgroundColor: '#004d40',
//   },
//   borderRadius: '8px',
//   padding: '10px 16px',
//   width: '100%',
// });

// const SectionTitle = styled(Typography)({
//   fontSize: '1.5rem',
//   fontWeight: 'bold',
//   color: '#00796b',
//   marginBottom: '20px',
// });

// function Login() {
//   const [role, setRole] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (role === 'mother') {
//       navigate('/mother');
//     } else if (role === 'worker') {
//       navigate('/health-worker');
//     } else if (role === 'official') {
//       navigate('/official-personnel');
//     } else {
//       alert('Please select a valid role');
//     }
//   };

//   return (
//     <Container>
//       <LoginCard>
//         <SectionTitle>Login</SectionTitle>
//         <Grid container spacing={2} justifyContent="center">
//           <Grid item xs={12}>
//             <TextField
//               select
//               label="Select Role"
//               fullWidth
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               SelectProps={{
//                 native: true,
//               }}
//               sx={{ mb: 3 }}
//             >
//               <option value="">Select Role</option>
//               <option value="mother">Mother</option>
//               <option value="worker">Health Worker</option>
//               <option value="official">Official Personnel</option>
//             </TextField>
//             <ButtonStyled onClick={handleLogin}>
//               Login
//             </ButtonStyled>
//           </Grid>
//         </Grid>
//       </LoginCard>
//     </Container>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Button, TextField, Box, Typography, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../images/background.jpg';


// Styled components using MUI's system
const Container = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundImage: ""
, // Correct path to the image in the public folder
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
}));

const LoginCard = styled(Paper)(() => ({
  padding: '32px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'rgba(255, 255, 255, 0.85)', // semi-transparent background to make text readable
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
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === 'mother') {
      navigate('/mother');
    } else if (role === 'worker') {
      navigate('/health-worker');
    } else if (role === 'official') {
      navigate('/official-personnel');
    } else {
      alert('Please select a valid role');
    }
  };

  return (
    <Container>
      <LoginCard>
        <SectionTitle>Login</SectionTitle>
        <Grid container spacing={2} justifyContent="center">
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
              sx={{ mb: 3 }}
            >
              <option value="">Select Role</option>
              <option value="mother">Mother</option>
              <option value="worker">Health Worker</option>
              <option value="official">Official Personnel</option>
            </TextField>
            <ButtonStyled onClick={handleLogin}>
              Login
            </ButtonStyled>
          </Grid>
        </Grid>
      </LoginCard>
    </Container>
  );
}

export default Login;
