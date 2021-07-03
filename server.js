const express = require('express');
const pino = require('express-pino-logger')();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(pino);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.json({ greeting: `Hello ${name}!` });
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);