# RevoShop — Premium Watch E-Commerce Store

An online store for **RevoShop**, a fictional watch retailer. Built with Next.js App Router as part of a web development milestone assignment.

## Overview

RevoShop is a customer-facing e-commerce website where users can browse premium watches, view product details, and add items to their cart. The site includes static informational pages (Promotions, FAQ, About) and uses client-side navigation throughout.

**Live Demo:** Deploy to [Vercel](https://vercel.com) and add your URL here.

**Repository:** Add your GitHub repository URL here.

## Features Implemented

### Home Page (Product Listing)
- Hero section with call-to-action
- Product grid displaying 8 mock watches with images, names, prices, and category badges
- Click any product to navigate to its detail page via `next/link`

### Product Detail Page (`/products/[id]`)
- Dynamic routing with App Router (`src/app/products/[id]/page.js`)
- Displays name, description, price, and image
- **Add to Cart** button with visual feedback
- Back navigation to shop

### Static Pages
- `/promotions` — Current deals and promo codes
- `/faq` — Frequently asked questions
- `/about` — Company story and stats

### Cart
- `/cart` — View cart items, adjust quantities, remove items
- Cart state managed with `useState` and `useEffect` (persisted to localStorage)
- Cart badge in header showing item count

### Routing & Navigation
- App Router file-based routing
- Dynamic route `[id]` for product pages
- `Link` from `next/link` for client-side navigation (no full page reloads)
- `generateStaticParams` for static generation of product pages

## Technologies Used

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org) | React framework with App Router |
| [React 19](https://react.dev) | UI components and state management |
| [Tailwind CSS 4](https://tailwindcss.com) | Styling |
| [next/image](https://nextjs.org/docs/app/building-your-application/optimizing/images) | Optimized product images |
| [next/link](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating) | Client-side navigation |

## Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout with providers
│   ├── page.js            # Home — product listing
│   ├── products/[id]/     # Dynamic product detail
│   ├── promotions/        # Static promotions page
│   ├── faq/               # Static FAQ page
│   ├── about/             # Static about page
│   └── cart/              # Shopping cart page
├── components/
│   ├── Header.js          # Navigation + cart badge
│   ├── Footer.js
│   ├── ProductCard.js     # Reusable product card
│   ├── ProductGrid.js     # Product grid layout
│   ├── AddToCartButton.js # Client component with useState
│   └── Providers.js       # Cart context wrapper
├── context/
│   └── CartContext.js     # Cart state (useState + useEffect)
└── data/
    └── products.js        # Mock watch product data
```

## Getting Started

Install dependencies and run the development server:

```bash
bun install   # or npm install
bun dev       # or npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy on Vercel

1. Push the project to GitHub
2. Import the repository at [vercel.com/new](https://vercel.com/new)
3. Deploy — no extra configuration needed

## Screenshots

_Add screenshots of the home page, product detail, and cart here after running locally._

## Author

Revo U — Milestone 3 Assignment
