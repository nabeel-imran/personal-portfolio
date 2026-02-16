# Nabeel Imran - Portfolio Website

![Portfolio Banner](./public/assets/nabeel-profile.png)

A modern, responsive portfolio website built with Next.js 14, featuring an AI-powered chatbot, stunning animations, and comprehensive showcase of projects and services.

## 🌟 Features

- **Modern Design**: Sleek, futuristic UI with gradients, animations, and smooth transitions
- **AI Chatbot**: Intelligent assistant powered by OpenAI to discuss services, experience, and projects
- **Fully Responsive**: Optimized for mobile, tablet, and desktop viewing
- **Contact Integration**: Direct WhatsApp integration and contact form with email notifications
- **Portfolio Showcase**: Detailed project presentations with filtering capabilities
- **Interactive Animations**: Powered by Framer Motion for smooth, engaging user experience
- **SEO Optimized**: Built-in SEO best practices and metadata
- **Fast Performance**: Optimized loading and rendering with Next.js 14

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Type Animation**: React Type Animation

### Backend
- **API Routes**: Next.js API Routes
- **AI Integration**: OpenAI API (GPT-4)
- **Email**: Nodemailer
- **Database**: MongoDB (optional)

### DevOps & Deployment
- **Platform**: Vercel (recommended)
- **Version Control**: Git
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nabeelimrann/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # OpenAI API Key for AI Chatbot
   OPENAI_API_KEY=your_openai_api_key_here

   # Email Configuration (Gmail recommended)
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_specific_password

   # WhatsApp Number (with country code, no spaces)
   NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890

   # Site URL
   NEXT_PUBLIC_SITE_URL=https://nabeelscode.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Email Setup (Gmail)

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App-Specific Password:
   - Go to Google Account Settings > Security
   - Select "App passwords" under "2-Step Verification"
   - Generate a password for "Mail"
   - Use this password in `EMAIL_PASS`

### OpenAI API Setup

1. Create an account at [OpenAI](https://platform.openai.com/)
2. Generate an API key
3. Add the key to `OPENAI_API_KEY` in `.env.local`
4. Note: The chatbot will use fallback responses if the API key is not configured

### WhatsApp Integration

1. Add your WhatsApp number with country code to `NEXT_PUBLIC_WHATSAPP_NUMBER`
2. Format: Country code + number (e.g., 12345678901 for US)
3. No spaces, dashes, or special characters

## 📱 Sections

1. **Hero Section**: Eye-catching introduction with animated text and profile image
2. **About Me**: Professional background, skills, and statistics
3. **Portfolio**: Filterable project showcase with detailed information
4. **Experience**: Timeline of work experience and certifications
5. **Contact**: Contact form, direct communication options, and availability status
6. **Footer**: Social links, quick navigation, and copyright information

## 🤖 AI Chatbot Features

- Answers questions about services and experience
- Provides project information
- Helps with consultation booking
- Fallback responses when API is unavailable
- Context-aware conversations
- Quick question suggestions

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: { /* your colors */ },
  accent: { /* your colors */ },
}
```

### Content

- Update personal information in component files
- Modify project data in `src/components/Portfolio.tsx`
- Adjust experience timeline in `src/components/Experience.tsx`
- Customize chatbot responses in `src/app/api/chatbot/route.ts`

### Images

Replace images in `/public/assets/` with your own:
- `nabeel-profile.png`: Profile picture
- Project images (optional)

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables
   - Deploy

3. **Custom Domain**
   - Add `nabeelscode.com` in Vercel domain settings
   - Update DNS records as instructed
   - Wait for SSL certificate provisioning

### Alternative Platforms

- **Netlify**: Similar to Vercel, supports Next.js
- **AWS Amplify**: For AWS infrastructure
- **Railway**: For full-stack applications
- **DigitalOcean**: For custom VPS setup

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2.5s
- **SEO Score**: 100

## 🔒 Security

- Environment variables for sensitive data
- Input validation on all forms
- Rate limiting on API routes (recommended for production)
- CORS configuration
- Secure headers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Nabeel Imran**

- Website: [nabeelscode.com](https://nabeelscode.com)
- Email: its.nabeelimran@gmail.com
- LinkedIn: [linkedin.com/in/nabeelimrann](https://www.linkedin.com/in/nabeelimrann/)
- GitHub: [github.com/nabeelimrann](https://github.com/nabeelimrann)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting platform
- OpenAI for AI capabilities
- Tailwind CSS for styling system
- Framer Motion for animations

---

Built with ❤️ by Nabeel Imran
