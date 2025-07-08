# Tinor – Local Shop Product Finder (Full‑Stack Web App)

Tinor helps customers locate nearby shops that have a desired product **in stock**, view pricing & expiry,
and optionally pre‑book the item.  Shopkeepers manage their inventory through a separate dashboard.

> **Tech Stack**  
> • Frontend – React + Tailwind CSS  
> • Backend – Node.js, Express.js  
> • Database – MongoDB (with Mongoose)  
> • Auth – JWT (access + refresh)  

## Core Features
| Role | Capability |
| ---- | ---------- |
| Customer | 🔍 Product search, 📍 view list of shops (distance, price, stock, expiry), 🛒 pre‑book |
| Shopkeeper | ➕ CRUD products, 🔄 live stock update, 📅 expiry tracking |
| Both | 🔑 Auth (register / login), ⭐ shop rating, 📊 demand analytics (basic) |

## Local Setup

```bash
# 1. clone repo & install
pnpm install # or npm / yarn in both client & server

# 2. copy env
cp server/.env.example server/.env
cp client/.env.example client/.env

# 3. run dev (concurrently)
pnpm dev
```

## Production Deployment
| Layer | Service (example) |
| ----- | ---------------- |
| Backend | Render / Railway |
| Frontend | Netlify / Vercel |
| DB | MongoDB Atlas |

## Screenshots
_Coming soon_

---

**Made with ❤️ by Jitendra Kumar Soni (IIIT Kalyani)**  
