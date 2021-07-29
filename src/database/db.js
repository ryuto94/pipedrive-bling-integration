const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,   
  })
  .then(() => {
    console.log('Database connection successfull');
  })
  .catch((err) => console.log('Database connection failed', err));

const database = mongoose.connection;

module.exports = database;
  