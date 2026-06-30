const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

router.get("/", auth, getContacts);

router.post("/", auth, addContact);

router.put("/:id", auth, updateContact);

router.delete("/:id", auth, deleteContact);

module.exports = router;