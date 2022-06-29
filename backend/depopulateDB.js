//////////////////////////////////    CODE TO POPULATE MONGO DB - BASED ON MODELS    //////////////////////////////////
const mongoose = require('mongoose');
const User = require('./models/userModel');
const Request = require('./models/requestModel');
require('dotenv').config();


async function depopulateDB() {
    try{
        // USERS
        await User.deleteOne({firstName: 'Angela'});
        await User.deleteOne({firstName: 'Basil'});
        await User.deleteOne({firstName: 'Claire'});
        await User.deleteOne({firstName: 'David'});
        await User.deleteOne({firstName: 'Emma'});
        await User.deleteOne({firstName: 'Fred'});
        // REQUESTS
        await Request.deleteOne({title: 'Cofefe'});
        await Request.deleteOne({title: 'Wine and Cheese sampling'});
        await Request.deleteOne({title: 'What did Unions every do for us? - A guide to the importance of workers uniting'});
        await Request.deleteOne({title: '100 Reasons why Claire deserves a first'});
        await Request.deleteOne({title: 'Statistics and sums to impress'});

    } catch (error) {
        console.log(error);
    }
    mongoose.connection.close();

}

mongoose 
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
    })   
    .then(() => {
        depopulateDB()
        
    })
    .catch(err => console.log(err));



