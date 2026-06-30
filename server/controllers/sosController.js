const Incident = require("../models/Incident");
const { sendSMS, sendWhatsApp } = require("../services/twilioService");

exports.createSOS = async (req, res) => {
  try {
    const { latitude, longitude } = req.body;

    const incident = await Incident.create({
      user: req.user._id,
      latitude,
      longitude,
      status: "ACTIVE",
      riskScore: 45,
    });

    // Send SMS
    await sendSMS(
      "+919876543210",
      `🚨 SOS Alert!
Location:
https://maps.google.com/?q=${latitude},${longitude}`
    );

    // Send WhatsApp
    await sendWhatsApp(
      "+919876543210",
      `🚨 Guardian AI SOS

Live Location:
https://maps.google.com/?q=${latitude},${longitude}`
    );

    res.status(201).json({
      success: true,
      incident,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getMyIncidents = async (req, res) => {
  try {
    const incidents = await Incident.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.json(incidents);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};