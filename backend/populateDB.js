//////////////////////////////////    CODE TO POPULATE MONGO DB - BASED ON MODELS    //////////////////////////////////
const mongoose = require('mongoose');
const User = require('./models/userModel');
const Request = require('./models/requestModel');

const  bcrypt = require('bcryptjs');
require('dotenv').config();


async function populateDB() {

//////////////////////////////////    USERS   //////////////////////////////////

    // 6 users: 1 Admin, 2 Employees, and 3 Standard Users
    const encryptedPassword = await bcrypt.hash('password', 10);

    const exampleAuthoriser = new User({
        firstName: 'Angela',
        lastName: 'Jones',
        email: 'angela@email.com',
        password: encryptedPassword,
        isAdmin: true,
        isEmployee: false,
        createdDate: '2022-05-05T13:10:00.000+00:00',
    })

    const exampleEmployee1 = new User({
        firstName: 'Basil',
        lastName: 'Brush',
        email: 'basil@email.com',
        password: encryptedPassword,
        isAdmin: false,
        isEmployee: true,
        createdDate: '2022-05-05T13:10:00.000+00:00',
    })

    const exampleEmployee2 = new User({
        firstName: 'Emma',
        lastName: 'Jenkins',
        email: 'emma@email.com',
        password: encryptedPassword,
        isAdmin: false,
        isEmployee: true,
        createdDate: '2022-05-05T13:10:00.000+00:00',
    })

    const exampleClient1 = new User({
        firstName: 'Claire',
        lastName: 'Storey',
        email: 'claire@email.com',
        password: encryptedPassword,
        isAdmin: false,
        isEmployee: false,
        
        createdDate: '2022-05-05T13:10:00.000+00:00',
    })

    const exampleClient2 = new User({
        firstName: 'David',
        lastName: 'Smith',
        email: 'david@email.com',
        password: encryptedPassword,
        isAdmin: false,
        isEmployee: false,
        createdDate: '2022-05-05T13:10:00.000+00:00',
    })

    const exampleClient3 = new User({
        firstName: 'Fred',
        lastName: 'Weasley',
        email: 'fred@email.com',
        password: encryptedPassword,
        isAdmin: false,
        isEmployee: false,
        createdDate: '2022-05-05T13:10:00.000+00:00',
    })

    try{
        await exampleAuthoriser.save();
        await exampleEmployee1.save();
        await exampleEmployee2 .save();
        await exampleClient1.save();
        await exampleClient2.save();
        await exampleClient3.save();

        //////////////////////////////////    REQUESTS   ///////////////////////////////

        const request1 = new Request({
            title: 'Cofefe',
            author: 'Donald Trump',
            year: '2018',
            publisher: 'Trump Publishing',
            format: 'Audio Book',
            price: '49.99',
            userID: '62860fe823c9c0ba976b9ba7',
            status: 'Awaiting Allocation',
            dateStatusChange: '2022-05-01T13:10:00.000+00:00',
            allocatedTo: '',
            authorisedBy: '',
            isComplete: false,
        })

        const request2 = new Request({
            title: 'Wine and Cheese sampling',
            author: 'Boris Johnson',
            year: '2021',
            publisher: 'ToryHQ',
            format: 'Book',
            price: '89.99',
            userID: '62860fe823c9c0ba976b9ba7',
            status: 'Allocated',
            dateStatusChange: '2022-05-01T13:10:00.000+00:00',
            allocatedTo: '62bac539cd9ac9e3bac860fb',
            authorisedBy: '',
            isComplete: false,
        })

        const request3 = new Request({
            title: 'What did Unions every do for us? - A guide to the importance of workers uniting',
            author: 'UCC Hallam',
            year: '2022',
            publisher: 'UCU',
            format: 'Braille',
            price: '9.99',
            userID: '62bac539cd9ac9e3bac860fd',
            status: 'Requires further information',
            dateStatusChange: '2022-05-01T13:10:00.000+00:00',
            allocatedTo: '62bac539cd9ac9e3bac860fb',
            authorisedBy: '',
            isComplete: false,
        })    

            const request4 = new Request({
            title: '100 Reasons why Claire deserves a first',
            author: 'Claire Storey',
            year: '2022',
            publisher: 'CS-Pub',
            format: 'Book',
            price: '129.99',
            userID: '62860fe823c9c0ba976b9ba7',
            status: 'authorisation',
            dateStatusChange: '2022-05-01T13:10:00.000+00:00',
            allocatedTo: '62bac539cd9ac9e3bac860fb',
            authorisedBy: '',
            isComplete: false,
        })

        const request5 = new Request({
            title: 'Statistics and sums to impress',
            author: 'Dianne Abbott',
            year: '2017',
            publisher: 'UCU',
            format: 'Audio Book',
            price: '49.99',
            userID: '62bac539cd9ac9e3bac860fd',
            status: 'Complete',
            dateStatusChange: '2022-05-01T13:10:00.000+00:00',
            allocatedTo: '62bac539cd9ac9e3bac860fb',
            authorisedBy: '62bac539cd9ac9e3bac860fa',
            isComplete: true,
        })

        try{
            await request1.save();
            await request2.save();
            await request3.save();
            await request4.save();
            await request5.save();

        }
        catch(err){
            console.log(err);
        }
    }    catch(err){
        console.log(err);
    }
    mongoose.connection.close();
}

mongoose 
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
    })   
    .then(() => {
        populateDB()
        
    })
    .catch(err => console.log(err));

////////// INFOLOGS AND CHANGE LOGS ARE GENERATED THOUGH ACTIVITY IN THE APP, THEREFORE DOESN'T NEED PRE-POPULATING

