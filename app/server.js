const express = require('express');


const app = express();

// check if there's PORT number provided from process.env, if not set static 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.info(`Server started on port ${port}`);
});