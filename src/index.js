const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const config = require('./config/key');

console.log('config.mongoURI', config);

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/health', require('./routes/health'));
app.use('/api/users', require('./routes/users'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/comment', require('./routes/comment'));
app.use('/api/like', require('./routes/like'));
app.use('/api/favorite', require('./routes/favorite'));

// Error messages
app.get('*', function(req, res) {
  res.status(404).send('You are in the wrong place ;)');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
