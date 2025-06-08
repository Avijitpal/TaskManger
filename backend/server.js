const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // this will connect to MongoDB
const authRoutes = require('./routes/authRoutes')
const taskRoutes = require('./routes/taskRoutes')


// Load env vars
dotenv.config()
// Connect to MongoDB
connectDB();
const app = express()
// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/auth',authRoutes)//for login and register. 
app.use ('/api/tasks',taskRoutes)//for CRUD operations. 

// Test route
app.get('/', (req, res) => {
  res.send('API is running');
});
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
