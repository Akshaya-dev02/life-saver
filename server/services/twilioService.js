const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

let client = null;

if (
  accountSid &&
  authToken &&
  accountSid.startsWith("AC")
) {
  client = twilio(accountSid, authToken);
} else {
  console.log("⚠ Twilio credentials not configured. SMS & WhatsApp disabled.");
}

const sendSMS = async (to, message) => {
  if (!client) {
    console.log("SMS skipped (Twilio disabled)");
    return;
  }

  return client.messages.create({
    body: message,
    from: process.env.TWILIO_SMS_NUMBER,
    to,
  });
};

const sendWhatsApp = async (to, message) => {
  if (!client) {
    console.log("WhatsApp skipped (Twilio disabled)");
    return;
  }

  return client.messages.create({
    body: message,
    from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
    to: `whatsapp:${to}`,
  });
};

module.exports = {
  sendSMS,
  sendWhatsApp,
};