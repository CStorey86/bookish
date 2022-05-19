import mongoose from 'mongoose';
import { UserSchema} from '../models/userModel';

const User = mongoose.model('User', UserSchema);

export const registerNewUser = (req, res) => {
    let newUser = new Player(req.body);

    newUser.save((err, User) => {
        if (err) {
            res.send(err);
        }
        res.json(User);
    });
};

export const viewAllUsers = (req, res) => {
    User.find({},(err, User) => {
        if (err) {
            res.send(err);
        }
        res.json(User);
    });
};
