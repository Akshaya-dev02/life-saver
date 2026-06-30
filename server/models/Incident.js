const mongoose = require("mongoose");

const incidentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    latitude: {
      type: Number,
      required: true,
    },

    longitude: {
      type: Number,
      required: true,
    },

    address: {
      type: String,
      default: "",
    },

    riskScore: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["ACTIVE", "RESOLVED"],
      default: "ACTIVE",
    },

    emergencyType: {
      type: String,
      default: "SOS",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Incident", incidentSchema);