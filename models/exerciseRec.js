import mongoose, { Schema } from "mongoose"

const exerciseRecSchema = new Schema({
    type: String,
    duration: Number,
    intensity: Number,
    upperBody: Boolean,
    sets: Number,
    weight: Number,
    userId: {
        type: String,
        required: true
    }
})

export default mongoose.model('exerciseRec', exerciseRecSchema)