const nodemailer = require('nodemailer');

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5; // 5 requests per 15 minutes

// In-memory store for rate limiting (in production, consider using Redis)
const rateLimitStore = new Map();

// Rate limiting middleware
function rateLimit(ip) {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count++;
  return true;
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Input validation
function validateInput(data) {
  const errors = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Please provide a valid email address');
  }

  if (!data.subject || data.subject.trim().length < 2) {
    errors.push('Subject must be at least 2 characters long');
  }

  if (!data.message || data.message.trim().length < 1) {
    errors.push('Message must be at least 1 characters long');
  }

  return { isValid: errors.length === 0, errors };
}

module.exports = async (req, res) => {
  console.log('Contact API called:', req.method, req.url);
  
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers['x-forwarded-for'] || 
                    req.headers['x-real-ip'] ||
                    'unknown';

    // Check rate limit
    if (!rateLimit(clientIP)) {
      return res.status(429).json({ 
        error: 'Too many requests. Please try again later.',
        retryAfter: Math.ceil(RATE_LIMIT_WINDOW / 1000)
      });
    }

    const { name, email, subject, message } = req.body;

    // Validate input
    const validation = validateInput({ name, email, subject, message });
    if (!validation.isValid) {
      return res.status(400).json({ 
        error: 'Invalid input', 
        details: validation.errors 
      });
    }

    // Check if environment variables are missing
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing environment variables: EMAIL_USER or EMAIL_PASS');
      return res.status(500).json({ 
        error: 'Server configuration error. Please contact the administrator.' 
      });
    }

    // Create transporter with more robust configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio contact form.
      `
    };

    // Send email using Promise-based approach for better error handling
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent!');
        } else {
          reject(err);
        }
      });
    });

    // Send confirmation email to user
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for contacting me through my portfolio. I've received your message and will get back to you within 24 hours.</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your message:</strong></p>
            <p>${message}</p>
          </div>
          <p>Best regards,<br>Kaushikee Bhatt</p>
        </div>
      `,
      text: `
Thank you for reaching out!

Hi ${name},

Thank you for contacting me through my portfolio. I've received your message and will get back to you within 24 hours.

Your message:
${message}

Best regards,
Kaushikee Bhatt
      `
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(confirmationMailOptions, function (err) {
        if (!err) {
          resolve('Confirmation email sent!');
        } else {
          reject(err);
        }
      });
    });

    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    
    // Check if environment variables are missing
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing environment variables: EMAIL_USER or EMAIL_PASS');
      return res.status(500).json({ 
        error: 'Server configuration error. Please contact the administrator.' 
      });
    }
    
    res.status(500).json({ 
      error: 'Failed to send message. Please try again later.' 
    });
  }
}; 