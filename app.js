const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 8080;

// Connection string for MongoDB Atlas database
const URI = 'mongodb+srv://ahf23:<password>@hyperion-dev-1234.hiukfbn.mongodb.net/?retryWrites=true&w=majority';
