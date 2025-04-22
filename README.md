# 🧩 WordPress Plugin & Site Info Detector - Chrome Extension

This Chrome extension helps developers and tech enthusiasts detect useful information from any **public WordPress site** — instantly from the frontend!

---

## 🚀 Features

- ✅ Detects **WordPress version**
- 🔌 Lists all **active plugin names and versions** (based on enqueued assets)
- 🎨 Detects **active theme name and version**
- ☁️ Detects use of major **CDNs** (Cloudflare, jsDelivr, cdnjs, etc.)
- 🖥️ Detects **PHP version** and **server engine** from HTTP headers (if not hidden)
- ⚡ Detects if **caching is enabled**
- 🧼 Clean UI: hides any value that isn't properly detected

---

## 📦 How to Install (Unpacked)

1. Download the `.zip` and extract it
2. Go to `chrome://extensions/`
3. Enable **Developer mode** (top-right)
4. Click **Load unpacked**
5. Select the extracted folder
6. Navigate to any WordPress site and click the extension icon

---

## 📌 Notes

- Works by analyzing the HTML source and HTTP response headers
- Designed for frontend-only detection — no admin access or security bypass
- Obfuscated or optimized setups (like custom caching/CDNs) may limit detection

---

## 🛠️ For Developers

Feel free to modify or enhance the extension!  
Ideas for future improvements:
- Detect child themes
- Show WooCommerce presence
- Estimate hosting provider (based on headers/IPs)
- Add dark mode support 🌙

---

## 📄 License

MIT License — free to use, modify, and distribute.
