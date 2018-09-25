'use strict';
//initialized dotenv reader
require('dotenv').config();

//Setup transpiler
require('babel-register')({
  presets: ['env'],
});

//setup mongo database
import mongoose from 'mongoose';
mongoose.connect(process.env.MONGODB_URI);

//start express server
const app = require('./src/app.js');
app.listen(process.env.PORT, () => {
  console.log(`Server is up and running on port: ${process.env.PORT}`);
});
