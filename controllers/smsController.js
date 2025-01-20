import twilio from 'twilio';
import { accountSid, authToken, twilioPhoneNumber } from '../config/twilioConfig.js';

const client = new twilio(accountSid, authToken);

export const sendSms = async (req, res) => {
  const { to, message } = req.body;

  try {
    const messageResponse = await client.messages.create({
      body: message,
      from: twilioPhoneNumber,
      to: to
    });

    res.status(200).json({ success: true, sid: messageResponse.sid });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
