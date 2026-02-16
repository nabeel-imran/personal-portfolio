# 🚀 Get Started in 3 Minutes

Your portfolio is ready! Follow these simple steps to see it live.

## Step 1: Install Dependencies (2 minutes)

Open Terminal and run:

```bash
cd /Users/nabeel/Desktop/My-Portfolio
npm install
```

Wait for installation to complete...

## Step 2: Configure Environment Variables (1 minute)

1. **Copy the example file:**
   ```bash
   cp .env.local.example .env.local
   ```

2. **Edit `.env.local` and add your details:**

   For now, you can use these minimal settings to test:
   ```env
   NEXT_PUBLIC_WHATSAPP_NUMBER=your_number_here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

   **Note**: You can add OpenAI API key and email settings later!

## Step 3: Start the Development Server (30 seconds)

```bash
npm run dev
```

## Step 4: View Your Portfolio

Open your browser and visit: **http://localhost:3000**

🎉 **That's it! Your portfolio is live!**

---

## What You'll See

✨ **Hero Section** - Your introduction with animated text
📱 **WhatsApp Button** - Bottom left (floating)
🤖 **AI Chatbot** - Bottom right (floating, works even without OpenAI key!)
📝 **All Sections** - About, Portfolio, Experience, Contact

---

## Next Steps (When Ready)

### 1. Add Your Information

Edit these files to customize:
- `src/components/Hero.tsx` - Your name, title, social links
- `src/components/About.tsx` - Your background and skills
- `src/components/Portfolio.tsx` - Your projects
- `src/components/Experience.tsx` - Your work history

### 2. Add API Keys (Optional but Recommended)

**For AI Chatbot:**
- Get key from: https://platform.openai.com/api-keys
- Add to `.env.local`: `OPENAI_API_KEY=sk-...`

**For Contact Form:**
- Use your Gmail
- Generate app password: https://myaccount.google.com/apppasswords
- Add to `.env.local`:
  ```env
  EMAIL_USER=your.email@gmail.com
  EMAIL_PASS=your-app-password
  ```

### 3. Deploy to Internet

When ready to deploy:

```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin your-github-repo-url
git push -u origin main

# Deploy to Vercel
# Visit: vercel.com
# Import your GitHub repo
# Add environment variables
# Click Deploy!
```

Detailed instructions: See `DEPLOYMENT.md`

---

## Helpful Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Verify setup
./verify-setup.sh

# Quick start wizard
./quick-start.sh
```

---

## Troubleshooting

**Port 3000 in use?**
```bash
lsof -ti:3000 | xargs kill
npm run dev
```

**Dependencies issues?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Need help?**
- Check `SETUP.md` for detailed guide
- Check `CHECKLIST.md` for complete checklist
- Check `PROJECT_SUMMARY.md` for overview

---

## 📚 Documentation Files

- **GET_STARTED.md** (this file) - Quick start
- **SETUP.md** - Detailed setup instructions
- **DEPLOYMENT.md** - How to deploy online
- **CHECKLIST.md** - Pre-launch checklist
- **PROJECT_SUMMARY.md** - Complete project overview
- **README.md** - Full documentation
- **CONTRIBUTING.md** - How to contribute

---

## 🎯 What Works Right Now

Even without API keys configured:

✅ Beautiful animations
✅ All sections and navigation
✅ Responsive design
✅ WhatsApp integration
✅ Chatbot (with fallback responses)
✅ Contact form (collects data)
✅ All interactive features

---

## Support

Questions? Check the docs or reach out!

**Happy coding! 🚀**

---

*Built with ❤️ using Next.js 14, TypeScript, Tailwind CSS, and Framer Motion*
