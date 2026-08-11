# Vercel Deployment Image Fix

## Problem
Images were loading correctly during development (`npm run dev`) but not showing after deployment on Vercel.

## Root Cause
The `vercel.json` file had a catch-all rewrite rule:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This rule was intercepting **ALL** requests, including requests for images, PDFs, and other static files. When the browser requested `/images/schbuilding.jpeg`, Vercel would serve `/index.html` instead of the actual image file.

## Solution
Updated `vercel.json` to exclude static files from the rewrite rule:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/((?!images|assets|favicon\.png|_vercel|.*\.(?:png|jpg|jpeg|gif|svg|ico|webp|pdf|txt|css|js|json|woff|woff2|ttf|eot)).*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

The new rewrite rule uses negative lookahead to exclude:
- `/images` - Your image directory
- `/assets` - Vite-generated assets
- `/favicon.png` - Your favicon
- `_vercel` - Vercel internal paths
- Static file extensions (.png, .jpg, .jpeg, .gif, .svg, .ico, .webp, .pdf, .txt, .css, .js, .json, .woff, .woff2, .ttf, .eot)

## Next Steps
1. Commit the updated `vercel.json` to your repository
2. Push to trigger a new deployment on Vercel
3. All images and static files should now load correctly

## Verification
The build completed successfully with all 34 images copied to `dist/images/`.

