import mongoose, { Schema } from "mongoose"
import exerciseSchema from './exercises.js'

const exerciseRecSchema = new Schema({
    type: String,
    duration: Number,
    intensity: Number,
    upperBody: Boolean,
    sets: Number,
    weight: Number,
    exercises: exerciseSchema
})

export default mongoose.model('exerciseRec', exerciseRecSchema)