const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors=require('cors')
const userRoutes = require('./routes/users');

dotenv.config();
connectDB(); 

const app = express();
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST'],
}));

app.get('/', (req, res) => {
  res.send('This is the backend server for the assignment.');
});

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
