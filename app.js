const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const userRoute = require('./server/routes/routes.js');
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 8080;

const app = express();

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

//use local mongodb
/* const local_url = 'mongodb://127.0.0.1:27017/saveit_db';
mongoose.connect(local_url, { useUnifiedTopology: true, useNewUrlParser: true,
  useFindAndModify: false });
const db = mongoose.connection;
db.once('open', _ => {
  console.log('Database connected');
});

db.on('error', err => {
  console.log('Database connection error', err);
}); **/


//connect to mongodb
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(`Not connected to database ${err}`);
  } else {
    console.log('Successfully connected to database');
  }
});


app.get('/', (req, res) => {
  res.redirect('/api/notes');
});

app.use('/api/notes', userRoute);

// set up a wildcard route to catch related endpoints and outputs a response.
app.get('*', (req, res) => {
  res.status(400).json({
    message: 'This is Project Save It. Please see documentation @ {https://github.com/ShowBaba/ProjectSaveItAPI.git} for the proper routes.',
  });
});


app.listen(port, (req, res) => {
  console.log(`Running server on port ${port}`);
});

