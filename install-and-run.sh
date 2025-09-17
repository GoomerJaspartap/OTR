#!/bin/bash

# One-click installer for OTR Website
# Simply run: ./install-and-run.sh

echo "🚀 OTR Website - One-Click Installer"
echo "====================================="
echo ""

# Make sure we're in the right directory
cd "$(dirname "$0")"

# Check if we're on macOS
if [[ "$OSTYPE" != "darwin"* ]]; then
    echo "❌ This script only works on macOS"
    exit 1
fi

echo "📋 Installing dependencies..."

# Install Homebrew if not present
if ! command -v brew &> /dev/null; then
    echo "🍺 Installing Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    
    # Add to PATH for Apple Silicon
    if [[ $(uname -m) == "arm64" ]]; then
        echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
        eval "$(/opt/homebrew/bin/brew shellenv)"
    fi
fi

# Install Node.js if not present
if ! command -v node &> /dev/null; then
    echo "📦 Installing Node.js..."
    brew install node
fi

# Install project dependencies
echo "📚 Installing project dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

echo ""
echo "✅ Setup complete!"
echo ""
echo "🌐 Starting the website..."
echo "   The website will open in your browser at http://localhost:3000"
echo "   Press Ctrl+C to stop the server"
echo ""

# Open browser after 2 seconds
(sleep 2 && open http://localhost:3000) &

# Start the development server
npm run dev
