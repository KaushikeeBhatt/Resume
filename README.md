# Kaushikee Bhatt - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring a sleek design, interactive components, and a fully functional contact form with SMTP email integration.

## ✨ Features

- 🎨 **Modern Design** - Clean, professional layout with dark theme
- 📱 **Responsive** - Mobile-first design that works on all devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast loading
- 📧 **Contact Form** - Functional contact form with email notifications
- 🚀 **Rate Limiting** - Built-in protection against spam and abuse
- 🔒 **Security** - Input validation and XSS protection
- 💼 **Professional Sections** - Hero, About, Experience, Projects, Skills, Contact
- 🎯 **TypeScript** - Type-safe development experience

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server

### Backend
- **Express.js** - Lightweight Node.js server
- **Nodemailer** - Email sending functionality
- **CORS** - Cross-origin resource sharing
- **Rate Limiting** - Request throttling middleware

### Deployment
- **Vercel** - Serverless deployment platform
- **Gmail SMTP** - Email service integration

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Gmail account with 2FA enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KaushikeeBhatt/Resume
   cd Resume
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your credentials:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password-here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📧 Email Configuration

### Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication**
   - Go to your Google Account settings
   - Navigate to Security → 2-Step Verification
   - Enable 2FA if not already enabled

2. **Generate App Password**
   - Go to Security → App passwords
   - Select "Mail" as the app
   - Generate and copy the 16-character password

3. **Update Environment Variables**
   ```env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-16-char-app-password
   ```

### Custom SMTP Provider

To use a different email provider, update the transporter configuration in `pages/api/contact.ts`:

```typescript
const transporter = nodemailer.createTransporter({
  host: 'your-smtp-host.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

## 🌐 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Set Environment Variables**
   - Go to your Vercel dashboard
   - Select your project
   - Navigate to Settings → Environment Variables
   - Add `EMAIL_USER` and `EMAIL_PASS`

4. **Redeploy with production settings**
   ```bash
   vercel --prod
   ```

### Other Platforms

The project can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Heroku
- DigitalOcean App Platform

## 🔧 Customization

### Content Updates

Update the following components to customize your portfolio:

- **`src/components/Hero.tsx`** - Main hero section with introduction
- **`src/components/About.tsx`** - About section with personal information
- **`src/components/Experience.tsx`** - Work experience and career history
- **`src/components/Projects.tsx`** - Project showcase with descriptions
- **`src/components/Skills.tsx`** - Technical skills and competencies
- **`src/components/Contact.tsx`** - Contact information and social links

### Styling

The project uses a custom color palette defined in `tailwind.config.js`:

```javascript
colors: {
  'orchid-primary': '#DA70D6',
  'orchid-light': '#E6A8E6',
  'fuchsia': '#FF1493',
  'charcoal': '#2F2F2F',
  'ivory': '#FFFFF0'
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx`
3. Update navigation if needed

## 📁 Project Structure

```
kaushikeebhatt_Resume/
├── src/
│   ├── components/          # React components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── hooks/              # Custom React hooks
│   ├── assets/             # Images and static files
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── pages/
│   └── api/
│       └── contact.ts      # Email API endpoint
├── public/                 # Static assets
├── .env.example            # Environment variables template
├── vercel.json             # Vercel deployment configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
└── package.json            # Project dependencies
```

## 🛡️ Security Features

- **Rate Limiting** - 5 requests per 15 minutes per IP address
- **Input Validation** - Server-side validation for all form fields
- **XSS Prevention** - Content sanitization
- **CORS Protection** - Configured cross-origin policies
- **Environment Variables** - Sensitive data protection

## 🔍 Troubleshooting

### Email Not Sending

1. **Check Environment Variables**
   - Verify `EMAIL_USER` and `EMAIL_PASS` are correctly set
   - Ensure no extra spaces or characters

2. **Gmail Issues**
   - Confirm 2FA is enabled on your Google account
   - Use app password, not regular account password
   - Check if "Less secure app access" is disabled (should be)

3. **Vercel Deployment**
   - Verify environment variables are set in Vercel dashboard
   - Check Vercel function logs for errors

### Rate Limiting Issues

- **Error 429**: Wait 15 minutes or use different IP
- **Check Headers**: Look for `Retry-After` header for wait time
- **Testing**: Use different devices/networks for testing

### Build Errors

1. **TypeScript Errors**
   ```bash
   npm run lint
   ```

2. **Missing Dependencies**
   ```bash
   npm install
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Vercel Build Issues**
   - Check build logs in Vercel dashboard
   - Verify all environment variables are set

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section above
2. Review the [GitHub Issues](https://github.com/KaushikeeBhatt/Resume/issues)
3. Create a new issue with detailed information about your problem

## 🌟 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)
- Email service by [Nodemailer](https://nodemailer.com/)

---

**Made with ❤️ by [Kaushikee Bhatt & Puneet Chandna](https://github.com/KaushikeeBhatt/Resume)**