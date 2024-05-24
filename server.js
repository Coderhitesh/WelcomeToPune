const express = require('express');
const app = express();
const dotenv = require('dotenv')
const PORT = process.env.PORT || 3000;
const Router = require('./Router/Route')
const connectDB = require('./config/db')
dotenv.config()

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log('Server running on', PORT);
});

app.use('/v8' , Router)

connectDB()