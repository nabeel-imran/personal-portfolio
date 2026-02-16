#!/bin/bash

# Portfolio Setup Verification Script
# This script checks if all dependencies and configurations are properly set up

echo "🚀 Verifying Portfolio Setup..."
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

ERRORS=0
WARNINGS=0

# Check Node.js version
echo "📦 Checking Node.js version..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -ge 18 ]; then
        echo -e "${GREEN}✓${NC} Node.js $(node -v) installed"
    else
        echo -e "${RED}✗${NC} Node.js version must be 18 or higher (found: $(node -v))"
        ((ERRORS++))
    fi
else
    echo -e "${RED}✗${NC} Node.js is not installed"
    ((ERRORS++))
fi

# Check npm
echo ""
echo "📦 Checking npm..."
if command -v npm &> /dev/null; then
    echo -e "${GREEN}✓${NC} npm $(npm -v) installed"
else
    echo -e "${RED}✗${NC} npm is not installed"
    ((ERRORS++))
fi

# Check if node_modules exists
echo ""
echo "📦 Checking dependencies..."
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓${NC} node_modules directory exists"
else
    echo -e "${YELLOW}⚠${NC} node_modules not found. Run: npm install"
    ((WARNINGS++))
fi

# Check package.json
echo ""
echo "📄 Checking package.json..."
if [ -f "package.json" ]; then
    echo -e "${GREEN}✓${NC} package.json exists"
else
    echo -e "${RED}✗${NC} package.json not found"
    ((ERRORS++))
fi

# Check for required dependencies
echo ""
echo "📦 Checking required dependencies..."
REQUIRED_DEPS=("next" "react" "react-dom" "framer-motion" "react-icons" "openai" "nodemailer" "axios")
for dep in "${REQUIRED_DEPS[@]}"; do
    if grep -q "\"$dep\"" package.json 2>/dev/null; then
        echo -e "${GREEN}✓${NC} $dep found in package.json"
    else
        echo -e "${RED}✗${NC} $dep not found in package.json"
        ((ERRORS++))
    fi
done

# Check .env.local
echo ""
echo "🔐 Checking environment variables..."
if [ -f ".env.local" ]; then
    echo -e "${GREEN}✓${NC} .env.local file exists"
    
    # Check for required environment variables
    if grep -q "OPENAI_API_KEY=" .env.local; then
        if grep -q "OPENAI_API_KEY=sk-" .env.local; then
            echo -e "${GREEN}✓${NC} OPENAI_API_KEY is configured"
        else
            echo -e "${YELLOW}⚠${NC} OPENAI_API_KEY appears to be a placeholder"
            ((WARNINGS++))
        fi
    else
        echo -e "${YELLOW}⚠${NC} OPENAI_API_KEY not found in .env.local"
        ((WARNINGS++))
    fi
    
    if grep -q "EMAIL_USER=" .env.local; then
        echo -e "${GREEN}✓${NC} EMAIL_USER is configured"
    else
        echo -e "${YELLOW}⚠${NC} EMAIL_USER not found in .env.local"
        ((WARNINGS++))
    fi
    
    if grep -q "EMAIL_PASS=" .env.local; then
        echo -e "${GREEN}✓${NC} EMAIL_PASS is configured"
    else
        echo -e "${YELLOW}⚠${NC} EMAIL_PASS not found in .env.local"
        ((WARNINGS++))
    fi
    
    if grep -q "NEXT_PUBLIC_WHATSAPP_NUMBER=" .env.local; then
        echo -e "${GREEN}✓${NC} NEXT_PUBLIC_WHATSAPP_NUMBER is configured"
    else
        echo -e "${YELLOW}⚠${NC} NEXT_PUBLIC_WHATSAPP_NUMBER not found in .env.local"
        ((WARNINGS++))
    fi
    
    if grep -q "NEXT_PUBLIC_SITE_URL=" .env.local; then
        echo -e "${GREEN}✓${NC} NEXT_PUBLIC_SITE_URL is configured"
    else
        echo -e "${YELLOW}⚠${NC} NEXT_PUBLIC_SITE_URL not found in .env.local"
        ((WARNINGS++))
    fi
else
    echo -e "${RED}✗${NC} .env.local file not found"
    echo -e "${YELLOW}⚠${NC} Copy .env.local.example to .env.local and configure it"
    ((ERRORS++))
fi

# Check for required files
echo ""
echo "📄 Checking required files..."
REQUIRED_FILES=("next.config.js" "tailwind.config.ts" "tsconfig.json" "src/app/page.tsx" "src/app/layout.tsx")
for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $file exists"
    else
        echo -e "${RED}✗${NC} $file not found"
        ((ERRORS++))
    fi
done

# Check for public assets
echo ""
echo "🖼️  Checking public assets..."
if [ -d "public" ]; then
    echo -e "${GREEN}✓${NC} public directory exists"
    
    if [ -d "public/assets" ]; then
        echo -e "${GREEN}✓${NC} public/assets directory exists"
    else
        echo -e "${YELLOW}⚠${NC} public/assets directory not found"
        ((WARNINGS++))
    fi
    
    if [ -f "public/assets/nabeel-profile.png" ]; then
        echo -e "${GREEN}✓${NC} Profile image exists"
    else
        echo -e "${YELLOW}⚠${NC} Profile image not found at public/assets/nabeel-profile.png"
        ((WARNINGS++))
    fi
else
    echo -e "${RED}✗${NC} public directory not found"
    ((ERRORS++))
fi

# Try to build
echo ""
echo "🔨 Testing build process..."
if npm run build > /dev/null 2>&1; then
    echo -e "${GREEN}✓${NC} Build successful"
else
    echo -e "${RED}✗${NC} Build failed. Run 'npm run build' to see errors"
    ((ERRORS++))
fi

# Summary
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 Verification Summary"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}✓ All checks passed!${NC}"
    echo ""
    echo "🎉 Your portfolio is ready to launch!"
    echo ""
    echo "Next steps:"
    echo "  1. Run 'npm run dev' to start the development server"
    echo "  2. Visit http://localhost:3000 to test your site"
    echo "  3. Deploy to Vercel when ready"
    exit 0
elif [ $ERRORS -eq 0 ]; then
    echo -e "${YELLOW}⚠ ${WARNINGS} warning(s) found${NC}"
    echo ""
    echo "Your portfolio will work, but some features may be limited:"
    echo "  - Chatbot may use fallback responses (if OPENAI_API_KEY not set)"
    echo "  - Contact form may only log to console (if EMAIL credentials not set)"
    echo ""
    echo "To fix warnings, update your .env.local file"
    exit 0
else
    echo -e "${RED}✗ ${ERRORS} error(s) found${NC}"
    if [ $WARNINGS -gt 0 ]; then
        echo -e "${YELLOW}⚠ ${WARNINGS} warning(s) found${NC}"
    fi
    echo ""
    echo "Please fix the errors above before proceeding"
    exit 1
fi
