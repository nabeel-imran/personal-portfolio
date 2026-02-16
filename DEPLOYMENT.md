# Deployment Guide

This guide will help you deploy your portfolio website to production.

## Prerequisites

- Node.js 18+ installed
- Git installed
- A GitHub account
- A Vercel account (or other hosting platform)
- Domain name (nabeelscode.com)

## Step 1: Prepare Your Project

1. **Test locally first**
   ```bash
   npm install
   npm run build
   npm start
   ```
   Visit http://localhost:3000 to verify everything works

2. **Set up environment variables**
   
   Create `.env.local` with your actual values:
   ```env
   OPENAI_API_KEY=sk-...
   EMAIL_USER=its.nabeelimran@gmail.com
   EMAIL_PASS=your-app-specific-password
   NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
   NEXT_PUBLIC_SITE_URL=https://nabeelscode.com
   ```

## Step 2: Push to GitHub

1. **Initialize Git repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   ```

2. **Create GitHub repository**
   - Go to GitHub.com
   - Click "New Repository"
   - Name it "portfolio" or "nabeelscode"
   - Don't initialize with README (already exists)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/nabeelimrann/portfolio.git
   git branch -M main
   git push -u origin main
   ```

## Step 3: Deploy to Vercel

### Option A: Using Vercel Dashboard

1. **Visit Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub

2. **Import Project**
   - Click "Add New Project"
   - Import your GitHub repository
   - Select the portfolio repository

3. **Configure Project**
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: (leave default)

4. **Add Environment Variables**
   ```
   OPENAI_API_KEY=sk-...
   EMAIL_USER=its.nabeelimran@gmail.com
   EMAIL_PASS=your-app-password
   NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
   NEXT_PUBLIC_SITE_URL=https://nabeelscode.com
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for deployment to complete
   - You'll get a URL like: `your-project.vercel.app`

### Option B: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   Follow the prompts:
   - Set up and deploy: Yes
   - Which scope: Your account
   - Link to existing project: No
   - Project name: portfolio
   - In which directory: ./
   - Override settings: No

4. **Add Environment Variables**
   ```bash
   vercel env add OPENAI_API_KEY
   vercel env add EMAIL_USER
   vercel env add EMAIL_PASS
   vercel env add NEXT_PUBLIC_WHATSAPP_NUMBER
   vercel env add NEXT_PUBLIC_SITE_URL
   ```

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Step 4: Set Up Custom Domain

1. **Add Domain in Vercel**
   - Go to your project settings
   - Click "Domains"
   - Add `nabeelscode.com`

2. **Configure DNS**
   
   At your domain registrar (GoDaddy, Namecheap, etc.):
   
   **For root domain (nabeelscode.com):**
   - Type: A
   - Name: @
   - Value: 76.76.21.21
   
   **For www subdomain:**
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

3. **Wait for DNS Propagation**
   - Usually takes 5-30 minutes
   - Can take up to 24-48 hours
   - Check status: `dig nabeelscode.com`

4. **SSL Certificate**
   - Vercel automatically provisions SSL
   - Your site will be available at https://nabeelscode.com

## Step 5: Verify Deployment

1. **Check website**
   - Visit https://nabeelscode.com
   - Test all sections
   - Verify animations and interactions

2. **Test chatbot**
   - Open chatbot
   - Send test messages
   - Verify AI responses

3. **Test contact form**
   - Fill out contact form
   - Check email delivery
   - Verify auto-reply

4. **Test WhatsApp integration**
   - Click WhatsApp button
   - Verify correct number
   - Test message template

5. **Mobile testing**
   - Open on mobile device
   - Check responsive design
   - Test all interactions

## Step 6: Configure Email (Gmail)

1. **Enable 2-Factor Authentication**
   - Go to Google Account > Security
   - Turn on 2-Step Verification

2. **Generate App Password**
   - Google Account > Security
   - Select "App passwords"
   - Select "Mail" and "Other (Custom name)"
   - Name it "Portfolio Website"
   - Copy the generated password

3. **Update Environment Variable**
   - Add the app password to `EMAIL_PASS` in Vercel

4. **Test Email Sending**
   - Submit contact form
   - Check if you receive the email
   - Check if sender receives auto-reply

## Step 7: Configure OpenAI API

1. **Get API Key**
   - Visit [platform.openai.com](https://platform.openai.com)
   - Sign in or create account
   - Go to API Keys section
   - Create new secret key

2. **Add to Vercel**
   - Update `OPENAI_API_KEY` environment variable
   - Redeploy if needed

3. **Set Usage Limits**
   - In OpenAI dashboard
   - Set monthly usage limits
   - Recommended: $10-20/month for personal portfolio

## Continuous Deployment

Once set up, every push to main branch automatically deploys:

```bash
git add .
git commit -m "Update content"
git push origin main
```

Vercel will automatically:
- Build your project
- Run tests
- Deploy to production
- Update your domain

## Monitoring & Analytics

1. **Vercel Analytics**
   - Enable in project settings
   - Monitor page views, performance

2. **Google Analytics (Optional)**
   - Create GA4 property
   - Add tracking code to layout.tsx

3. **Error Tracking (Optional)**
   - Use Sentry or similar
   - Monitor runtime errors

## Troubleshooting

### Build Fails

- Check error logs in Vercel
- Verify all dependencies are in package.json
- Test build locally: `npm run build`

### Environment Variables Not Working

- Ensure variables are added in Vercel
- Redeploy after adding variables
- Check variable names match exactly

### Domain Not Working

- Wait 24-48 hours for DNS propagation
- Verify DNS settings with `dig nabeelscode.com`
- Check Vercel domain status

### Email Not Sending

- Verify Gmail app password is correct
- Check EMAIL_USER and EMAIL_PASS are set
- Enable "Less secure app access" (if needed)
- Check spam folder

### Chatbot Not Responding

- Verify OPENAI_API_KEY is set correctly
- Check OpenAI account has credits
- Review API usage limits
- Chatbot will use fallback responses if API fails

## Maintenance

### Regular Updates

```bash
# Update dependencies
npm update

# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### Backups

- GitHub serves as your backup
- Vercel keeps deployment history
- Download latest code: `git clone`

## Cost Breakdown

- **Vercel Hosting**: Free (Hobby plan)
- **Domain**: $10-15/year
- **OpenAI API**: ~$5-10/month
- **Email**: Free (Gmail)
- **Total**: ~$15-20/month

## Support

If you encounter issues:

1. Check Vercel logs
2. Review this guide
3. Check Next.js documentation
4. Search Vercel community forums
5. Contact support if needed

---

Good luck with your deployment! 🚀
