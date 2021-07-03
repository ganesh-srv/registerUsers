import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    SecurityQuestion: { type: Object, required: false }
});


export interface Users {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    SecurityQuestion: string;

}