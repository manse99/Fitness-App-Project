import mongoose from 'mongoose'

const Schema = mongoose.Schema

const exercisesSchema = new Schema({
  name: {
      type: String,
      required: true
  },
  upperBody: {
      type: Boolean,
      required: true
  },
  link: {
    type: String
  },
  imgUrl: {
    type: String
  }
})

export default mongoose.model('exercises', exercisesSchema);