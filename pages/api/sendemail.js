// /pages/api/send-email.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Faraz Portfolio <onboarding@resend.dev>', // must be a verified sender or domain
      to: ['farazzaveri26@gmail.com'],
      subject: 'New message from your portfolio',
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('❌ Email send error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
