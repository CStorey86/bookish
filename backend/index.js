import express from 'express'
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './routes/bookishRoutes';

//details to be put in .env file later
const app = express();
const PORT = 4000;
const uri = 'mongodb+srv://claire:llamas@cluster0.ilicq.mongodb.net/bookish?retryWrites=true&w=majority';

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//CORS setup
app.use(cors());

routes(app);

app.get('/',(req,res) =>
    res.send(`Your Bookish application is running on port ${PORT}`)
);

app.listen(PORT,() =>           
    console.log(`Your Bookish server is running on port ${PORT}`)
);