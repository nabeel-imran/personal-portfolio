'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactFormData {
  name: string
  email: string
  company?: string
  projectType: string
  budget: string
  message: string
}

export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  if (!process.env.RESEND_API_KEY) {
    console.log('Contact form submission (no API key):', data)
    return { success: true }
  }

  try {
    await resend.emails.send({
      from: 'Nabeel\'s Code Contact <onboarding@resend.dev>',
      to: ['i.nabeel7@outlook.com'],
      subject: `New Project Inquiry: ${data.projectType} from ${data.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3B82F6;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${data.name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${data.email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Company:</td><td style="padding: 8px;">${data.company || '—'}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Project Type:</td><td style="padding: 8px;">${data.projectType}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Budget:</td><td style="padding: 8px;">${data.budget}</td></tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
            <strong>Message:</strong>
            <p style="margin-top: 8px;">${data.message}</p>
          </div>
        </div>
      `,
    })
    return { success: true }
  } catch (error) {
    console.error('Email send error:', error)
    return { success: false, error: 'Failed to send message. Please try again.' }
  }
}
