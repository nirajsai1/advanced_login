// server.js
import express from 'express';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import db from './mondbc.js';
import User from './users.js'; 
dotenv.config();
const app = express();
app.use(express.json()); 
app.post('/api/auth/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Invalid password' });
        }
        res.status(200).json({
            _id: user._id,
            email: user.email
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.post('/api/auth/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json({
            _id: newUser._id,
            email: newUser.email
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.listen(3000, () => {
    db();
    console.log("Server running on port 3000");
});
