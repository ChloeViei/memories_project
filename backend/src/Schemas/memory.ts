import { Schema } from 'mongoose';

export var memorySchema: Schema = new Schema({
    createdAt: { type: Date, default: Date.now },
    title: String,
    author: String,
    text: String,
    type: String,
    date: Date
});
