const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Import Car controller
const Car = require('./controllers/Car_controller');


const app = express();

const ENDPOINT = '/api';
const PORT = process.env.PORT || 8080;

// Get MongoDB Atlas credentials from .env file
const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

// Connection string for MongoDB Atlas database
const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@hyperion-dev-1234.hiukfbn.mongodb.net/hyperd?retryWrites=true&w=majority`;

// Options object as 2nd argument for better long-term compatibility with MongoDB Atlas
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  // Promise-based approach is modern and recommended
  .then(() => console.log('Connection to MongoDB Atlas successful!'))
  .catch((err) => console.error('Error connecting to the database:', err));

// Middleware
 app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


app.get(ENDPOINT, Car.findAll);

app.post(ENDPOINT, Car.create);

app.put(ENDPOINT, Car.updateOne);

app.delete(ENDPOINT, Car.deleteOne);

app.listen(PORT, () => {
  console.log(`Listening for HTTP requests on port ${PORT}.`);
});