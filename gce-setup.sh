#!/bin/bash
# GCE Deployment Setup Script for 1099 AI Assistant
# Run this script on your GCE instance after initial creation

set -e

echo "========================================="
echo "1099 AI Assistant - GCE Setup"
echo "========================================="

# Update system packages
echo "Updating system packages..."
sudo apt-get update
sudo apt-get upgrade -y

# Install Node.js 20.x
echo "Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"

# Install PM2 for process management
echo "Installing PM2..."
sudo npm install -g pm2

# Install nginx
echo "Installing nginx..."
sudo apt-get install -y nginx

# Install git
echo "Installing git..."
sudo apt-get install -y git

# Create application directory
echo "Creating application directory..."
sudo mkdir -p /var/www/1099-aai
sudo chown -R $USER:$USER /var/www/1099-aai

# Clone repository (you'll need to provide your repo URL)
echo ""
echo "========================================="
echo "Next steps:"
echo "1. Clone your repository:"
echo "   cd /var/www/1099-aai"
echo "   git clone YOUR_GITHUB_REPO_URL ."
echo ""
echo "2. Set up environment variables:"
echo "   nano /var/www/1099-aai/server/.env"
echo ""
echo "3. Install dependencies and build:"
echo "   cd /var/www/1099-aai/server && npm install"
echo "   cd /var/www/1099-aai/client && npm install && npm run build"
echo ""
echo "4. Run the PM2 setup script:"
echo "   bash /var/www/1099-aai/pm2-setup.sh"
echo ""
echo "5. Configure nginx:"
echo "   sudo cp /var/www/1099-aai/nginx.conf /etc/nginx/sites-available/1099-aai"
echo "   sudo ln -s /etc/nginx/sites-available/1099-aai /etc/nginx/sites-enabled/"
echo "   sudo nginx -t"
echo "   sudo systemctl restart nginx"
echo "========================================="
