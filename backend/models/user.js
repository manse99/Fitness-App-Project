import mongoose from 'mongoose'
import exerciseRecSchema from './exerciseRec';
​
const Schema = mongoose.Schema
​
const userSchema = new Schema({
    user: {
        login: {
            username: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            }
        },
        exerciseRec: exerciseRecSchema
    }
})

export default mongoose.model('user', userSchema);