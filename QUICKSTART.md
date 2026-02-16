# Quick Start Guide 🚀

Get your portfolio up and running in 5 minutes!

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git (optional, for cloning)

## Step 1: Installation

```bash
# Clone the repository (or download the ZIP)
git clone https://github.com/nabeelimrann/portfolio.git
cd portfolio

# Install dependencies
npm install
```

## Step 2: Environment Setup

1. Copy the example environment file:
```bash
cp .env.local.example .env.local
```

2. Edit `.env.local` and add your credentials:

```env
# Minimum required for basic functionality:
NEXT_PUBLIC_WHATSAPP_NUMBER=923001234567
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional (for full features):
OPENAI_API_KEY=sk-your-key-here
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Getting Credentials

**OpenAI API Key** (Optional - for AI chatbot):
1. Visit https://platform.openai.com/api-keys
2. Create account and generate API key
3. Note: Chatbot works with fallback responses if not provided

**Gmail App Password** (Optional - for contact form emails):
1. Enable 2-Factor Authentication on Gmail
2. Go to Google Account → Security → App passwords
3. Generate password for "Mail"
4. Use this password (not your regular Gmail password)

**WhatsApp Number** (Required):
- Format: Country code + number (no spaces)
- Example: `923001234567` for Pakistan, `12345678901` for US

## Step 3: Customize Content

### Update Personal Information

Edit `src/app/page.tsx` and update:
- Name and title
- Profile description
- Social media links
- Contact information
- Projects (add/remove/edit in the `projects` array)
- Experience (add/remove/edit in the `experience` array)
- Skills (add/remove/edit in the `skills` array)

### Add Your Profile Picture

Replace `public/assets/nabeel-profile.png` with your own image:
- Recommended size: 500x500px
- Format: PNG with transparent background preferred
- Name it: `nabeel-profile.png` or update the path in `page.tsx`

### Customize Colors (Optional)

Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: { 500: '#0066ff', ... },  // Blue
  accent: { 500: '#0ea5e9', ... },    // Cyan
}
```

## Step 4: Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000 to see your portfolio!

## Step 5: Test Everything

Use the verification script to check your setup:

```bash
chmod +x verify-setup.sh
./verify-setup.sh
```

This will check:
- ✅ Node.js and npm versions
- ✅ Dependencies installed
- ✅ Environment variables configured
- ✅ Required files present
- ✅ Build process working

## Step 6: Build for Production

```bash
npm run build
npm start
```

This tests your production build locally before deployment.

## Common Issues & Solutions

### Issue: Port 3000 already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill
# Or use a different port
npm run dev -- -p 3001
```

### Issue: Environment variables not working
- Restart development server after changing `.env.local`
- Ensure no extra spaces in variable values
- Check variable names are exactly correct

### Issue: Images not loading
- Check file path: `/public/assets/nabeel-profile.png`
- Ensure image name matches exactly (case-sensitive)
- Try clearing `.next` folder: `rm -rf .next && npm run dev`

### Issue: Build fails
```bash
# Clean install
rm -rf .next node_modules
npm install
npm run build
```

## Next Steps

1. **Customize Content**: Update all personal information and projects
2. **Test Features**: 
   - Try the contact form
   - Test the AI chatbot
   - Check WhatsApp button
   - Test on mobile devices
3. **Deploy**: Follow [DEPLOYMENT.md](DEPLOYMENT.md) for Vercel deployment
4. **Domain**: Connect your custom domain

## Features Overview

| Feature | Status | Required Env Vars |
|---------|--------|-------------------|
| Basic Portfolio | ✅ Always works | None |
| WhatsApp Button | ✅ Always works | `NEXT_PUBLIC_WHATSAPP_NUMBER` |
| Contact Form (logging) | ✅ Always works | None |
| Contact Form (email) | 🔧 Optional | `EMAIL_USER`, `EMAIL_PASS` |
| AI Chatbot (OpenAI) | 🔧 Optional | `OPENAI_API_KEY` |
| AI Chatbot (fallback) | ✅ Always works | None |

## Getting Help

- 📚 Check [README.md](README.md) for detailed documentation
- 📋 See [CHECKLIST.md](CHECKLIST.md) for deployment checklist
- 🚀 Read [DEPLOYMENT.md](DEPLOYMENT.md) for deployment guide
- 📧 Contact: its.nabeelimran@gmail.com

## Quick Commands Reference

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Run production build
npm run lint             # Check code quality

# Verification
./verify-setup.sh        # Verify setup

# Deployment
vercel                   # Deploy to Vercel (requires Vercel CLI)
```

---

**You're all set! 🎉**

Your portfolio is ready to showcase your work. Now customize it and make it yours!
