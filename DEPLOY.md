# 🚀 NestAway USA – Deployment Guide
**Owner: Isaiah Ontoya**

---

## ✅ Build Status: PASSING (30 routes)

---

## Step 1 — Push to GitHub

1. Go to **https://github.com/new**
2. Repository name: `nestaway-usa`
3. Set to **Public**, click **Create repository**
4. In your terminal, run these commands:

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/nestaway-usa.git
git push -u origin main
```

---

## Step 2 — Deploy to Vercel (Free)

1. Go to **https://vercel.com** → Sign up / Log in with GitHub
2. Click **"Add New Project"**
3. Import your `nestaway-usa` repository
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy** — done in ~60 seconds!

Your live URL will be: `https://nestaway-usa.vercel.app`

---

## Step 3 — Custom Domain (Optional)
In Vercel → Settings → Domains → Add `nestaway.us` or any domain you own.

---

## 🏠 Public Website Pages
| Page | URL |
|------|-----|
| Homepage | `/` |
| All Listings | `/listings` |
| Listing Detail | `/listings/[id]` |
| Pricing Plans | `/pricing` |
| List Property | `/list-property` |
| About | `/about` |
| Contact | `/contact` |

## 🔑 Resident Portal Pages
| Page | URL |
|------|-----|
| Login | `/resident/login` |
| Dashboard | `/resident/dashboard` |
| Pay Rent | `/resident/pay` |
| Maintenance | `/resident/maintenance` |
| Renewals | `/resident/renewals` |
| Documents | `/resident/documents` |
| Profile | `/resident/profile` |

## 🧪 Demo Login
- **Email:** jordan.mitchell@email.com  
- **Password:** password123

---

## 💳 Stripe Integration (To Go Live)
1. Create account at **https://stripe.com**
2. Get your secret key from Dashboard → Developers → API Keys
3. Add to Vercel: Settings → Environment Variables → `STRIPE_SECRET_KEY`
4. Install: `npm install stripe @stripe/stripe-js`
5. Create `/app/api/create-payment-intent/route.ts`

---

## 📞 Support
Owner: Isaiah Ontoya | info@nestaway.us
