const app = require('./src/app')
const mongodb = require('./src/modules/core/mongoDb').connection
const { PORT } = require('./src/modules/core/config')

mongodb.on('error', (err) => {
	console.error(`MongoDB connection error: ${err}`);
	process.exit(-1);
});

mongodb.once('open', () => {
	console.log('MongoDB connected');
	app.listen(PORT, () => console.log("Server running on port: ", PORT))
});
