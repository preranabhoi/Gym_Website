import mongoose from 'mongoose';

const classSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String
});

export default mongoose.model('Class', classSchema);
