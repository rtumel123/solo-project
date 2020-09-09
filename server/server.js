const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/styles.css', (req, res) => {
  res.sendFile(__dirname, "../client/styles/styles.css");
});

app.listen(PORT, () => {
  console.log('Listening to Port 3000');
});