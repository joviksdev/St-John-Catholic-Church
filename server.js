const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/views')));

app.set('views', path.join(__dirname, '/views'));
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main'
  })
);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Home
app.get('/', (req, res) => {
  res.locals.metaTags = {
    title: 'Christ The King Catholic Church'
  };
  res.render('home');
});

//About
app.get('/about', (req, res) => {
  res.locals.metaTags = {
    title: 'About'
  };
  res.render('about');
});

//Parish
app.get('/parish', (req, res) => {
  res.locals.metaTags = {
    title: 'Parish'
  };
  res.render('parish');
});

//Mass schelule

app.get('/mass-schedule', (req, res) => {
  res.locals.metaTags = {
    title: 'Mass schedule'
  };
  res.render('mass-schedule');
});

//Event

app.get('/event', (req, res) => {
  res.locals.metaTags = {
    title: 'Event'
  };
  res.render('event');
});

//Contact

app.get('/contact', (req, res) => {
  res.locals.metaTags = {
    title: 'Contact'
  };
  res.render('contact');
});

//Handle Error, not found

app.use((req, res, next) => {
  res.status(404).send('404 Error, page not found');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}...`));
