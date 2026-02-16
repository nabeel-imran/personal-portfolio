import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // If email credentials are not configured, just return success
    // In production, you would send actual emails
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('Contact form submission:', { name, email, subject, message })
      
      // You can also save to database here if MongoDB is configured
      // await saveToDatabase({ name, email, subject, message })
      
      return NextResponse.json({
        success: true,
        message: 'Message received! (Email not configured - check server logs)'
      })
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email to you (notification)
    const mailOptionsToYou = {
      from: process.env.EMAIL_USER,
      to: 'nabeelscode@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9;">New Contact Form Submission</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="background: white; padding: 15px; border-radius: 4px;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 12px;">
            This message was sent from your portfolio website contact form.
          </p>
        </div>
      `,
    }

    // Auto-reply to sender
    const mailOptionsToSender = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thanks for reaching out! - Nabeel Imran',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9;">Thank You for Your Message!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out through my portfolio website. I've received your message and will get back to you as soon as possible, typically within 24 hours.</p>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Message:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p style="background: white; padding: 15px; border-radius: 4px;">${message}</p>
          </div>

          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Connect with me on <a href="https://www.linkedin.com/in/nabeel-imran-1708a0238/" style="color: #0ea5e9;">LinkedIn</a></li>
            <li>Check out my projects on <a href="https://github.com/nabeelimrann" style="color: #0ea5e9;">GitHub</a></li>
            <li>Message me on <a href="https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}" style="color: #0ea5e9;">WhatsApp</a> for urgent inquiries</li>
          </ul>

          <p>Best regards,<br/>
          <strong>Nabeel Imran</strong><br/>
          Full Stack Developer & AI Specialist</p>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>Nabeel Imran | nabeelscode.com | nabeelscode@gmail.com</p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await transporter.sendMail(mailOptionsToYou)
    await transporter.sendMail(mailOptionsToSender)

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!'
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or contact directly via email.' },
      { status: 500 }
    )
  }
}
