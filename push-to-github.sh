#!/bin/bash

echo "🚀 Pushing OTR Website to GitHub"
echo "================================"
echo ""

# Initialize git if not already done
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit - OTR Website"
fi

# Add remote if not exists
if ! git remote get-url origin >/dev/null 2>&1; then
    echo "🔗 Adding GitHub remote..."
    echo "Please enter your GitHub repository URL (e.g., https://github.com/username/repository.git):"
    read -r repo_url
    git remote add origin "$repo_url"
fi

# Add all changes
echo "📝 Adding changes..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Fix GitHub Pages deployment configuration

- Updated GitHub Actions workflow for proper deployment
- Fixed Next.js config for correct asset paths
- Removed basePath and assetPrefix for root domain deployment"

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Successfully pushed to GitHub!"
echo "🌐 Your website should be available at: https://goomerjaspartap.github.io"
echo "⏳ It may take a few minutes for GitHub Pages to update."
