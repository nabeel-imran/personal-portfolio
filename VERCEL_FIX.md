# Vercel 404 Fix Applied

## Changes made

1. **vercel.json** – Removed `outputDirectory: ".next"` and env from config (Vercel handles Next.js build output; add env in Dashboard).
2. **Removed next.config.mjs** – Avoids conflict with `next.config.js`.
3. **next.config.js** – Switched to `remotePatterns` for images (replacing deprecated `domains`).

## After pushing to GitHub

1. **Redeploy on Vercel**
   - Open https://vercel.com/dashboard
   - Open project **nabeels-code**
   - Go to **Deployments** → open the latest deployment → **Redeploy**
   - Or push to GitHub and wait for automatic redeploy

2. **Check project settings**
   - **Settings** → **General**
   - **Root Directory**: leave empty (or `.`)
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: leave empty (Vercel uses Next.js default)

3. **Environment variables**
   - **Settings** → **Environment Variables**
   - Add for Production (and Preview if you want):
     - `OPENAI_API_KEY`
     - `EMAIL_USER`
     - `EMAIL_PASS`
     - `NEXT_PUBLIC_WHATSAPP_NUMBER` = `923239960094`
     - `NEXT_PUBLIC_SITE_URL` = `https://nabeels-code.vercel.app`

4. **If it still 404s**
   - In **Deployments**, open the latest deployment and check **Building** and **Logs** for errors.
   - If the build fails, fix the reported error and redeploy.
