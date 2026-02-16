import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const systemPrompt = `You are an AI assistant for Nabeel Imran's portfolio website (nabeelscode.com). Your role is to help visitors learn about Nabeel's services, experience, and projects in a friendly and professional manner.

About Nabeel Imran:
- Full Stack Developer with 5+ years of experience
- Expert in: Python, React, Next.js, Node.js, TypeScript, AI/ML, Cloud (AWS, GCP), Docker, Kubernetes
- Specializes in: Web Development, AI/ML Solutions, Automation Systems, Cloud Architecture
- Top Rated Plus freelancer on Upwork with 50+ completed projects
- 100% client satisfaction rate

Key Projects:
1. RankGuide - SEO Analytics Tool: Advanced SEO analytics platform with AI-powered insights, real-time keyword tracking, competitor analysis, and automated reporting.

2. Global Background Check Automation: Enterprise-level automated background verification system supporting multiple countries with API integrations and automated document processing.

3. AI Image Generation Platform: Cutting-edge AI-powered image generation using state-of-the-art models, featuring text-to-image generation, style transfer, and custom model training.

4. E-Commerce Automation Suite: Comprehensive automation for inventory management, order processing, customer communication, and analytics.

5. Smart Web Scraping Framework: Robust and scalable web scraping with anti-detection mechanisms, proxy rotation, and data processing pipeline.

Services Offered:
- Full Stack Web Development (React, Next.js, Node.js, Python)
- AI/ML Solutions (TensorFlow, PyTorch, OpenAI integration)
- Automation & Web Scraping (Python, Selenium, Puppeteer)
- Cloud Solutions (AWS, GCP, Azure)
- API Development & Integration
- Database Design & Optimization
- DevOps & CI/CD Implementation

Contact Information:
- Email: nabeelscode@gmail.com
- LinkedIn: linkedin.com/in/nabeel-imran-1708a0238/
- Available for: Full-time, Part-time, Contract work, Consultations

For booking a consultation:
- Direct visitors to contact via WhatsApp button on the site
- Or use the contact form to send a message
- Free initial consultation available

When answering:
- Be friendly, professional, and concise
- Highlight Nabeel's expertise and achievements
- Encourage visitors to reach out for consultations
- If asked about pricing, mention it depends on project scope and suggest booking a free consultation
- If asked technical questions, demonstrate Nabeel's deep expertise
- Always be positive about Nabeel's availability and eagerness to help with projects`

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // If OpenAI API key is not set, return a fallback response
    if (!process.env.OPENAI_API_KEY) {
      const fallbackResponse = getFallbackResponse(message)
      return NextResponse.json({ response: fallbackResponse })
    }

    // Get response from OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message }
      ],
      temperature: 0.7,
      max_tokens: 500,
    })

    const response = completion.choices[0]?.message?.content || 
      "I'm here to help you learn more about Nabeel's services and experience. Please feel free to ask me anything!"

    return NextResponse.json({ response })
  } catch (error) {
    console.error('Chatbot API error:', error)
    
    // Return fallback response on error
    return NextResponse.json({
      response: "I'm currently experiencing technical difficulties. Please reach out to Nabeel directly at nabeelscode@gmail.com or via the contact form. He'd be happy to help!"
    })
  }
}

// Fallback responses when OpenAI is not available
function getFallbackResponse(message: string): string {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes('service') || lowerMessage.includes('what') || lowerMessage.includes('do')) {
    return "Nabeel offers comprehensive full-stack development services including web applications, AI/ML solutions, automation systems, and cloud architecture. He specializes in React, Next.js, Python, Node.js, and has extensive experience with AI technologies. Would you like to know more about a specific service?"
  }

  if (lowerMessage.includes('experience') || lowerMessage.includes('background')) {
    return "Nabeel has 5+ years of professional experience as a Full Stack Developer. He's a Top Rated Plus freelancer on Upwork with 50+ completed projects and 100% client satisfaction. He's worked on diverse projects ranging from SEO analytics tools to AI-powered platforms and enterprise automation systems."
  }

  if (lowerMessage.includes('project') || lowerMessage.includes('portfolio') || lowerMessage.includes('work')) {
    return "Nabeel has worked on impressive projects including RankGuide (SEO Analytics Tool), Global Background Check Automation, AI Image Generation Platform, and various e-commerce and web scraping solutions. Each project showcases his expertise in modern technologies and problem-solving. Would you like details about any specific project?"
  }

  if (lowerMessage.includes('hire') || lowerMessage.includes('contact') || lowerMessage.includes('book') || lowerMessage.includes('consultation')) {
    return "I'd love to help you connect with Nabeel! You can reach him via: 1) WhatsApp using the green button on the left, 2) Email at nabeelscode@gmail.com, or 3) The contact form on this page. He offers free initial consultations and typically responds within 24 hours. Available for full-time, part-time, and contract work!"
  }

  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('rate')) {
    return "Pricing varies based on project scope, complexity, and timeline. Nabeel offers competitive rates and can work within various budget ranges. I recommend booking a free consultation to discuss your specific needs and get a detailed quote. Use the WhatsApp button or contact form to get in touch!"
  }

  if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech stack')) {
    return "Nabeel's tech stack includes: Frontend (React, Next.js, TypeScript), Backend (Node.js, Python, FastAPI), AI/ML (TensorFlow, PyTorch, OpenAI), Cloud (AWS, GCP, Azure), Databases (MongoDB, PostgreSQL), DevOps (Docker, Kubernetes), and more. He's always learning and adapting to new technologies!"
  }

  if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
    return "You're welcome! If you have any other questions about Nabeel's services or would like to discuss a project, feel free to ask or reach out directly via the contact form or WhatsApp. Have a great day!"
  }

  return "Thanks for your interest! Nabeel is a Full Stack Developer specializing in web development, AI/ML, and automation. He has 5+ years of experience and has successfully delivered 50+ projects. Feel free to ask me about his services, projects, or experience, or reach out directly via the contact form or WhatsApp button!"
}
