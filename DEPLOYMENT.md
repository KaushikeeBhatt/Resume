# Deployment Guide

## 🚀 Deploying to Vercel

### Prerequisites
1. **GitHub Repository**: Your code should be pushed to GitHub
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Gmail App Password**: Set up as described below

### Step 1: Set up Gmail App Password
1. Go to your Google Account settings
2. Enable 2-factor authentication
3. Go to Security > App passwords
4. Generate a new app password for "Mail"
5. Copy the 16-character password (no spaces)

### Step 2: Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Import your project
3. Add environment variables in Vercel dashboard:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your 16-character app password (no spaces)

### Step 3: Configure Custom Domain (Optional)
1. Add your custom domain in Vercel dashboard
2. Update DNS settings as instructed by Vercel

## 📁 Project Structure for Production

```
├── api/
│   └── contact.ts          # Vercel serverless function
├── src/
│   └── components/
│       └── Contact.tsx     # Frontend contact form
├── dist/                   # Built static files (auto-generated)
├── server.js              # Local development server only
├── vercel.json            # Vercel configuration
└── .env                   # Local environment variables (not deployed)
```

## 🔄 Development vs Production

### Local Development
- Uses Express.js server (`server.js`) on port 3001
- Vite dev server with proxy configuration
- Run with: `npm run start`

### Production (Vercel)
- Uses Vercel serverless functions (`api/contact.ts`)
- Static files served from `dist/` folder
- Automatic deployment on git push

## 📧 Email Configuration

The contact form supports Gmail SMTP by default. To use other email providers:

1. Update the `createTransport` configuration in `api/contact.ts`
2. Set appropriate environment variables in Vercel

### Other Email Providers Examples:

**Outlook/Hotmail:**
```javascript
service: 'hotmail'
```

**Yahoo:**
```javascript
service: 'yahoo'
```

**Custom SMTP:**
```javascript
host: 'smtp.your-provider.com',
port: 587,
secure: false,
auth: {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS
}
```

## 🛠️ Troubleshooting

### Common Issues:

1. **Email not sending**: Check environment variables and app password
2. **CORS errors**: Ensure API endpoint includes proper CORS headers
3. **Build failures**: Run `npm run build` locally to check for issues

### Testing Production Build Locally:
```bash
npm run build
npm run preview
```

## 📝 Environment Variables Required

| Variable | Description | Example |
|----------|-------------|---------|
| `EMAIL_USER` | Your Gmail address | `your-email@gmail.com` |
| `EMAIL_PASS` | Gmail app password | `abcd efgh ijkl mnop` |

⚠️ **Important**: Never commit your `.env` file to GitHub! It's already in `.gitignore`.
