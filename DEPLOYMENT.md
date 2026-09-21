# Gold Mine Landscaping — Cloudflare Pages Deployment Guide

This guide walks you through exporting this project from Google AI Studio, pushing it to GitHub, and deploying it live on Cloudflare Pages under your custom subdomain (`goldmine-landscaping-demo.pages.dev`) or your custom domain (`goldminelandscaping.com.au`).

---

## 1. Project Specifications & Scripts

This application is built with **React 19**, **Vite**, and **TypeScript**.

### `package.json` Build Scripts
```json
{
  "scripts": {
    "dev": "vite --port=3000 --host=0.0.0.0",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "tsc --noEmit"
  }
}
```

- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **SPA Fallback Routing:** Handled via `public/_redirects` (`/* /index.html 200`), ensuring all URL routes and refreshes resolve correctly on Cloudflare Pages without 404s.

---

## 2. GitHub Repository Structure

Ensure your GitHub repository root contains the following structure (do **not** commit `node_modules` or `dist`):

```text
├── .env.example
├── .gitignore
├── DEPLOYMENT.md
├── index.html
├── metadata.json
├── package.json
├── public/
│   ├── _headers
│   ├── _redirects
│   ├── favicon.svg
│   ├── robots.txt
│   └── assets/
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── components/
│   │   ├── About.tsx
│   │   ├── ContactSection.tsx
│   │   ├── FaqSection.tsx
│   │   ├── FinalCta.tsx
│   │   ├── FloatingWhatsApp.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── MobileActionBar.tsx
│   │   ├── ProjectLightbox.tsx
│   │   ├── ProjectShowcase.tsx
│   │   ├── QuoteBanner.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   └── WhyChoose.tsx
│   └── data/
│       └── content.ts
├── tsconfig.json
└── vite.config.ts
```

---

## 3. Step-by-Step Deployment Instructions

### Step 1: Export Project from Google AI Studio
1. Open the project in Google AI Studio.
2. In the top right menu, tap **Settings / Options** (gear or three dots).
3. Select **Export to ZIP** and download the archive to your device.
4. Extract the ZIP file into a folder on your computer.

### Step 2: Create a GitHub Repository
1. Log into **[github.com](https://github.com)**.
2. Tap the **+** icon in the header and select **New repository**.
3. Name your repository (e.g. `goldmine-landscaping`).
4. Set repository visibility to **Public** or **Private**.
5. Leave "Initialize with a README" unchecked, then click **Create repository**.
6. On the empty repo page, click **"uploading an existing file"** (or use git CLI).
7. Select and upload all project files (matching the structure above), then click **Commit changes**.

### Step 3: Deploy on Cloudflare Pages
1. Log into your **[Cloudflare Dashboard](https://dash.cloudflare.com/)**.
2. Navigate to **Workers & Pages** in the left sidebar.
3. Click **Create application** → select the **Pages** tab.
4. Click **Connect to Git** and choose **GitHub**.
5. Grant Cloudflare access to your `goldmine-landscaping` repository and select it.
6. Click **Begin setup**.
7. Enter the exact build configuration:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** *(leave blank)*
8. Click **Save and Deploy**.
9. Wait ~60 seconds for Cloudflare's build runners to install dependencies and execute `vite build`.

### Step 4: Claim Your Custom Subdomain (`goldminelandscaping.pages.dev`)
1. Once deployment succeeds, open your project in **Workers & Pages**.
2. Go to the **Settings** tab → **General**.
3. Under **Project name**, click **Edit / Rename**.
4. Change the project name to:
   ```text
   goldminelandscaping
   ```
5. Save changes. Your site will instantly be accessible at:
   `https://goldminelandscaping.pages.dev`

### Step 5: Connecting Your Business Domain (e.g., `goldminelandscaping.com.au`)
1. In your Cloudflare Pages project, click the **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Enter your domain (e.g., `goldminelandscaping.com.au` or `www.goldminelandscaping.com.au`).
4. Follow the automated DNS verification or add the `CNAME` pointing to `goldminelandscaping.pages.dev`.
5. Cloudflare will automatically provision a free universal SSL/TLS certificate.
