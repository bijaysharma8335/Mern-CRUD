const Contact = require("./ContactModel");

const createContact = async (req, res) => {
  console.log("controller", req.body);
  const { name, email, address, mobile, gender } = req.body;

  try {
    await Contact.create({
      name,
      email,
      address,
      mobile,
      gender,
    });
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const displayContact = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(400).json(e.message);
  }
};

const editContact = async (req, res) => {
  const { id } = req.params;
  try {
    const { name, email, address, mobile, gender } = req.body;
    await Contact.findByIdAndUpdate(id, {
      name,
      email,
      address,
      mobile,
      gender,
    });
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    await Contact.findByIdAndDelete(id);
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {}
};

module.exports = { createContact, displayContact, editContact, deleteContact };
