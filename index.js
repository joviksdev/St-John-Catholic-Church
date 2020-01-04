const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');

const router = express.Route();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  const path = url.parse(req.url, true);
  console.log(path.pathname);
  res.send('./public/index.html', { root: __dirname });
});

app.use((req, res, next) => {
  res.status(404).send('404 Error, page not found');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}...`));
