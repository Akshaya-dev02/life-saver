const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
const sosRoutes = require("./routes/sosRoutes");
const aiRoutes = require("./routes/aiRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/sos", sosRoutes);
app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("Guardian AI API Running...");
});

module.exports = app;