#!/bin/bash

# Quick Start Script for Portfolio
# This script helps you get started quickly

echo "🚀 Portfolio Quick Start"
echo "========================="
echo ""

# Color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}⚠ Node.js is not installed${NC}"
    echo "Please install Node.js from: https://nodejs.org/"
    exit 1
fi

echo -e "${GREEN}✓${NC} Node.js is installed: $(node --version)"
echo ""

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo -e "${YELLOW}⚠ .env.local not found${NC}"
    echo "Creating .env.local from example..."
    cp .env.local.example .env.local
    echo -e "${GREEN}✓${NC} Created .env.local"
    echo ""
    echo -e "${BLUE}📝 ACTION REQUIRED:${NC}"
    echo "Please edit .env.local and add your:"
    echo "   - OpenAI API key (for chatbot)"
    echo "   - Gmail credentials (for contact form)"
    echo "   - WhatsApp number"
    echo ""
    echo "Then run this script again."
    exit 0
fi

echo -e "${GREEN}✓${NC} .env.local exists"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    echo "This may take a few minutes..."
    npm install
    echo ""
    echo -e "${GREEN}✓${NC} Dependencies installed"
else
    echo -e "${GREEN}✓${NC} Dependencies already installed"
fi
echo ""

# Run verification
echo "🔍 Running setup verification..."
./verify-setup.sh
echo ""

# Ask if user wants to start dev server
echo "Would you like to start the development server now? (y/n)"
read -r response

if [[ "$response" =~ ^[Yy]$ ]]; then
    echo ""
    echo "🎉 Starting development server..."
    echo "Visit: http://localhost:3000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    npm run dev
else
    echo ""
    echo "To start the development server later, run:"
    echo "   npm run dev"
    echo ""
    echo "Happy coding! 🚀"
fi
