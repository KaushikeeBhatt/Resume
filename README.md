# Portfolio Website with SMTP Contact Form

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring a functional contact form with SMTP email integration.

## Features

- 🎨 Modern, responsive design with dark theme
- 📧 Functional contact form with SMTP email sending
- 🚀 Rate limiting to prevent spam and abuse
- 📱 Mobile-first responsive design
- ⚡ Fast loading with Vite
- 🔒 Input validation and security measures

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Vercel Serverless Functions
- **Email**: Nodemailer with Gmail SMTP
- **Build Tool**: Vite
- **Deployment**: Vercel

## Setup Instructions

### 1. Clone and Install Dependencies

```bash
git clone <your-repo-url>
cd project
npm install
```

### 2. Email Configuration

#### Option A: Gmail SMTP (Recommended)

1. **Enable 2-Factor Authentication** on your Google Account
2. **Generate App Password**:
   - Go to Google Account Settings
   - Security → App passwords
   - Select "Mail" and generate password
3. **Set Environment Variables**:
   - Copy `env.example` to `.env.local`
   - Update with your Gmail credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password-here
   ```

#### Option B: Other SMTP Providers

Update the transporter configuration in `pages/api/contact.ts`:

```typescript
const transporter = nodemailer.createTransporter({
  host: 'your-smtp-host',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});
```

### 3. Development

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio.

### 4. Deploy to Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Set Environment Variables in Vercel**:
   - Go to your Vercel dashboard
   - Select your project
   - Go to Settings → Environment Variables
   - Add `EMAIL_USER` and `EMAIL_PASS`

4. **Redeploy**:
   ```bash
   vercel --prod
   ```

## Rate Limiting

The contact form includes rate limiting to prevent abuse:
- **5 requests per 15 minutes** per IP address
- Returns HTTP 429 (Too Many Requests) when exceeded
- Includes `Retry-After` header with wait time

## Security Features

- ✅ Input validation (name, email, subject, message)
- ✅ Email format validation
- ✅ Rate limiting per IP
- ✅ CORS protection
- ✅ XSS prevention
- ✅ SQL injection prevention (no database)

## Customization

### Update Personal Information

Edit the following files:
- `src/components/Hero.tsx` - Main hero section
- `src/components/About.tsx` - About section
- `src/components/Experience.tsx` - Work experience
- `src/components/Projects.tsx` - Project showcase
- `src/components/Skills.tsx` - Skills section
- `src/components/Contact.tsx` - Contact information

### Styling

The project uses Tailwind CSS with custom colors defined in `tailwind.config.js`:
- `orchid-primary` - Primary brand color
- `orchid-light` - Light accent color
- `fuchsia` - Secondary accent color
- `charcoal` - Dark background
- `ivory` - Light text

## Troubleshooting

### Email Not Sending

1. **Check Environment Variables**: Ensure `EMAIL_USER` and `EMAIL_PASS` are set correctly
2. **Gmail App Password**: Make sure you're using an app password, not your regular password
3. **2FA Enabled**: Gmail requires 2-factor authentication for app passwords
4. **Vercel Environment Variables**: Ensure they're set in your Vercel dashboard

### Rate Limiting Issues

- The rate limit is 5 requests per 15 minutes per IP
- Wait for the time window to reset or use a different IP
- Check the response headers for `Retry-After` information

### Build Errors

1. **TypeScript Errors**: Run `npm run lint` to check for issues
2. **Missing Dependencies**: Ensure all packages are installed with `npm install`
3. **Vercel Build**: Check Vercel build logs for specific errors

## File Structure

```
project/
├── src/
│   ├── components/          # React components
│   ├── hooks/              # Custom React hooks
│   ├── assets/             # Images and static files
│   ├── App.tsx             # Main app component
│   └── main.tsx            # Entry point
├── pages/
│   └── api/
│       └── contact.ts      # Email API endpoint
├── public/                 # Static files
├── vercel.json            # Vercel configuration
├── tailwind.config.js     # Tailwind configuration
└── package.json           # Dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Review the Vercel deployment logs
3. Open an issue on GitHub with detailed information 