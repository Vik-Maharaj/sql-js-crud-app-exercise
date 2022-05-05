const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
  host: '127.0.0.1',
  user: 'root',
  password: 'Nimrod2x1$$1',
  database: 'inventory_db',
  },
console.log('connected to the database')
);



app.get('/books', (req, res) => {
  db.query('SELECT * FROM books;', null, (err, result) => {
    if (err) {
      console.error(err);
      res.json(err);
    } else {
      res.json(result);
    }
  });
})


app.post('/book', (req, res) => {
  const { name } = req.body;
  db.query('INSERT INTO books (book_name) VALUES (?)', name, (err, result) => {
    if (err) {
      console.error(err);
      res.json(err);
    } else {
      res.json({
        message: 'book added successfully',
        result})
    }
  })
});




app.listen(PORT, () => {
  console.log(`NOW listening on http://localhost:${PORT}`);
});