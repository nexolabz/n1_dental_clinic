import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config({ path: path.resolve(process.cwd(), '../.env') });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

const requiredEnv = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'NOTIFY_EMAIL'];
const missingEnv = requiredEnv.filter((key) => !process.env[key]);
if (missingEnv.length > 0) {
  console.error(`Missing required environment variables: ${missingEnv.join(', ')}`);
  process.exit(1);
}

app.use(cors());
app.use(express.json());

app.post('/api/send-appointment', async (req, res) => {
  const {
    name,
    email,
    phone,
    dentist,
    service,
    date,
    time,
    message
  } = req.body;

  if (!name || !email || !phone || !dentist || !service || !date || !time) {
    return res.status(400).json({ success: false, error: 'All required fields must be completed.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.verify();

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.NOTIFY_EMAIL || 'somaprem103@gmail.com',
      subject: `New Appointment Request from ${name}`,
      html: `
        <h2>New Appointment Booking</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Preferred Doctor:</strong> ${dentist}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Message:</strong> ${message || 'No additional notes.'}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    return res.json({ success: true });
  } catch (err) {
    console.error('Email send error:', err);
    return res.status(500).json({ success: false, error: err.message || 'Failed to send appointment email.' });
  }
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Appointment email server running on http://localhost:${port}`);
});
