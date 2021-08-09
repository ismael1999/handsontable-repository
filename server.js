const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jobs = require('./routes/api/jobs');
const keys = require('./config/keys');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const app = express();

const db = keys.mongoURI;
mongoose.connect(db, { useNewUrlParser: 
    true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));

app.use('/api/jobs', jobs);

const port = process.env.PORT || 5000;

app.listen(port, () => 
console.log(`App listening on port ${port}`));
