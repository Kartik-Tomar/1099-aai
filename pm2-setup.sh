#!/bin/bash
# PM2 Process Manager Setup Script

set -e

echo "Setting up PM2 for 1099 AI Assistant..."

# Navigate to server directory
cd /var/www/1099-aai/server

# Start the backend with PM2
echo "Starting backend server with PM2..."
pm2 start index.js --name "1099-backend" --watch

# Save PM2 configuration
echo "Saving PM2 configuration..."
pm2 save

# Setup PM2 to start on system boot
echo "Setting up PM2 startup script..."
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u $USER --hp /home/$USER
pm2 save

echo ""
echo "========================================="
echo "PM2 Setup Complete!"
echo "========================================="
echo ""
echo "Useful PM2 commands:"
echo "  pm2 status          - View all running processes"
echo "  pm2 logs            - View logs"
echo "  pm2 restart all     - Restart all processes"
echo "  pm2 stop all        - Stop all processes"
echo "  pm2 monit           - Monitor processes"
echo "========================================="
