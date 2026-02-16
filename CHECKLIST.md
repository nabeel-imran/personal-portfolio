# Portfolio Launch Checklist ✅

Use this checklist to ensure everything is set up correctly before deploying.

## Pre-Launch Checklist

### 1. Setup & Configuration

- [ ] Install Node.js 18+
- [ ] Run `npm install` to install dependencies
- [ ] Create `.env.local` from `.env.local.example`
- [ ] Add OpenAI API key to `.env.local`
- [ ] Add Gmail credentials to `.env.local`
- [ ] Add WhatsApp number to `.env.local`
- [ ] Set site URL to `https://nabeelscode.com`

### 2. Content Customization

- [ ] Replace profile image in `public/assets/nabeel-profile.png`
- [ ] Update personal info in `src/components/Hero.tsx`
- [ ] Update about text in `src/components/About.tsx`
- [ ] Review and customize skills list
- [ ] Update statistics (projects completed, clients, etc.)
- [ ] Customize project descriptions in `src/components/Portfolio.tsx`
- [ ] Update work experience in `src/components/Experience.tsx`
- [ ] Add your certifications
- [ ] Update contact information
- [ ] Verify all social media links
- [ ] Update chatbot knowledge base in `src/app/api/chatbot/route.ts`

### 3. Optional Enhancements

- [ ] Add project screenshots to `public/assets/projects/`
- [ ] Customize color scheme in `tailwind.config.ts`
- [ ] Add more projects to portfolio
- [ ] Update testimonials (if adding this feature)
- [ ] Add blog posts (if adding this feature)

### 4. Testing

- [ ] Run `npm run dev` and test locally
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on mobile device (iOS)
- [ ] Test on mobile device (Android)
- [ ] Test on tablet
- [ ] Test all navigation links
- [ ] Test hero CTAs
- [ ] Test portfolio filtering
- [ ] Test contact form submission
- [ ] Test email delivery (send test form)
- [ ] Test WhatsApp button
- [ ] Test chatbot conversations
- [ ] Test all external links
- [ ] Verify smooth scrolling
- [ ] Check animations on all sections
- [ ] Test responsive design at different screen sizes

### 5. SEO & Performance

- [ ] Verify meta tags in `src/app/layout.tsx`
- [ ] Add alt text to all images
- [ ] Run `npm run build` successfully
- [ ] Check build output for errors
- [ ] Test production build locally (`npm start`)
- [ ] Run Lighthouse audit (aim for 95+ score)
- [ ] Optimize images if needed
- [ ] Verify Open Graph tags

### 6. Security

- [ ] Verify `.env.local` is in `.gitignore`
- [ ] Never commit API keys to Git
- [ ] Set up rate limiting on API routes (optional)
- [ ] Review security headers in `vercel.json`
- [ ] Enable 2FA on GitHub
- [ ] Enable 2FA on Vercel

### 7. Git & GitHub

- [ ] Initialize Git repository (`git init`)
- [ ] Create GitHub repository
- [ ] Add all files (`git add .`)
- [ ] Create initial commit
- [ ] Push to GitHub
- [ ] Verify all files are pushed
- [ ] Check `.gitignore` is working

### 8. Deployment

- [ ] Create Vercel account
- [ ] Connect GitHub to Vercel
- [ ] Import repository to Vercel
- [ ] Add environment variables in Vercel
  - [ ] OPENAI_API_KEY
  - [ ] EMAIL_USER
  - [ ] EMAIL_PASS
  - [ ] NEXT_PUBLIC_WHATSAPP_NUMBER
  - [ ] NEXT_PUBLIC_SITE_URL
- [ ] Deploy to production
- [ ] Verify deployment URL works
- [ ] Test all features on deployed site

### 9. Domain Setup

- [ ] Purchase `nabeelscode.com` (if not already owned)
- [ ] Add domain in Vercel
- [ ] Configure DNS records
  - [ ] A record: @ → 76.76.21.21
  - [ ] CNAME record: www → cname.vercel-dns.com
- [ ] Wait for DNS propagation (24-48 hours max)
- [ ] Verify SSL certificate is active
- [ ] Test `https://nabeelscode.com`
- [ ] Test `https://www.nabeelscode.com`

### 10. Post-Launch

- [ ] Send test email through contact form
- [ ] Verify email delivery
- [ ] Check auto-reply is working
- [ ] Test chatbot on live site
- [ ] Check WhatsApp integration
- [ ] Monitor Vercel logs for errors
- [ ] Check OpenAI API usage
- [ ] Set up monitoring/analytics (optional)
- [ ] Share portfolio on LinkedIn
- [ ] Share portfolio on Twitter
- [ ] Update resume with portfolio link
- [ ] Update email signature
- [ ] Update GitHub profile

### 11. Ongoing Maintenance

- [ ] Monitor API usage and costs
- [ ] Check for dependency updates monthly
- [ ] Backup important data
- [ ] Review and respond to contact form submissions
- [ ] Update portfolio with new projects
- [ ] Keep chatbot knowledge base updated
- [ ] Monitor site performance
- [ ] Check for broken links

## Quick Commands

```bash
# Install dependencies
npm install

# Run verification
./verify-setup.sh

# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Lint code
npm run lint

# Deploy to Vercel (using CLI)
vercel --prod
```

## Troubleshooting

### Build fails
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Port 3000 in use
```bash
lsof -ti:3000 | xargs kill
npm run dev
```

### Environment variables not working
- Restart dev server after changes
- Check for typos in variable names
- Verify .env.local exists

### Email not sending
- Check Gmail app password
- Enable 2-factor authentication
- Check spam folder
- Verify EMAIL_USER and EMAIL_PASS

### Chatbot not responding
- Verify OpenAI API key
- Check API credits
- Review console for errors
- Fallback responses should still work

## Support Resources

- **Setup Guide**: SETUP.md
- **Deployment Guide**: DEPLOYMENT.md
- **Project Summary**: PROJECT_SUMMARY.md
- **Contributing**: CONTRIBUTING.md
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind Docs**: https://tailwindcss.com/docs

## Success Criteria

✅ Site loads in under 2 seconds
✅ All animations are smooth
✅ Mobile experience is excellent
✅ Contact form sends emails
✅ Chatbot responds to queries
✅ WhatsApp button works
✅ All links are functional
✅ No console errors
✅ Lighthouse score 95+
✅ Domain is properly configured

---

**When all items are checked, you're ready to launch! 🚀**

Good luck with your amazing portfolio!
