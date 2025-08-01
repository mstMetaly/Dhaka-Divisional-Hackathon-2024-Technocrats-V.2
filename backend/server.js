const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./Database/database'); 


//import routes
const signupRouter = require('./routes/signupRouter');
const loginRouter = require('./routes/loginRouter');
const healthDataRouter = require('./routes/healthDataRouter');
const profileRouter = require('./routes/profileRouter');
const historyRouter = require('./routes/medicalHistoryRouter');
const emergencyRouter = require('./routes/emergencyRouter');



//creating app
const app = express();



//middleware setup
app.use(cors());
app.use(bodyParser.json());



//connect db
connectDB();



//routes setup
app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);
app.use('/api/health', healthDataRouter);
app.use('/api/profile', profileRouter);
app.use('/api/history', historyRouter);
app.use('/api/emergency', emergencyRouter);



// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });




//start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server started running on port ${PORT}`);
});
