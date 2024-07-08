//import email from '@/app/models/Email';
import { NextApiRequest, NextApiResponse } from 'next';
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_TRANSPORTER_HOST,
  port: process.env.NEXT_PUBLIC_TRANSPORTER_PORT,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_TRANSPORTER_EMAIL,
    pass: process.env.NEXT_PUBLIC_TRANSPORTER_PASSWORD,
  },
});

async function main(userEmail: string, caption: string) {
  const info = await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_TRANSPORTER_EMAIL,
    to: process.env.NEXT_PUBLIC_TO_EMAIL,
    subject: `Contact Us Message from ${userEmail}`,
    text: `from: ${userEmail}\n\n\n${caption}`,
  });
  console.log('Message sent: %s', info.messageId);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email: userEmail, caption } = req.body;
    //await email.create({ email: userEmail, caption });
    await main(userEmail, caption);
    res.status(200).json({ message: 'Email added successfully' });
  } catch (error) {
    console.error('Error adding email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
