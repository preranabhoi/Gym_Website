import Trainer from "../models/Trainer.js";

export const getTrainers = async (req, res) => {
  const trainers = await Trainer.find();
  res.json(trainers);
};

export const createTrainer = async (req, res) => {
  const trainer = new Trainer(req.body);
  const saved = await trainer.save();
  res.json(saved);
};
