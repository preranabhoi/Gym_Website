import mongoose from 'mongoose';

const trainerSchema = new mongoose.Schema({
  name: String,
  specialty: String,
  image: String
});

export default mongoose.model('Trainer', trainerSchema);
