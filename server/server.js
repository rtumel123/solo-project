const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  // res.send('i made it');
  const friends = [
    {id: 1, name: 'Ryan'},
    {id: 1, name: 'Ryan'},
    {id: 1, name: 'Ryan'}
  ];
  res.json(friends);
});

app.listen(PORT, () => {
  console.log('Listening to Port 3000');
});