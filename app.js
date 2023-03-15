const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8080;

// Get MongoDB Atlas credentials from .env file
const MONGO_USERNAME = process.env.MONGO_USERNAME; 
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

// Connection string for MongoDB Atlas database
const URI = 'mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@hyperion-dev-1234.hiukfbn.mongodb.net/?retryWrites=true&w=majority';
