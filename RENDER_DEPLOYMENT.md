# Render Deployment Guide (100% FREE)

This guide shows you how to deploy both backend and frontend to Render for **completely free** - perfect for demo projects!

## Why Render?

✅ **Completely FREE** - No credit card required
✅ **Auto-deploy from Git** - Push to deploy
✅ **Easy monorepo setup** - One `render.yaml` file
✅ **Built-in SSL** - Free HTTPS certificates
✅ **Simple environment variables**

⚠️ **Free tier limitation**: Apps spin down after 15 minutes of inactivity (30-second cold start on first request)

## Quick Setup (Recommended)

### Option 1: One-Click Deploy with render.yaml

1. **Push your code to GitHub** (if not already done)

2. **Go to Render Dashboard**
   - Visit https://dashboard.render.com
   - Sign up/Login (GitHub auth recommended)

3. **Create New Blueprint**
   - Click **"New +"** → **"Blueprint"**
   - Connect your GitHub repository
   - Render will auto-detect the `render.yaml` file
   - Click **"Apply"**

4. **Set Environment Variables**

   After blueprint is created, go to each service and add:

   **Backend (1099-backend):**
   - `USER_ID` = your-username
   - `USER_PASSWORD` = your-password
   - `GEMINI_API_KEY` = your-gemini-key
   - `JWT_SECRET` = (auto-generated, or set your own)

   **Frontend (1099-frontend):**
   - `VITE_API_URL` = (will auto-populate from backend URL)

5. **Deploy!**
   - Render will build and deploy both services
   - Wait 2-5 minutes for first deployment
   - Get your URLs:
     - Backend: `https://1099-backend.onrender.com`
     - Frontend: `https://1099-frontend.onrender.com`

---

## Option 2: Manual Setup (Step-by-Step)

If you prefer manual control or want to understand each step:

### Step 1: Deploy Backend

1. **Go to Render Dashboard** → Click **"New +"** → **"Web Service"**

2. **Connect Repository**
   - Choose your GitHub repo
   - Click **"Connect"**

3. **Configure Service:**
   ```
   Name: 1099-backend
   Root Directory: server
   Environment: Node
   Build Command: npm install
   Start Command: npm start
   ```

4. **Select Plan:**
   - Choose **"Free"** plan

5. **Add Environment Variables:**
   Click **"Advanced"** → **"Add Environment Variable"**
   ```
   PORT = 3000
   NODE_ENV = production
   JWT_SECRET = your-secret-key-here
   USER_ID = your-username
   USER_PASSWORD = your-password
   GEMINI_API_KEY = your-gemini-api-key
   ```

6. **Create Web Service** - Render will start deploying

7. **Copy Backend URL** - You'll need this for frontend (e.g., `https://1099-backend.onrender.com`)

### Step 2: Deploy Frontend

1. **Create Static Site**
   - Click **"New +"** → **"Static Site"**
   - Connect same repository

2. **Configure Service:**
   ```
   Name: 1099-frontend
   Root Directory: client
   Build Command: npm install && npm run build
   Publish Directory: dist
   ```

3. **Add Environment Variable:**
   ```
   VITE_API_URL = https://1099-backend.onrender.com
   ```
   (Replace with your actual backend URL from Step 1)

4. **Create Static Site** - Render will build and deploy

---

## Update Frontend Code to Use Backend URL

Update your client code to use environment variable:

```javascript
// In your client app (e.g., src/config.js or wherever you make API calls)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Then use API_URL for all fetch calls:
fetch(`${API_URL}/api/login`, { ... })
fetch(`${API_URL}/api/chat`, { ... })
```

After making this change, push to GitHub - Render will auto-redeploy!

---

## Update CORS Settings

Update [server/index.js](server/index.js) to allow your frontend:

```javascript
// Replace:
app.use(cors());

// With:
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));
```

Then add environment variable in Render backend:
```
FRONTEND_URL = https://1099-frontend.onrender.com
```

---

## Automatic Deployments

Once connected, Render will **auto-deploy** on every git push to your main branch!

To trigger manual deploy:
1. Go to service in Render dashboard
2. Click **"Manual Deploy"** → **"Deploy latest commit"**

---

## Testing Your Deployment

1. Visit your frontend URL: `https://1099-frontend.onrender.com`
2. Try logging in with your credentials
3. Test the chat functionality

**First load might take 30 seconds** (cold start on free tier)

---

## Free Tier Details

**Backend (Web Service):**
- 512 MB RAM
- Spins down after 15 min inactivity
- 750 hours/month (enough for demos)

**Frontend (Static Site):**
- 100 GB bandwidth/month
- Always active (no spin down!)
- Free SSL certificate

---

## Troubleshooting

### Backend not starting?
- Check **"Logs"** tab in Render dashboard
- Verify all environment variables are set
- Make sure `npm start` works locally

### Frontend showing blank page?
- Check **"Logs"** during build
- Verify `VITE_API_URL` is set correctly
- Open browser console for errors

### CORS errors?
- Update CORS settings in backend
- Make sure `FRONTEND_URL` matches your frontend domain
- Check backend logs for CORS errors

### Cold starts too slow?
- Upgrade to paid plan ($7/month) to keep services running
- Or switch to Railway (better free tier performance)

---

## Upgrading from Free Tier

If your demo gets popular or you need better performance:

- **Starter Plan**: $7/month per service
  - No cold starts
  - Better performance
  - 1 GB RAM

Both services = $14/month total

---

## Cost Comparison

| Platform | Free Tier | Cold Starts | Cost After Free |
|----------|-----------|-------------|-----------------|
| **Render** | ✅ Forever | Yes (30s) | $7/service/mo |
| **Railway** | $5 credit/mo | No | Pay-as-you-go |
| **Vercel** | ✅ Generous | No (frontend) | $20/mo |

**For demos:** Render free tier is perfect!
**For production:** Railway or paid Render recommended

---

## Next Steps

1. ✅ Deploy using render.yaml (Option 1)
2. ✅ Set environment variables
3. ✅ Test your deployment
4. 📌 Bookmark your frontend URL
5. 🎉 Share your demo!

**Your app is now live and will auto-deploy on every git push!**
