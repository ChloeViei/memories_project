import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface IMemory extends Document{
    title?: string;
    author?: string;
    text?: string;
    type?: string;
    date?: string;
}

const Schema = mongoose.Schema;

const MemorySchema = new Schema({
    createdAt: { type: Date, default: Date.now },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});


export const Memory = mongoose.model<IMemory>("Memory", MemorySchema);
