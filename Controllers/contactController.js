import Contact from "../models/Contact.js";

export const sendContactMessage = async (req, res) => {
  const contact = new Contact(req.body);
  const saved = await contact.save();
  res.json({ message: "Message sent successfully", saved });
};
