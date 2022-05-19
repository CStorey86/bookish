const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const routes = require('./routes/bookishRoutes');

//Linking external .env file
const dotenv = require('dotenv')
dotenv.config();

//Definining Express application
const app = express();
// adding Helmet to enhance my API's security
    app.use(helmet());

//Using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

const http = require('http');
const server = http.createServer(app);

mongoose
	.connect(process.env.MONGO_URI,
		{ 
			useNewUrlParser: true,
		})
	.then(() => {
	})
	.catch((error) => {
		console.log("Database connection failed. Exiting now...");
		console.error(error);
		process.exit(1);
	  });

app.use(express.json())
app.use(cors());
app.use(morgan('combined'));
app.use('/api', routes);

const api = server.listen(process.env.API_PORT, () => {
	console.log("Bookish Server has started on port: " + process.env.API_PORT)
})

module.exports = api;

