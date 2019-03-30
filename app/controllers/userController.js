const mongoose = require('mongoose');
const UserModel = require('./../models/UserModel');

exports.addUser = async (req, res) => {
	const user = new UserModel(req.body);
	try {
		const savedUser = await user.save();
		console.log('succesfully saved new user: ', savedUser);
		res.status(201).redirect('/');
	} catch (err) {
		console.error('Cannot save the user', err);
		res.status(400).redirect('/');
	}
};
