const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8080;

// Get MongoDB Atlas credentials from .env file
const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

// Connection string for MongoDB Atlas database
const MONGO_URI = 'mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@hyperion-dev-1234.hiukfbn.mongodb.net/?retryWrites=true&w=majority';

// Options object as 2nd argument for better long-term compatibility with MongoDB Atlas
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
)
  // Promise-based approach is modern and recommended
  .then(() => console.log('Connection to MongoDB Atlas successful!'))
  .catch((err) => console.error('Error connecting to the database:', err));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Listening for HTTP requests on port ${PORT}.`);
});