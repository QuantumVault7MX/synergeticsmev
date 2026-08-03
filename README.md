# Starter Bonus Landing Page

A high-converting, modern landing page with RichAds Postback tracking and Cloudflare Pages hosting configuration.

---

## 🚀 Cloudflare Pages Hosting Guide

This application is built with Vite + React and is pre-configured for instant deployment on **Cloudflare Pages**.

### Method 1: Git Integration (Recommended for automatic deployments)

1. Push your repository to **GitHub** or **GitLab**.
2. Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository and configure the build settings:
   - **Framework preset**: `Vite` (or `None`)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js Version** (optional env): `NODE_VERSION` = `20`
4. Click **Save and Deploy**. Cloudflare will automatically build and host your site with custom domain support, SSL, and global edge CDN caching.

### Method 2: Command Line (Wrangler CLI)

1. Login to Cloudflare via terminal:
   ```bash
   npx wrangler login
   ```
2. Build and deploy directly to Cloudflare Pages:
   ```bash
   npm run deploy
   ```
   *(Or run `npm run build` followed by `npx wrangler pages deploy dist`)*

> ℹ️ Note: SPA routing is handled via `public/_redirects` (`/* /index.html 200`), ensuring non-root routes reload smoothly on Cloudflare.

---

## 🎯 RichAds Postback URL Integration

The landing page features built-in tracking for **RichAds** (and other ad network S2S postbacks).

### How It Works

1. **Automatic `click_id` Capture**:
   - When a visitor arrives via a RichAds campaign link with parameters such as `?click_id=XXXX` (or `clickid`, `sub_id`, `token`), the page automatically parses and stores the ID in browser storage (`localStorage` & `sessionStorage`).

2. **Conversion Events**:
   - **`lead`**: Fired when a user enters their Telegram ID / Email / Phone and submits Step 1 in the Claim Modal, or copies their voucher code.
   - **`conversion`**: Fired when the user clicks **"Sertai Kumpulan Rasmi & Aktifkan RM100 Sekarang"** to join the community.

3. **RichAds Postback URL Format**:
   - Default Template: `https://xml.richads.com/postback?click_id={click_id}&event={event}`
   - The script replaces `{click_id}` with the visitor's captured ID and `{event}` with `lead` or `conversion`.

### Configuring & Testing Postbacks

1. Click the **⚙️ Settings (Tetapan)** icon in the top navigation bar.
2. In the **Tetapan Postback URL (RichAds)** section:
   - Toggle **Aktifkan Postback** ON/OFF.
   - Edit the **RichAds Postback URL Template** or parameter names if using a custom tracking link.
   - View the active `click_id` detected in your current session.
   - Enter a test ID and click **Uji Postback** to verify live postback execution.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Run TypeScript linting check
npm run lint

# Build production bundle for static hosting
npm run build
```
