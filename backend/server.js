const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();


// Connect to MongoDB
// database connect code 
const {connectDB,getClient}=require("./Databse/database");
const client=getClient();
connectDB(client);
  

//import routes
const signupRouter = require('./routes/signupRouter');
const loginRouter = require('./routes/loginRouter');


//creating app
const app = express();

//middleware setup
app.use(cors());
app.use(bodyParser.json());

//routes setup
app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);




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
