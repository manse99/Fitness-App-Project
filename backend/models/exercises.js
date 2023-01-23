import mongoose from 'mongoose'
​
const Schema = mongoose.Schema

const exercisesSchema = new Schema({
  name: {
      type: String,
      required: true
  },
  upperBody: {
      type: Boolean,
      required: true
  }
})

export default mongoose.model('excercises', exercisesSchema);