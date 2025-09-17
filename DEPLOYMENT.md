# Vercel Deployment Guide

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - What's your project's name? otr-website
# - In which directory is your code located? ./
```

### Option 2: Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `out`
6. Click "Deploy"

## Vercel Settings Summary

| Setting | Value |
|---------|-------|
| Framework | Next.js |
| Root Directory | `./` |
| Build Command | `npm run build` |
| Output Directory | `out` |
| Install Command | `npm install` |

## Expected Result
Your website will be available at: `https://your-project-name.vercel.app`

## Benefits of Vercel
- ✅ Automatic deployments on every push
- ✅ Custom domain support
- ✅ Fast global CDN
- ✅ Perfect Next.js integration
- ✅ No configuration needed
