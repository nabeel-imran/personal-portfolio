export interface Project {
  id: number
  title: string
  shortDescription: string
  fullDescription: string
  category: string
  tags: string[]
  technologies: string[]
  features: string[]
  challenges: string[]
  outcomes: string[]
  duration: string
  role: string
  client?: string
  image: string
  liveUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'RankGuide - AI-Powered SEO Analytics Platform',
    shortDescription: 'Enterprise SEO analytics tool with AI-powered insights and real-time tracking',
    fullDescription: 'Developed a comprehensive SEO analytics platform that helps digital marketing agencies track keyword rankings, analyze competitors, and generate automated reports. The platform uses machine learning algorithms to provide actionable insights and predict ranking trends.',
    category: 'web',
    tags: ['Full Stack', 'AI/ML', 'Analytics'],
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'MongoDB', 'Redis', 'AWS'],
    features: [
      'Real-time keyword rank tracking across multiple search engines',
      'AI-powered SEO recommendations using NLP',
      'Competitor analysis with automated insights',
      'Custom report generation with white-label options',
      'Backlink monitoring and quality analysis',
      'Technical SEO audit automation',
      'ROI tracking and conversion analytics'
    ],
    challenges: [
      'Handling massive data volumes from multiple APIs',
      'Real-time processing of ranking changes',
      'Building accurate ML models for trend prediction'
    ],
    outcomes: [
      'Reduced manual SEO analysis time by 80%',
      'Serving 500+ marketing agencies',
      'Processing 10M+ keywords daily',
      'Client ROI improvement of 45% on average'
    ],
    duration: '6 months',
    role: 'Lead Full Stack Developer',
    client: 'Digital Marketing Agency Network',
    image: '/assets/projects/rankguide.jpg'
  },
  {
    id: 2,
    title: 'Global Background Verification System',
    shortDescription: 'Automated background check platform supporting 50+ countries',
    fullDescription: 'Created an enterprise-level automated background verification system that streamlines the verification process across multiple countries. The system integrates with various government APIs, databases, and third-party services to provide comprehensive background checks.',
    category: 'automation',
    tags: ['Enterprise', 'Automation', 'API Integration'],
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'AWS Lambda', 'Selenium', 'Docker', 'Kubernetes'],
    features: [
      'Multi-country verification support (50+ countries)',
      'Automated document processing with OCR',
      'Real-time status tracking dashboard',
      'Integration with 20+ verification APIs',
      'Compliance management (GDPR, FCRA)',
      'Automated report generation',
      'Fraud detection using ML algorithms'
    ],
    challenges: [
      'Handling different legal requirements per country',
      'Managing rate limits across multiple APIs',
      'Ensuring data security and compliance'
    ],
    outcomes: [
      'Reduced verification time from 7 days to 24 hours',
      'Processing 10,000+ verifications monthly',
      '99.9% accuracy rate',
      'Saved clients $500K+ annually in manual processing'
    ],
    duration: '8 months',
    role: 'Senior Backend Engineer',
    client: 'HR Tech Company',
    image: '/assets/projects/background-check.jpg'
  },
  {
    id: 3,
    title: 'AI Image Generation Platform',
    shortDescription: 'State-of-the-art image generation using custom-trained AI models',
    fullDescription: 'Built a cutting-edge AI image generation platform that allows users to create high-quality images from text descriptions. The platform features custom-trained models, style transfer, and batch processing capabilities for professional use.',
    category: 'ai',
    tags: ['AI/ML', 'Deep Learning', 'Computer Vision'],
    technologies: ['Python', 'PyTorch', 'Stable Diffusion', 'React', 'FastAPI', 'Redis', 'AWS S3', 'CUDA'],
    features: [
      'Text-to-image generation with custom prompts',
      'Multiple art styles and fine-tuning options',
      'Image-to-image transformation',
      'Batch processing for bulk generation',
      'API access for developers',
      'Custom model training for specific use cases',
      'High-resolution upscaling (up to 4K)'
    ],
    challenges: [
      'Optimizing inference speed for real-time generation',
      'Training custom models with limited datasets',
      'Managing GPU resources efficiently'
    ],
    outcomes: [
      'Generated 100K+ images for 1,000+ users',
      'Achieved 3-second average generation time',
      'Custom models improved output quality by 40%',
      'Used by design agencies and content creators'
    ],
    duration: '5 months',
    role: 'AI/ML Engineer',
    image: '/assets/projects/ai-image-gen.jpg'
  },
  {
    id: 4,
    title: 'E-Commerce Automation Suite',
    shortDescription: 'Complete automation solution for multi-channel e-commerce',
    fullDescription: 'Developed a comprehensive automation suite for e-commerce businesses that handles inventory sync, order processing, customer communication, and analytics across multiple platforms including Shopify, WooCommerce, and Amazon.',
    category: 'automation',
    tags: ['Automation', 'E-Commerce', 'Integration'],
    technologies: ['Node.js', 'React', 'MongoDB', 'Puppeteer', 'Redis', 'AWS', 'Shopify API', 'Stripe'],
    features: [
      'Real-time inventory synchronization',
      'Automated order processing and fulfillment',
      'Customer email campaigns with AI personalization',
      'Price optimization using competitive analysis',
      'Automated customer support with chatbot',
      'Sales analytics and reporting dashboard',
      'Multi-channel listing management'
    ],
    challenges: [
      'Syncing inventory across 5+ platforms in real-time',
      'Handling API rate limits',
      'Managing complex product variations'
    ],
    outcomes: [
      'Increased sales by 35% through automation',
      'Reduced manual work by 70 hours/week',
      'Serving 50+ e-commerce businesses',
      'Processing $2M+ in monthly transactions'
    ],
    duration: '4 months',
    role: 'Full Stack Developer',
    client: 'E-Commerce SaaS Company',
    image: '/assets/projects/ecommerce.jpg'
  },
  {
    id: 5,
    title: 'Enterprise Web Scraping Framework',
    shortDescription: 'Scalable web scraping solution with anti-detection and data pipeline',
    fullDescription: 'Created a robust and scalable web scraping framework designed for enterprise-level data extraction. Features include distributed scraping, anti-detection mechanisms, proxy rotation, and a complete data processing pipeline.',
    category: 'automation',
    tags: ['Web Scraping', 'Data Engineering', 'Distributed Systems'],
    technologies: ['Python', 'Scrapy', 'Docker', 'MongoDB', 'Redis', 'Celery', 'AWS', 'Kubernetes'],
    features: [
      'Distributed scraping with 100+ concurrent workers',
      'Advanced anti-detection (fingerprinting, headers)',
      'Smart proxy rotation with health monitoring',
      'JavaScript rendering support',
      'Automated data cleaning and validation',
      'Scheduled scraping with monitoring',
      'API for accessing scraped data'
    ],
    challenges: [
      'Bypassing sophisticated bot detection',
      'Scaling to handle millions of pages',
      'Maintaining data quality and accuracy'
    ],
    outcomes: [
      'Scraping 1M+ pages daily',
      '99.5% success rate',
      'Zero downtime in 6 months',
      'Reduced scraping costs by 60%'
    ],
    duration: '4 months',
    role: 'Data Engineering Lead',
    client: 'Data Intelligence Firm',
    image: '/assets/projects/web-scraper.jpg'
  },
  {
    id: 6,
    title: 'AI Customer Support Chatbot',
    shortDescription: 'Intelligent multilingual chatbot with NLP and sentiment analysis',
    fullDescription: 'Built an advanced AI-powered customer support chatbot that handles customer queries in multiple languages with high accuracy. The system uses NLP for intent recognition and sentiment analysis to route complex queries to human agents.',
    category: 'ai',
    tags: ['AI/ML', 'NLP', 'Chatbot'],
    technologies: ['Python', 'OpenAI GPT-4', 'React', 'Node.js', 'WebSocket', 'PostgreSQL', 'Redis'],
    features: [
      'Natural language understanding with 95% accuracy',
      'Support for 15+ languages',
      'Sentiment analysis for escalation',
      'Context-aware conversation management',
      'Integration with CRM and ticketing systems',
      'Analytics dashboard for insights',
      'Custom training on company knowledge base'
    ],
    challenges: [
      'Maintaining context across long conversations',
      'Handling multiple languages accurately',
      'Integrating with existing business systems'
    ],
    outcomes: [
      'Handling 10,000+ conversations daily',
      'Resolved 70% of queries without human intervention',
      'Reduced support costs by 50%',
      'Improved customer satisfaction by 25%'
    ],
    duration: '3 months',
    role: 'AI Engineer',
    client: 'SaaS Company',
    image: '/assets/projects/chatbot.jpg'
  },
  {
    id: 7,
    title: 'Real-Time Stock Market Analysis Platform',
    shortDescription: 'ML-powered stock analysis with predictive modeling',
    fullDescription: 'Developed a real-time stock market analysis platform that uses machine learning to analyze market trends, predict price movements, and provide trading signals. Features include sentiment analysis from news and social media.',
    category: 'ai',
    tags: ['AI/ML', 'Finance', 'Real-time'],
    technologies: ['Python', 'TensorFlow', 'React', 'WebSocket', 'TimescaleDB', 'Redis', 'AWS'],
    features: [
      'Real-time stock price tracking and analysis',
      'ML-based price prediction models',
      'Sentiment analysis from news and Twitter',
      'Technical indicator calculations',
      'Custom alert system',
      'Portfolio optimization recommendations',
      'Backtesting framework for strategies'
    ],
    challenges: [
      'Processing high-frequency market data',
      'Building accurate prediction models',
      'Handling data from multiple sources'
    ],
    outcomes: [
      'Tracking 5,000+ stocks in real-time',
      'Prediction accuracy of 68%',
      '1,000+ active traders using the platform',
      'Average ROI improvement of 15%'
    ],
    duration: '5 months',
    role: 'ML Engineer',
    client: 'FinTech Startup',
    image: '/assets/projects/stock-analysis.jpg'
  },
  {
    id: 8,
    title: 'Healthcare Appointment Management System',
    shortDescription: 'HIPAA-compliant appointment scheduling with telemedicine',
    fullDescription: 'Created a comprehensive healthcare appointment management system with telemedicine capabilities. The platform is HIPAA-compliant and features automated scheduling, patient records management, and video consultations.',
    category: 'web',
    tags: ['Healthcare', 'Full Stack', 'Compliance'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'AWS', 'Redis', 'Twilio'],
    features: [
      'Online appointment booking with calendar sync',
      'Automated reminders via SMS and email',
      'Video consultation with screen sharing',
      'Electronic health records (EHR) integration',
      'Prescription management',
      'Payment processing and insurance verification',
      'HIPAA-compliant data encryption'
    ],
    challenges: [
      'Ensuring HIPAA compliance',
      'Implementing reliable video consultations',
      'Integrating with existing EHR systems'
    ],
    outcomes: [
      'Serving 50+ healthcare providers',
      '10,000+ patients registered',
      'Reduced no-shows by 40%',
      'Enabled 5,000+ telemedicine consultations'
    ],
    duration: '6 months',
    role: 'Full Stack Developer',
    client: 'Healthcare Network',
    image: '/assets/projects/healthcare.jpg'
  }
]

