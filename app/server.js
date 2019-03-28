const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const router = require('./routes/router');

const app = express();
// initialize dotenv to be able to get access to .env files values
dotenv.config();

app.set('views', `${process.cwd()}/app/views/`);
app.use(express.static(path.join(__dirname, 'public')));

// make mongoose use ES6 Promises
mongoose.Promise = global.Promise;

// connect to the database
const database = mongoose.connect(process.env.MLAB_URI, { useNewUrlParser: true });
database.then(() => {
	console.log('connected to the database');
}).catch((err) => {
	console.error('Error when connecting to database: ', err);
});

// use router to manage paths, starting from root
app.use('/', router);

// check if there's PORT number provided from process.env, if not set static 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.info(`Server started on port ${port}`);
});
