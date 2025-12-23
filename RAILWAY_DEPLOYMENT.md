# Railway Deployment Guide

The easiest way to deploy your 1099 AI Assistant - both backend and frontend from one monorepo!

## Why Railway?

✅ **$5 free credit/month** - enough for demos
✅ **No cold starts** - apps stay running
✅ **Auto-deploy on git push** - push to deploy
✅ **Easy monorepo support** - deploy both services from same repo
✅ **Built-in environment variables** - simple config
✅ **Great developer experience** - best in class

## Cost Breakdown

- **$5 free credit per month**
- Both services typically use **$3-4/month total**
- **No credit card required to start**
- Usage-based pricing after free credit

---

## Quick Setup (5 Minutes)

### Step 1: Push to GitHub

If you haven't already:

```bash
# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/1099-aai.git

# Push to GitHub
git push -u origin main
```

### Step 2: Sign Up for Railway

1. Go to https://railway.app
2. Click **"Login"**
3. Sign in with **GitHub** (recommended)
4. Authorize Railway to access your repositories

### Step 3: Create New Project

1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Select your **`1099-aai`** repository
4. Railway will detect it's a monorepo

### Step 4: Deploy Backend

Railway will create the first service automatically:

1. **Configure Service:**
   - Click on the service card
   - Go to **"Settings"** tab
   - Under **"Service"**, set:
     ```
     Service Name: backend (optional)
     Root Directory: server
     Start Command: npm start
     ```

2. **Add Environment Variables:**
   - Go to **"Variables"** tab
   - Click **"New Variable"**
   - Add these one by one:

   ```env
   PORT=3000
   NODE_ENV=production
   JWT_SECRET=your-super-secret-jwt-key-here
   USER_ID=your-username
   USER_PASSWORD=your-password
   GEMINI_API_KEY=your-gemini-api-key
   ```

3. **Generate Domain:**
   - Go to **"Settings"** tab
   - Under **"Networking"**, click **"Generate Domain"**
   - Copy the URL (e.g., `https://your-backend.up.railway.app`)

4. Railway will automatically deploy! Wait 2-3 minutes.

### Step 5: Deploy Frontend

1. In your project, click **"New Service"**
2. Select **"GitHub Repo"** → Choose same **`1099-aai`** repo
3. **Configure Service:**
   - Service Name: `frontend` (optional)
   - Root Directory: `client`
   - Build Command: `npm install && npm run build`
   - Start Command: (leave empty, will auto-detect)

4. **Add Environment Variable:**
   - Go to **"Variables"** tab
   - Add:
   ```env
   VITE_API_URL=https://your-backend.up.railway.app
   ```
   (Replace with your actual backend URL from Step 4)

5. **Generate Domain:**
   - Go to **"Settings"** → **"Networking"**
   - Click **"Generate Domain"**
   - Copy frontend URL (e.g., `https://your-frontend.up.railway.app`)

6. Railway will build and deploy!

### Step 6: Update Backend CORS

1. Go back to **backend service**
2. Add another environment variable:
   ```env
   FRONTEND_URL=https://your-frontend.up.railway.app
   ```
   (Replace with your actual frontend URL)

3. Backend will auto-redeploy

---

## Update Client Code for Production

You need to update your client to use the backend URL from environment variables.

Find where you make API calls (likely in `client/src/services/api.js`) and update:

```javascript
// Use environment variable in production, localhost in development
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Example usage:
export const login = async (userId, password) => {
  const response = await fetch(`${API_URL}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, password })
  });
  return response.json();
};
```

Push the changes:
```bash
git add .
git commit -m "Update API URL for production deployment"
git push
```

Railway will auto-redeploy your frontend!

---

## Update Backend CORS Settings

Update your [server/index.js](server/index.js) to allow your frontend domain:

```javascript
// Replace:
app.use(cors());

// With:
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));
```

Push the changes:
```bash
git add .
git commit -m "Update CORS for production frontend"
git push
```

Railway will auto-redeploy your backend!

---

## Testing Your Deployment

1. Open your frontend URL: `https://your-frontend.up.railway.app`
2. Try logging in with your credentials
3. Test the chat functionality
4. Check logs in Railway dashboard if issues occur

---

## Viewing Logs

