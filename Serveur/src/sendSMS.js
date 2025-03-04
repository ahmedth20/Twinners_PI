const dotenv =require('dotenv');
const twilio =require('twilio');

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

const sendSMS = async (body, userPhoneNumber) => {
    const msgOptions = {
        from: process.env.TWILIO_FROM_NUMBER,
        to: userPhoneNumber,
        body: body
    };
    try {
        const message = await client.messages.create(msgOptions);
        console.log(message);
        return { success: true, message: 'Message sent successfully' };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to send SMS', error: error.message };
    }
};

module.exports = sendSMS;