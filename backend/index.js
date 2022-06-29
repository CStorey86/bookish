import mongoose from 'mongoose';
import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './routes/bookishRoutes';

const app = express();

//Linking external .env file
const dotenv = require('dotenv')
dotenv.config();


// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
	methods: ['GET', 'POST']
  }
});

// start the in-memory MongoDB instance
io.on('connection', (socket) => {
	socket.on("message", (msg) => {
		console.log(msg);
		io.emit('message', msg)
	})
})



// CORS setup
app.use(cors());

routes(app);

app.get('/', (req, res) => 
    res.send(`The 'Bookish' application is running on port ${process.env.PORT}`)
);

app.listen(process.env.PORT, () => 
    console.log(`The Bookish server is running on port ${process.env.PORT}`)
);


