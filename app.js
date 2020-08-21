const express = require('express');


const app = express();
const port = 5000;

app.get('/', (req, res) => {
   res.status(200).json({
      message: 'Welcome to project SaveIt!'
   });
});

app.listen(port, (req, res) => {
   console.log(`Running server on port ${port}`);
});