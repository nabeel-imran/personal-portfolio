# Contributing to Portfolio

Thank you for your interest in contributing to this portfolio website!

## Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow ESLint rules
- Use Prettier for formatting
- Write meaningful commit messages

### Component Structure

```tsx
'use client' // If using client-side features

import { useState } from 'react'
import { motion } from 'framer-motion'

interface ComponentProps {
  // Define props
}

const Component = ({ prop }: ComponentProps) => {
  // Component logic
  
  return (
    // JSX
  )
}

export default Component
```

### Styling

- Use Tailwind CSS classes
- Follow the existing color scheme
- Maintain responsive design
- Test on multiple screen sizes

### Animations

- Use Framer Motion for animations
- Keep animations smooth (60fps)
- Provide reduce-motion alternatives
- Use appropriate timing functions

## Testing

Before submitting:

1. Test locally: `npm run dev`
2. Build successfully: `npm run build`
3. Check for linting errors: `npm run lint`
4. Test on multiple browsers
5. Test responsive design

## Submitting Changes

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Add: your feature description"
   ```

2. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

3. Create a Pull Request:
   - Describe your changes
   - Reference any related issues
   - Add screenshots if applicable

## Commit Message Format

- `Add:` for new features
- `Update:` for improvements
- `Fix:` for bug fixes
- `Docs:` for documentation
- `Style:` for formatting
- `Refactor:` for code restructuring

Example: `Add: dark mode toggle feature`

## Questions?

Feel free to open an issue or reach out to me directly.

Thank you for contributing! 🎉
