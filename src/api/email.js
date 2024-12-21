import dotenv from 'dotenv';
dotenv.config({ path: './email.env' });
import cors from 'cors';
import sgMail from '@sendgrid/mail';

const apiKey = process.env.SENDGRID_API_KEY;
const toEmail = process.env.TO_EMAIL;
pp.use(cors({
    origin: 'https://abrahambhatti.vercel.app',
  }));
if (!apiKey) {
    console.error('Error: SENDGRID_API_KEY is not defined.');
    process.exit(1);
}

if (!toEmail) {
    console.error('Error: TO_EMAIL is not defined.');
    process.exit(1);
}

console.log('Loaded API Key:', apiKey ? 'Loaded' : 'Not Loaded');
console.log('Loaded TO Email:', toEmail ? 'Loaded' : 'Not Loaded');

sgMail.setApiKey(apiKey);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;

        // Validate input fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ success: false, error: 'All fields are required.' });
        }

        // Log the received data for debugging
        console.log('Received data:', req.body);

        const msg = {
            to: toEmail,
            from: 'abebot40@gmail.com',
            replyTo: email,
            subject: `New Contact Form Submission: ${subject}`,
            text: `
                Name: ${name}
                Email: ${email}
                Subject: ${subject}
                Message: ${message}
            `,
        };

        try {
            // Sending the email using SendGrid API
            await sgMail.send(msg);
            console.log('Email sent successfully.');
            // Send a success response to the client
            return res.status(200).json({ success: true });
        } catch (error) {
            // If SendGrid returns an error
            console.error('Error sending email:', error.response?.body || error.message);
            return res.status(500).json({
                success: false,
                error: error.response?.body || error.message,
            });
        }
    } else {
        // If the HTTP method is not POST, return Method Not Allowed
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
