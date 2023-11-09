const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const db = new sqlite3.Database('habits.db');

app.get('/api/data', (req, res) => {
  // Execute a query to fetch data from the database
  db.all('SELECT * FROM your_table', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Add more routes for inserting, updating, or deleting data

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
