# 🚀 DEPLOY TO VERCEL - STEP BY STEP

## Current Status: ✅ BUILD IS PERFECT

Your code is ready. Images are correctly referenced as `/images/...` in the built output.

## The Problem You're Experiencing

Vercel is likely using a **cached old deployment** that still has the broken `vercel.json` with the catch-all rewrite rule.

## SOLUTION: Force a Clean Deployment

### Step 1: Commit ALL changes
```bash
git add vercel.json

git commit -m "fix: remove rewrites - using HashRouter"
```

### Step 2: Push to trigger deployment
```bash
git push
```

### Step 3: **CRITICAL** - Clear Vercel Cache

**Method A: Via Vercel Dashboard (RECOMMENDED)**
1. Go to https://vercel.com/[your-username]/[your-project]
2. Click **Settings** tab
3. Click **Git** in the left sidebar
4. Scroll down to **Build Cache**
5. Click **Clear Build Cache** button
6. Go back to **Deployments** tab
7. Click **Redeploy** on your latest deployment

**Method B: Via Vercel CLI**
```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# Pull the latest
vercel pull

# Redeploy with fresh cache
vercel --force
```

### Step 4: Wait for Deployment to Complete
- Watch the deployment logs
- Should take 1-2 minutes
- Look for "Build completed" message

## Verification Checklist

After deployment completes, open your browser and:

1. ✅ **Check browser console** (F12 → Console tab)
   - Look for 404 errors on images
   - Look for any red errors

2. ✅ **Check Network tab** (F12 → Network tab)
   - Filter by "Img"
   - Check if `/images/schbuilding.jpeg` returns 200 (not 404)
   - Check if `/images/Logo-Trans.png` returns 200

3. ✅ **Hard refresh the page**
   - Windows: Ctrl + Shift + R
   - Mac: Cmd + Shift + R
   - This clears browser cache

## What the Current vercel.json Does

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

- ✅ No rewrites (HashRouter handles routing)
- ✅ Static files served directly
- ✅ Images load from `/images/` path
- ✅ No configuration conflicts

## Common Issues & Solutions

### Issue: Images still not loading
**Solution:** Clear Vercel build cache and redeploy (see Step 3 above)

### Issue: Getting 404 on images
**Solution:** 
1. Verify `dist/images/` folder exists in Vercel deployment
2. Check Vercel function logs for errors
3. Ensure you pushed the latest code

### Issue: Works locally but not on Vercel
**Solution:**
1. This is a cache issue - clear Vercel cache
2. Hard refresh your browser (Ctrl+Shift+R)
3. Try incognito/private browsing mode

## Technical Details

**Router:** HashRouter (client-side routing)
- URLs look like: `yoursite.com/#/about`
- Hash fragments never sent to server
- No server-side routing needed

**Image Paths:** Absolute paths starting with `/`
- Example: `/images/schbuilding.jpeg`
- Resolves to: `yoursite.com/images/schbuilding.jpeg`

**Build Output:** `dist/` folder
- Contains all static files
- Images copied from `public/images/` to `dist/images/`
- Vercel serves this folder directly

## Need More Help?

If images STILL don't load after following all steps:

1. **Share your Vercel deployment URL**
2. **Share a screenshot of browser console errors** (F12 → Console)
3. **Share a screenshot of Network tab** showing failed image requests (F12 → Network → Img filter)

This will help diagnose the exact issue.
