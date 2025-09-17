# OTR Website - Ontario Tech Racing

A modern, responsive website for Ontario Tech Racing built with Next.js, React, and Tailwind CSS.

## 🚀 Quick Start (One-Click Install)

### For macOS Users:

1. **Download the project** to your Mac
2. **Open Terminal** and navigate to the project folder:
   ```bash
   cd "path/to/OTR WEBSITE"
   ```
3. **Run the one-click installer**:
   ```bash
   ./install-and-run.sh
   ```

That's it! The script will:
- Install Homebrew (if needed)
- Install Node.js and npm (if needed)
- Install all project dependencies
- Build the project
- Start the development server
- Open the website in your browser

## 📋 Manual Installation

If you prefer to install manually or the script doesn't work:

### Prerequisites

- **macOS** (tested on macOS 10.15+)
- **Terminal** access
- **Internet connection**

### Step 1: Install Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

For Apple Silicon Macs, add Homebrew to your PATH:
```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

### Step 2: Install Node.js

```bash
brew install node
```

### Step 3: Install Project Dependencies

```bash
cd "path/to/OTR WEBSITE"
npm install
```

### Step 4: Build and Run

```bash
# Build the project
npm run build

# Start development server
npm run dev
```

The website will be available at `http://localhost:3000`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static files
- `npm run deploy` - Build and prepare for deployment

## 📁 Project Structure

```
OTR WEBSITE/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── history/           # History page
│   ├── join/              # Join page
│   ├── sponsors/          # Sponsors page
│   └── team/              # Team page
├── components/            # React components
├── data/                  # JSON data files
├── public/               # Static assets
│   ├── images/           # Images
│   └── videos/           # Videos
├── .github/workflows/    # GitHub Actions
├── install-and-run.sh    # One-click installer
├── setup-and-run.sh      # Advanced setup script
└── README.md             # This file
```

## 🌐 Deployment

### GitHub Pages

The project is configured for automatic deployment to GitHub Pages:

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Set Source to "GitHub Actions"
4. The site will be available at `https://yourusername.github.io/repository-name`

### Manual Deployment

```bash
# Build the project
npm run build

# The static files will be in the 'out' directory
# Upload the contents of 'out' to your web server
```

## 🎨 Features

- **Responsive Design** - Works on all devices
- **Modern UI** - Built with Tailwind CSS
- **Fast Performance** - Optimized with Next.js
- **SEO Friendly** - Proper meta tags and structure
- **Accessibility** - WCAG compliant
- **Animations** - Smooth transitions with Framer Motion

## 📱 Pages

- **Home** - Landing page with hero section
- **History** - Team history and achievements
- **Join** - Information about joining the team
- **Sponsors** - Sponsor information and tiers
- **Team** - Team members and departments

## 🔧 Troubleshooting

### Common Issues

1. **Permission denied when running scripts**
   ```bash
   chmod +x install-and-run.sh
   chmod +x setup-and-run.sh
   ```

2. **Node.js not found**
   - Make sure Homebrew is installed
   - Run `brew install node`
   - Restart your terminal

3. **Port 3000 already in use**
   ```bash
   # Kill process using port 3000
   lsof -ti:3000 | xargs kill -9
   ```

4. **Build errors**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

### Getting Help

If you encounter any issues:

1. Check the terminal output for error messages
2. Make sure all dependencies are installed
3. Try running `npm install` again
4. Check that you're using Node.js 18 or later

## 📄 License

This project is for Ontario Tech Racing team use.

## 👥 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Made with ❤️ for Ontario Tech Racing**