const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// const path = require('path');
//
// app.use(express.static(path.join('public')));

const students = require('./routes/students');
app.use(students);

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

console.log('hello');

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
