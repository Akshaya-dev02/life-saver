const Contact = require("../models/Contact");

// Add Contact
exports.addContact = async (req, res) => {
  try {
    console.log("========== ADD CONTACT ==========");
    console.log("User:", req.user);
    console.log("Body:", req.body);

    const contact = await Contact.create({
      user: req.user._id,
      fullName: req.body.fullName,
      phone: req.body.phone,
      relationship: req.body.relationship,
    });

    console.log("Contact Saved:", contact);

    res.status(201).json(contact);
  } catch (err) {
    console.log("========== ERROR ==========");
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
};

// Get Contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({
      user: req.user._id,
    });

    res.json(contacts);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Update Contact
exports.updateContact = async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user._id,
      },
      req.body,
      {
        new: true,
      }
    );

    if (!contact) {
      return res.status(404).json({
        message: "Contact not found",
      });
    }

    res.json(contact);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Delete Contact
exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!contact) {
      return res.status(404).json({
        message: "Contact not found",
      });
    }

    res.json({
      message: "Contact deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};