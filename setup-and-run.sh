#!/bin/bash

# OTR Website Setup and Run Script for macOS
# This script will install all dependencies and run the website

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to install Homebrew
install_homebrew() {
    if command_exists brew; then
        print_success "Homebrew is already installed"
        return
    fi
    
    print_status "Installing Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    
    # Add Homebrew to PATH for Apple Silicon Macs
    if [[ $(uname -m) == "arm64" ]]; then
        echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
        eval "$(/opt/homebrew/bin/brew shellenv)"
    fi
    
    print_success "Homebrew installed successfully"
}

# Function to install Node.js
install_nodejs() {
    if command_exists node && command_exists npm; then
        NODE_VERSION=$(node --version)
        print_success "Node.js is already installed (version: $NODE_VERSION)"
        return
    fi
    
    print_status "Installing Node.js..."
    brew install node
    
    print_success "Node.js installed successfully"
}

# Function to install Git
install_git() {
    if command_exists git; then
        print_success "Git is already installed"
        return
    fi
    
    print_status "Installing Git..."
    brew install git
    
    print_success "Git installed successfully"
}

# Function to setup the project
setup_project() {
    print_status "Setting up the OTR website project..."
    
    # Navigate to the project directory
    cd "$(dirname "$0")"
    
    # Install dependencies
    print_status "Installing project dependencies..."
    npm install
    
    print_success "Project setup completed"
}

# Function to build the project
build_project() {
    print_status "Building the project..."
    npm run build
    print_success "Project built successfully"
}

# Function to start the development server
start_server() {
    print_status "Starting the development server..."
    print_warning "The website will open in your default browser at http://localhost:3000"
    print_warning "Press Ctrl+C to stop the server"
    
    # Open browser after a short delay
    (sleep 3 && open http://localhost:3000) &
    
    # Start the development server
    npm run dev
}

# Function to show help
show_help() {
    echo "OTR Website Setup and Run Script"
    echo ""
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  --build-only    Only build the project, don't start the server"
    echo "  --help          Show this help message"
    echo ""
    echo "This script will:"
    echo "  1. Install Homebrew (if not installed)"
    echo "  2. Install Node.js and npm (if not installed)"
    echo "  3. Install Git (if not installed)"
    echo "  4. Install project dependencies"
    echo "  5. Build the project"
    echo "  6. Start the development server and open in browser"
}

# Main execution
main() {
    echo "=========================================="
    echo "    OTR Website Setup and Run Script"
    echo "=========================================="
    echo ""
    
    # Check if help is requested
    if [[ "$1" == "--help" ]]; then
        show_help
        exit 0
    fi
    
    # Check if we're on macOS
    if [[ "$OSTYPE" != "darwin"* ]]; then
        print_error "This script is designed for macOS only"
        exit 1
    fi
    
    print_status "Starting setup process..."
    
    # Install dependencies
    install_homebrew
    install_git
    install_nodejs
    
    # Setup project
    setup_project
    
    # Build project
    build_project
    
    # Check if build-only mode
    if [[ "$1" == "--build-only" ]]; then
        print_success "Build completed successfully!"
        print_status "To start the development server, run: npm run dev"
        exit 0
    fi
    
    # Start the server
    start_server
}

# Run main function with all arguments
main "$@"
