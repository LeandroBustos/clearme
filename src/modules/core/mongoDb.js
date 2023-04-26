const mongoose = require('mongoose');
const config = require('./config')

mongoose.connect(config.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose;

module.exports = db