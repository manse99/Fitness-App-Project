

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const exerciseRecSchema = new Schema({
    type: String,
    duration: Number,
    intensity: Number,
    upperBody: Boolean,
    sets: Number,
    weight: Number
})

export default mongoose.model('exerciseRec', exerciseRecSchema)