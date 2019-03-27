const express = require('express');
const path = require('path');
const router = require('./routes/router');


const app = express();
app.set('views', `${process.cwd()}/app/views/`)
app.use(express.static(path.join(__dirname, 'public')));
// use router to manage paths, starting from root
app.use('/', router); 

// check if there's PORT number provided from process.env, if not set static 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.info(`Server started on port ${port}`);
});