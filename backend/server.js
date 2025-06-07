// const express = require('express');
// const app = express();
// const mongoose = require('mongoose')
// const dotenv = require('dotenv');
// const connectDB = require("./config/db");
// const taskRoutes = require("./routes/taskRoutes");
// connectDB();
// require('dotenv').config();
// app.use(express.json());

// app.get('/',(req,res)=>{
//   res.send("Hello the server  is up ")
// })

// app.post("/connectioncheck",(req,res)=>{
//     const value = req.body;
//     console.log(value)
//     res.status(200).send(`The value is  ${JSON.stringify(value)}`)
// }) 

// mongoose.connect(process.env.MONGO_URI).then(()=>console.log("The database is connected"))
//   .catch((error)=>console.log("There is a Error While connecting to the database", error))
  
// const PORT = process.env.PORT||5000;
// app.listen(PORT,()=>console.log(`The server is running on port ${PORT}`))


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
app.use('/api/auth',authRoutes)
app.use ('/api/auth',taskRoutes)
// Test route
app.get('/', (req, res) => {
  res.send('API is running');
});
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
