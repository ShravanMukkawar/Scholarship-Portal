require('dotenv').config();
const express = require('express');
const connectDB = require('./config/mongo');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(cors());
// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
const userRouter = require('./routes/auth');
const chatRouter=require('./routes/chat')
const contactRouter=require('./routes/contact')
const applyRouter=require('./routes/apply')
app.use('/user', userRouter);
app.use('/chat',chatRouter);
app.use('/contact',contactRouter);
app.use('/apply',applyRouter);

// Connect to MongoDB
connectDB()
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((error) => console.error("MongoDB connection failed:", error));

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
