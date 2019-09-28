import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    userName: {type: String, require: true},
    userShortName: {type: String, require: true},
    phone: {type: String, require: true},
});

export interface User extends mongoose.Document {
    id: string;
    userName: string;
    userShortName: string;
    phone: string;
}
