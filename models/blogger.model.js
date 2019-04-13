import { Schema, model } from 'mongoose';

const BloggerSchema = new Schema({
    userName: String
})

export default model('Blogger', BloggerSchema)