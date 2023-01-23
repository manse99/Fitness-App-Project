import mongoose from 'mongoose'
​
const Schema = mongoose.Schema
​
const exerciseRecSchema = new Schema({
    type: {
        type: String,
    },
    duration: {
        type: Number
    },
    intensity: {
        type: Number
    },
    upperBody: {
        type: Boolean
    },
    sets: {
        type: Number
    },
    weight: {
        type: Number
    }
})

export default mongoose.model('excerciseRec', exerciseRecSchema)