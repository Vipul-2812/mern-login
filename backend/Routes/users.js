// backend/routes/users.js

const express = require('express');
const router = express.Router();
const User = require('../Models/User'); // Assuming you have a User model

// Get all users
router.get('/all', async (req, res) => {
    try {
        const users = await User.find({ userType: "user" }); // Only fetch users with userType "user"
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

module.exports = router;
