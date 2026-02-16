# API Documentation 📡

This document describes the API routes available in the portfolio application.

## Base URL

- **Development**: `http://localhost:3000/api`
- **Production**: `https://nabeelscode.com/api`

## Authentication

Currently, the APIs do not require authentication. In production, consider adding:
- Rate limiting
- API keys for chatbot
- CAPTCHA for contact form

---

## Endpoints

### 1. Contact Form Submission

Submit a contact form message.

**Endpoint**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 234 567 8900",
  "subject": "Project Inquiry",
  "message": "I would like to discuss a project..."
}
```

**Required Fields**:
- `name` (string): Sender's name
- `email` (string): Valid email address
- `subject` (string): Message subject
- `message` (string): Message content

**Optional Fields**:
- `phone` (string): Contact phone number

**Success Response** (200):
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

**Error Responses**:

400 Bad Request - Missing fields:
```json
{
  "error": "All fields are required"
}
```

400 Bad Request - Invalid email:
```json
{
  "error": "Invalid email address"
}
```

500 Internal Server Error:
```json
{
  "error": "Failed to send message. Please try again or contact directly via email."
}
```

**Behavior**:
- If `EMAIL_USER` and `EMAIL_PASS` are configured: Sends email to you and auto-reply to sender
- If not configured: Logs to console and returns success (for development)

**Example Usage**:
```javascript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Project Inquiry',
    message: 'I would like to discuss a project...'
  })
})

const data = await response.json()
if (data.success) {
  console.log('Message sent!')
}
```

---

### 2. AI Chatbot

Chat with the AI assistant about services, projects, and experience.

**Endpoint**: `POST /api/chatbot`

**Request Body**:
```json
{
  "message": "What services does Nabeel offer?"
}
```

**Required Fields**:
- `message` (string): User's question or message

**Success Response** (200):
```json
{
  "response": "Nabeel offers comprehensive full-stack development services including web applications, AI/ML solutions, automation systems, and cloud architecture..."
}
```

**Error Response** (400):
```json
{
  "error": "Message is required"
}
```

**Fallback Response** (when OpenAI API is not configured):
```json
{
  "response": "Thanks for your interest! Nabeel is a Full Stack Developer specializing in web development, AI/ML, and automation..."
}
```

**Behavior**:
- If `OPENAI_API_KEY` is configured: Uses GPT-4 for intelligent responses
- If not configured: Uses predefined fallback responses based on keywords
- On error: Returns friendly fallback message

**Fallback Response Categories**:
1. **Services**: Questions about what services are offered
2. **Experience**: Questions about background and experience
3. **Projects**: Questions about portfolio and work
4. **Contact/Hiring**: Questions about booking and hiring
5. **Pricing**: Questions about rates and costs
6. **Skills**: Questions about technologies and tech stack
7. **General**: Default response for other queries

**Example Usage**:
```javascript
const response = await fetch('/api/chatbot', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    message: 'What services does Nabeel offer?'
  })
})

const data = await response.json()
console.log(data.response)
```

**System Prompt** (when using OpenAI):
The chatbot is configured with detailed information about:
- Professional experience and expertise
- Key projects and achievements
- Services offered
- Contact information
- Availability

---

## Rate Limiting

**Recommended for Production**:

Add rate limiting to prevent abuse:

```typescript
// middleware.ts
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '1 m'), // 10 requests per minute
})

export async function middleware(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? 'anonymous'
  const { success } = await ratelimit.limit(ip)
  
  if (!success) {
    return new Response('Too many requests', { status: 429 })
  }
}
```

**Suggested Limits**:
- Contact form: 3 submissions per hour per IP
- Chatbot: 20 messages per minute per IP

---

## Security Best Practices

### 1. Input Validation

Already implemented:
- Email format validation
- Required field checks
- XSS prevention through Next.js

### 2. Environment Variables

Keep sensitive data in `.env.local`:
```env
OPENAI_API_KEY=sk-...          # Never commit to git
EMAIL_PASS=your-app-password    # Use app-specific password
```

### 3. CORS Configuration

Next.js handles CORS by default. For custom CORS:

```typescript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'https://nabeelscode.com' }
        ]
      }
    ]
  }
}
```

### 4. HTTPS Only

Ensure production uses HTTPS:
- Vercel automatically provides SSL
- Redirect HTTP to HTTPS in `vercel.json`

---

## Error Handling

All API routes include error handling:

1. **Validation Errors** (400): Clear error messages for invalid input
2. **Server Errors** (500): Generic message, details logged server-side
3. **Fallback Behavior**: APIs degrade gracefully when services unavailable

---

## Future Enhancements

Consider adding:

1. **Database Integration**:
   ```typescript
   // Save contacts to MongoDB
   await db.collection('contacts').insertOne({
     name, email, subject, message,
     createdAt: new Date(),
     status: 'new'
   })
   ```

2. **Email Queue**:
   ```typescript
   // Use Bull or similar for email queue
   await emailQueue.add('send-email', {
     to: email,
     subject,
     html
   })
   ```

3. **Analytics**:
   ```typescript
   // Track form submissions and chatbot usage
   await analytics.track('contact_form_submission', {
     userId: anonymousId,
     properties: { subject }
   })
   ```

4. **CAPTCHA**:
   ```typescript
   // Add reCAPTCHA verification
   const captchaValid = await verifyCaptcha(token)
   if (!captchaValid) {
     return NextResponse.json({ error: 'Invalid captcha' }, { status: 400 })
   }
   ```

---

## Testing

### Manual Testing

**Contact Form**:
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test",
    "message": "This is a test message"
  }'
```

**Chatbot**:
```bash
curl -X POST http://localhost:3000/api/chatbot \
  -H "Content-Type: application/json" \
  -d '{"message": "What services do you offer?"}'
```

### Automated Testing

Consider adding tests with Jest:

```typescript
// __tests__/api/contact.test.ts
import { POST } from '@/app/api/contact/route'

describe('/api/contact', () => {
  it('should validate required fields', async () => {
    const request = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify({ name: 'Test' })
    })
    
    const response = await POST(request)
    expect(response.status).toBe(400)
  })
})
```

---

## Support

For API issues or questions:
- 📧 Email: its.nabeelimran@gmail.com
- 💬 GitHub Issues: [Create an issue](https://github.com/nabeelimrann/portfolio/issues)

---

**Last Updated**: February 2026
