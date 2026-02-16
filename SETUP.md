# Quick Setup Guide

Get your portfolio up and running in 5 minutes!

## 1. Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React & React DOM
- TypeScript
- Tailwind CSS
- Framer Motion
- And all other dependencies

## 2. Configure Environment Variables

Copy the example file and fill in your details:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local`:

```env
# Required for AI Chatbot (Get from: https://platform.openai.com)
OPENAI_API_KEY=sk-your-key-here

# Required for Contact Form (Use Gmail)
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your-app-specific-password

# Required for WhatsApp Button (Format: country code + number)
NEXT_PUBLIC_WHATSAPP_NUMBER=12345678901

# Site URL
NEXT_PUBLIC_SITE_URL=https://nabeelscode.com
```

### Getting Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification
3. Go to App Passwords
4. Create password for "Mail"
5. Use this password in `EMAIL_PASS`

### Getting OpenAI API Key

1. Visit [OpenAI Platform](https://platform.openai.com)
2. Sign up or login
3. Go to API Keys
4. Create new secret key
5. Use this key in `OPENAI_API_KEY`

**Note**: Without the OpenAI key, the chatbot will use fallback responses (still functional!)

## 3. Add Your Content

### Profile Image

Replace the profile image:
```bash
cp /path/to/your/image.png public/assets/nabeel-profile.png
```

### Personal Information

Update these files with your info:

- `src/components/Hero.tsx` - Name, titles, social links
- `src/components/About.tsx` - About text, skills, stats
- `src/components/Portfolio.tsx` - Your projects
- `src/components/Experience.tsx` - Work experience, education
- `src/components/Contact.tsx` - Contact information
- `src/app/api/chatbot/route.ts` - Chatbot knowledge base

### Project Images (Optional)

Add your project screenshots to `public/assets/projects/`:
- rankguide.jpg
- background-check.jpg
- ai-image-gen.jpg
- ecommerce.jpg
- web-scraper.jpg
- chatbot.jpg

## 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 5. Test Everything

- ✅ All sections load correctly
- ✅ Animations are smooth
- ✅ Chatbot responds to messages
- ✅ Contact form can be submitted
- ✅ WhatsApp button opens WhatsApp
- ✅ All links work
- ✅ Responsive on mobile

## 6. Build for Production

```bash
npm run build
npm start
```

This creates an optimized production build.

## 7. Deploy to Vercel

### Option A: Using GitHub

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables
5. Deploy!

### Option B: Using Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts and add environment variables when asked.

## 8. Configure Custom Domain

1. In Vercel dashboard, go to your project
2. Settings → Domains
3. Add `nabeelscode.com`
4. Update DNS records at your registrar:
   - Type: A, Name: @, Value: 76.76.21.21
   - Type: CNAME, Name: www, Value: cname.vercel-dns.com

## Troubleshooting

### Port 3000 already in use

```bash
lsof -ti:3000 | xargs kill
npm run dev
```

### Build errors

```bash
rm -rf .next node_modules
npm install
npm run build
```

### Environment variables not working

- Restart dev server after changing .env.local
- In production, add them in Vercel dashboard
- Make sure no typos in variable names

### Chatbot not working

- Check OPENAI_API_KEY is set correctly
- Verify you have credits in OpenAI account
- Without API key, chatbot uses fallback responses

### Email not sending

- Verify Gmail app password is correct
- Check spam folder
- Ensure 2-factor auth is enabled on Gmail

## Need Help?

- Check [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment guide
- Read [README.md](./README.md) for full documentation
- Open an issue on GitHub
- Contact: its.nabeelimran@gmail.com

## What's Next?

- Customize colors in `tailwind.config.ts`
- Add more projects to portfolio
- Set up analytics (Google Analytics, Vercel Analytics)
- Add a blog section (optional)
- Optimize images for faster loading
- Add more animations

---

Happy coding! 🚀
