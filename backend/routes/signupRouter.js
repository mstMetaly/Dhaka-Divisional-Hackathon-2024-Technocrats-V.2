// routes/signupRoute.js
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../Databse/models');

const router = express.Router();

// Signup route
router.post('/', async (req, res) => {
    try {
        const { phone, nid, password } = req.body;

        // Validate input
        if (!phone || !nid || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ phone });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            phone,
            nid,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
