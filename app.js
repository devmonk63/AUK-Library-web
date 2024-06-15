const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const ResourceModel = require('./models/trial');
const bodyParser = require('body-parser');


const port = process.env.PORT || 2023;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/pages', express.static(path.join(__dirname, 'public', 'pages')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



mongoose.connect('mongodb://127.0.0.1:27017/Library-Trial', {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});


app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'pages', 'treror.html');
  res.sendFile(filePath);
});


app.get('/location', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'pages', 'location.html');
  res.sendFile(filePath);
});

app.get('/staff', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'pages', 'staffList.html');
  res.sendFile(filePath);
});

app.get('/staff-info', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'pages', 'staffDetails.html');
  res.sendFile(filePath);
});

app.get('/coming-soon', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'pages', 'coming.html');
  res.sendFile(filePath);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});