export const skills = [
  // Languages
  { name: 'Python', category: 'language', level: 95, projects: [1, 2, 3, 5, 6, 7] },
  { name: 'JavaScript', category: 'language', level: 95, projects: [1, 4, 6, 8] },
  { name: 'TypeScript', category: 'language', level: 90, projects: [1, 4, 8] },
  { name: 'SQL', category: 'language', level: 85, projects: [1, 2, 6, 8] },
  { name: 'Go', category: 'language', level: 75, projects: [2] },
  
  // Frontend
  { name: 'React', category: 'frontend', level: 95, projects: [1, 3, 4, 6, 7, 8] },
  { name: 'Next.js', category: 'frontend', level: 90, projects: [1, 8] },
  { name: 'Vue.js', category: 'frontend', level: 80, projects: [4] },
  { name: 'Tailwind CSS', category: 'frontend', level: 95, projects: [1, 3, 4, 6, 8] },
  
  // Backend
  { name: 'Node.js', category: 'backend', level: 95, projects: [1, 4, 6, 8] },
  { name: 'FastAPI', category: 'backend', level: 90, projects: [2, 3] },
  { name: 'Django', category: 'backend', level: 85, projects: [5] },
  { name: 'Express.js', category: 'backend', level: 90, projects: [1, 4, 6] },
  
  // AI/ML
  { name: 'TensorFlow', category: 'ai', level: 90, projects: [1, 3, 7] },
  { name: 'PyTorch', category: 'ai', level: 90, projects: [3, 7] },
  { name: 'OpenAI API', category: 'ai', level: 95, projects: [6] },
  { name: 'Scikit-learn', category: 'ai', level: 85, projects: [1, 7] },
  { name: 'NLP', category: 'ai', level: 90, projects: [1, 6] },
  { name: 'Computer Vision', category: 'ai', level: 85, projects: [3] },
  
  // Databases
  { name: 'MongoDB', category: 'database', level: 95, projects: [1, 4, 5] },
  { name: 'PostgreSQL', category: 'database', level: 90, projects: [2, 6, 8] },
  { name: 'Redis', category: 'database', level: 90, projects: [1, 3, 4, 5, 6, 7] },
  { name: 'MySQL', category: 'database', level: 85, projects: [8] },
  
  // Cloud & DevOps
  { name: 'AWS', category: 'cloud', level: 95, projects: [1, 2, 3, 4, 5, 7, 8] },
  { name: 'Docker', category: 'devops', level: 95, projects: [2, 5, 8] },
  { name: 'Kubernetes', category: 'devops', level: 85, projects: [2, 5] },
  { name: 'CI/CD', category: 'devops', level: 90, projects: [1, 2, 4, 8] },
  { name: 'GCP', category: 'cloud', level: 80, projects: [3] },
  
  // Tools & Others
  { name: 'Git', category: 'tool', level: 95, projects: [1, 2, 3, 4, 5, 6, 7, 8] },
  { name: 'Selenium', category: 'tool', level: 90, projects: [2, 5] },
  { name: 'Scrapy', category: 'tool', level: 95, projects: [5] },
  { name: 'WebSocket', category: 'tool', level: 90, projects: [6, 7, 8] },
]

export const certifications = [
  {
    title: 'AWS Certified Solutions Architect - Professional',
    issuer: 'Amazon Web Services',
    date: 'Jan 2024',
    credential: 'AWS-SAP-2024',
    skills: ['AWS', 'Cloud Architecture', 'DevOps']
  },
  {
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: 'Dec 2023',
    credential: 'TF-DEV-2023',
    skills: ['TensorFlow', 'Machine Learning', 'Deep Learning']
  },
  {
    title: 'Professional Data Engineer',
    issuer: 'Google Cloud',
    date: 'Nov 2023',
    credential: 'GCP-PDE-2023',
    skills: ['GCP', 'Data Engineering', 'Big Data']
  },
  {
    title: 'Azure AI Engineer Associate',
    issuer: 'Microsoft',
    date: 'Oct 2023',
    credential: 'MS-AI-102',
    skills: ['Azure', 'AI', 'Cognitive Services']
  },
  {
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    date: 'Sep 2023',
    credential: 'CKA-2023',
    skills: ['Kubernetes', 'Container Orchestration', 'DevOps']
  },
  {
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: 'Aug 2023',
    credential: 'MONGO-DEV-2023',
    skills: ['MongoDB', 'NoSQL', 'Database Design']
  }
]
