import Class from "../models/Class.js";

export const getClasses = async (req, res) => {
  const classes = await Class.find();
  res.json(classes);
};

export const createClass = async (req, res) => {
  const newClass = new Class(req.body);
  const saved = await newClass.save();
  res.json(saved);
};
