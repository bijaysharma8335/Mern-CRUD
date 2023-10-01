const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "can't be blank"],
  },
  email: {
    type: String,
    required: [true, "can't be blank"],
  },
  address: {
    type: String,
    required: [true, "can't be blank"],
  },
  mobile: {
    type: Number,
    required: [true, "can't be blank"],
  },
  gender: {
    type: String,
    required: [true, "can't be blank"],
  },
},
{ minimize: false }


);

const Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact;
