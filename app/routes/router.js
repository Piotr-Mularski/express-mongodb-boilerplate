const express = require('express');

const router = express.Router();
// seting root path for the sendFile method
const viewOptions = { root: `${process.cwd()}/app/views`}

router.get('/', (req, res) => {
	res.sendFile('index.html', viewOptions);
});

router.get('*', (req, res) => {
	res.sendFile('404.html', viewOptions);
})

module.exports = router;