1. Go to your Railway project
2. Click on a service (backend or frontend)
3. Go to **"Deployments"** tab
4. Click on the latest deployment
5. View **build logs** and **runtime logs**

---

## Automatic Deployments

✅ **Already set up!** Railway automatically deploys when you push to your `main` branch.

To deploy:
```bash
git add .
git commit -m "Your changes"
git push
```

Railway will:
1. Detect the push
2. Build both services
3. Deploy automatically
4. Show deployment status in dashboard

---

## Managing Services

### Restart a Service
1. Go to service in Railway dashboard
2. Click **"..."** menu
3. Select **"Restart"**

### View Metrics
1. Click on service
2. Go to **"Metrics"** tab
3. See CPU, RAM, Network usage

### Change Environment Variables
1. Go to **"Variables"** tab
2. Edit or add variables
3. Service will auto-redeploy

---

## Custom Domain (Optional)

### Add Your Own Domain

1. Go to service **"Settings"** → **"Networking"**
2. Click **"Custom Domain"**
3. Enter your domain: `app.yourdomain.com`
4. Add CNAME record in your DNS:
   ```
   CNAME: app.yourdomain.com → your-frontend.up.railway.app
   ```
5. Railway auto-provisions SSL certificate

---

## Cost Monitoring

### Check Your Usage

1. Click your profile icon
2. Go to **"Usage"**
3. View current month's usage
4. See remaining free credit

### Typical Usage for This Demo
- Backend: ~$2-3/month
- Frontend: ~$1/month
- **Total: ~$3-4/month** (within $5 free credit!)

### If You Exceed Free Credit
- Add a payment method
- Pay-as-you-go: ~$0.000463/GB-hour
- Can set spending limits in settings

---

## Troubleshooting

### Backend not starting?
- Check **"Deployments"** → **"Build Logs"**
- Verify all environment variables are set
- Ensure `npm start` script exists in `server/package.json`

### Frontend showing blank page?
- Check **"Build Logs"** for build errors
- Verify `VITE_API_URL` is set correctly
- Open browser console for errors

### CORS errors?
- Ensure `FRONTEND_URL` is set in backend
- Check CORS configuration in `server/index.js`
- Verify frontend URL matches exactly (no trailing slash)

### 404 errors on API calls?
- Check `VITE_API_URL` includes full URL with `https://`
- Verify backend is running (check logs)
- Test backend directly: `curl https://your-backend.up.railway.app/api/login`

---

## Useful Railway CLI (Optional)

Install Railway CLI for advanced features:

```bash
npm i -g @railway/cli
```

**Login:**
```bash
railway login
```

**Link to project:**
```bash
railway link
```

**View logs:**
```bash
railway logs
```

**Run commands in Railway environment:**
```bash
railway run node server/index.js
```

---

## Development Workflow

### Local Development
```bash
# Backend
cd server
npm install
npm start

# Frontend (in another terminal)
cd client
npm install
npm run dev
```

### Deploy to Railway
```bash
git add .
git commit -m "Your changes"
git push
```

Railway handles the rest!

---

## Comparison: Railway vs Others

| Feature | Railway | Render (Free) | GCE (Free) |
|---------|---------|---------------|------------|
| **Cost** | $5 credit/mo | $0 | $0 |
| **Cold Starts** | ❌ No | ✅ Yes (30s) | ❌ No |
| **Setup Time** | 5 min | 5 min | 60 min |
| **Auto-deploy** | ✅ Yes | ✅ Yes | ❌ No |
| **Performance** | Good | Low (free) | Medium |
| **Ease of Use** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |

**Railway is the best balance of ease, performance, and cost for demos!**

---

## Next Steps

✅ Push your code to GitHub
✅ Create Railway account
✅ Deploy backend service
✅ Deploy frontend service
✅ Update client API configuration
✅ Test your live app
✅ Share your demo URL!

**Your app will be live at:**
- Frontend: `https://your-frontend.up.railway.app`
- Backend: `https://your-backend.up.railway.app`

Future pushes to GitHub will auto-deploy! 🚀

---

## Support

- Railway Docs: https://docs.railway.app
- Railway Discord: https://discord.gg/railway
- Railway Status: https://status.railway.app

Enjoy your deployment! 🎉
