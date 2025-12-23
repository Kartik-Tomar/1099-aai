# Google Compute Engine (GCE) Deployment Guide

Complete guide to deploy your 1099 AI Assistant on Google Cloud Platform using the **FREE e2-micro instance**.

## Cost Estimate

- **e2-micro instance**: FREE (Always Free Tier)
- **30 GB Standard Disk**: FREE
- **1 GB Egress**: FREE
- **Total: $0/month** ✅

## Prerequisites

1. Google Cloud account (sign up at https://cloud.google.com)
2. Enable billing (required even for free tier)
3. Your GitHub repository URL

---

## Part 1: Create GCE Instance

### Step 1: Access Google Cloud Console

1. Go to https://console.cloud.google.com
2. Create a new project or select existing one
3. Navigate to **Compute Engine** → **VM instances**

### Step 2: Create VM Instance

Click **"CREATE INSTANCE"** and configure:

**Basic Settings:**
```
Name: 1099-aai-server
Region: us-central1 (or any US region for free tier)
Zone: us-central1-a (or any zone)
```

**Machine Configuration:**
```
Series: E2
Machine type: e2-micro (2 vCPU, 1 GB memory) - FREE TIER
```

**Boot Disk:**
```
Operating System: Ubuntu
Version: Ubuntu 22.04 LTS
Boot disk type: Standard persistent disk
Size: 30 GB (maximum for free tier)
```

**Firewall:**
```
✅ Allow HTTP traffic
✅ Allow HTTPS traffic
```

**Advanced Options → Networking → Network Interfaces:**
- Ensure "External IPv4 address" is set to "Ephemeral" or create a static IP

Click **"CREATE"**

### Step 3: Note Your External IP

After instance is created, note the **External IP** (e.g., `34.123.45.67`)

---

## Part 2: Configure Firewall Rules

1. Go to **VPC Network** → **Firewall**
2. Click **"CREATE FIREWALL RULE"**

**HTTP Rule:**
```
Name: allow-http
Targets: All instances in the network
Source IP ranges: 0.0.0.0/0
Protocols and ports: tcp:80
```

**HTTPS Rule (for future SSL):**
```
Name: allow-https
Targets: All instances in the network
Source IP ranges: 0.0.0.0/0
Protocols and ports: tcp:443
```

---

## Part 3: Connect to Your Instance

### Option 1: SSH from Browser (Easiest)
1. Go to **Compute Engine** → **VM instances**
2. Click **SSH** button next to your instance

### Option 2: SSH from Local Terminal
```bash
gcloud compute ssh 1099-aai-server --zone=us-central1-a
```

---

## Part 4: Setup Server (Run on GCE Instance)

### Step 1: Run Initial Setup Script

```bash
# Download and run the setup script
curl -o gce-setup.sh https://raw.githubusercontent.com/YOUR_USERNAME/1099-aai/main/gce-setup.sh
chmod +x gce-setup.sh
bash gce-setup.sh
```

Or manually follow these steps:

```bash
# Update system
sudo apt-get update && sudo apt-get upgrade -y

# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2, nginx, and git
sudo npm install -g pm2
sudo apt-get install -y nginx git

# Create app directory
sudo mkdir -p /var/www/1099-aai
sudo chown -R $USER:$USER /var/www/1099-aai
```

### Step 2: Clone Your Repository

```bash
cd /var/www/1099-aai
git clone https://github.com/YOUR_USERNAME/1099-aai.git .
```

### Step 3: Set Up Environment Variables

```bash
# Create .env file for backend
nano /var/www/1099-aai/server/.env
```

Add the following:
```env
PORT=3000
NODE_ENV=production
JWT_SECRET=your-super-secret-jwt-key-change-this
USER_ID=your-username
USER_PASSWORD=your-password
GEMINI_API_KEY=your-gemini-api-key
```

Save and exit (Ctrl+X, then Y, then Enter)

### Step 4: Install Dependencies

```bash
# Install backend dependencies
cd /var/www/1099-aai/server
npm install

# Install frontend dependencies and build
cd /var/www/1099-aai/client
npm install
npm run build
```

### Step 5: Update Client API URL

```bash
# Edit the API service file
nano /var/www/1099-aai/client/src/services/api.js
```

Update to use relative URLs (since nginx will proxy):
```javascript
const API_URL = ''; // Empty string for relative URLs

// All API calls will use /api/* which nginx proxies to localhost:3000
```

Then rebuild:
```bash
cd /var/www/1099-aai/client
npm run build
```

---

## Part 5: Configure PM2 for Backend

```bash
# Start backend with PM2
cd /var/www/1099-aai/server
pm2 start index.js --name "1099-backend"

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup systemd
# Copy and run the command that PM2 outputs

# Save again
pm2 save
```

Verify backend is running:
```bash
pm2 status
curl http://localhost:3000/api/login
```

---

## Part 6: Configure Nginx

### Step 1: Copy Nginx Configuration

```bash
sudo cp /var/www/1099-aai/nginx.conf /etc/nginx/sites-available/1099-aai
sudo ln -s /etc/nginx/sites-available/1099-aai /etc/nginx/sites-enabled/
```

### Step 2: Remove Default Site

```bash
sudo rm /etc/nginx/sites-enabled/default
```

### Step 3: Test and Restart Nginx

```bash
# Test configuration
sudo nginx -t

# Restart nginx
sudo systemctl restart nginx

# Enable nginx to start on boot
sudo systemctl enable nginx
```

---

## Part 7: Access Your Application

1. Open your browser
2. Go to `http://YOUR_EXTERNAL_IP`
3. You should see your 1099 AI Assistant login page!

---

## Part 8: (Optional) Add Custom Domain & SSL

### If you have a domain name:

1. **Point Domain to IP:**
   - Add an A record in your DNS: `your-domain.com` → `YOUR_EXTERNAL_IP`

2. **Update Nginx Config:**
   ```bash
   sudo nano /etc/nginx/sites-available/1099-aai
   ```
   Change: `server_name _;` to `server_name your-domain.com;`

3. **Install SSL with Let's Encrypt:**
   ```bash
   sudo apt-get install -y certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

4. **Auto-renew SSL:**
   ```bash
   sudo certbot renew --dry-run
   ```

---

## Deployment & Updates

### To update your app after pushing to GitHub:

```bash
# SSH into your instance
cd /var/www/1099-aai

# Pull latest changes
git pull

# Update backend
cd server
npm install
pm2 restart 1099-backend

# Update frontend
cd ../client
npm install
npm run build

# Restart nginx
sudo systemctl reload nginx
```

### Create an update script:

```bash
nano /var/www/1099-aai/update.sh
```

```bash
#!/bin/bash
cd /var/www/1099-aai
git pull
cd server && npm install
cd ../client && npm install && npm run build
pm2 restart 1099-backend
sudo systemctl reload nginx
echo "Update complete!"
```

```bash
chmod +x /var/www/1099-aai/update.sh
```

Then updates are just: `bash /var/www/1099-aai/update.sh`

---

## Monitoring & Maintenance

### View Logs

```bash
# PM2 logs
pm2 logs

# Nginx access logs
sudo tail -f /var/log/nginx/access.log

# Nginx error logs
sudo tail -f /var/log/nginx/error.log
```

### Monitor Resources

```bash
# Real-time monitoring
pm2 monit

# System resources
htop
```

### Useful Commands

```bash
# Restart backend
pm2 restart 1099-backend

# Restart nginx
sudo systemctl restart nginx

# Check nginx status
sudo systemctl status nginx

# Check PM2 status
pm2 status
```

---

## Troubleshooting

### Backend not starting?
```bash
pm2 logs 1099-backend
# Check for errors in .env file or missing dependencies
```

### Frontend showing 404?
```bash
ls -la /var/www/1099-aai/client/dist
# Ensure build files exist
```

### Nginx errors?
```bash
sudo nginx -t
sudo tail -f /var/log/nginx/error.log
```

### Can't connect to external IP?
- Check firewall rules in GCP Console
- Verify nginx is running: `sudo systemctl status nginx`
- Check if port 80 is listening: `sudo netstat -tlnp | grep 80`

---

## Cost Monitoring

Monitor your usage to stay within free tier:

1. Go to **Billing** → **Reports** in GCP Console
2. Check you're using e2-micro instance
3. Monitor egress (should be under 1 GB/month for demos)

---

## Comparison: GCE vs Render

| Feature | GCE (Free) | Render (Free) |
|---------|------------|---------------|
| **Setup Time** | 30-60 min | 5 min |
| **Cold Starts** | No | Yes (30s) |
| **Performance** | Medium | Low (free tier) |
| **Control** | Full | Limited |
| **Maintenance** | Manual | Automatic |
| **Auto-deploy** | No | Yes |

**GCE is better if:** You want no cold starts and don't mind manual setup
**Render is better if:** You want quick setup and auto-deployment

---

## Next Steps

✅ Your app is now live on GCE!
✅ Access at `http://YOUR_EXTERNAL_IP`
✅ Updates via git pull + rebuild
✅ Running 24/7 with no cold starts

Consider:
- Adding a custom domain
- Setting up SSL with Let's Encrypt
- Setting up automated backups
- Implementing monitoring with Cloud Monitoring

**Enjoy your free, always-on demo deployment!**
