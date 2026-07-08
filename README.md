# RevoShop — Premium Watch E-Commerce Store

An online store for **RevoShop**, a fictional watch retailer. Built with Next.js App Router as part of a web development milestone assignment.

## Overview

RevoShop is a customer-facing e-commerce website where users can browse premium watches, view product details, add items to their cart, login, checkout, and manage products via admin panel. The site uses client-side navigation, API routes, and local storage for state persistence.

**Live Demo:** Deploy to [Vercel](https://vercel.com) and add your URL here.

**Repository:** Add your GitHub repository URL here.

## Features Implemented

### Home Page (Product Listing)
- Hero section with call-to-action
- Product grid displaying watches from API with images, names, prices
- Click any product to navigate to its detail page via `next/link`
- Loading states for smooth UX

### Product Detail Page (`/products/[id]`)
- Dynamic routing with App Router (`src/app/products/[id]/page.js`)
- Fetches product from API
- Displays name, description, price, and image
- **Add to Cart** button with visual feedback
- Back navigation to shop

### Static Pages
- `/promotions` — Current deals and promo codes
- `/faq` — Frequently asked questions
- `/about` — Company story and stats

### Cart
- `/cart` — View cart items, adjust quantities, remove items
- Cart state managed with context API (persisted to localStorage)
- Cart badge in header showing item count

### Authentication
- `/login` — Login page using FakeStoreAPI for authentication
- Logout functionality
- User info persisted to localStorage
- Protected routes (checkout, admin)
- Header shows user name and navigation links

### Checkout
- `/checkout` — Protected page for checkout process
- Shows user info, shipping details form, and order summary
- Only accessible to logged-in users

### Admin Dashboard
- `/admin` — Admin panel to manage products
- View all products
- Add new product
- Edit existing product
- Delete product
- Uses API routes for CRUD operations

### API Routes
- `/api/products` — GET (list) and POST (create) products
- `/api/products/[id]` — GET (single), PUT (update), DELETE products
- In-memory storage for demonstration purposes

## Technologies Used

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org) | React framework with App Router and API Routes |
| [React 19](https://react.dev) | UI components and state management |
| [Tailwind CSS 4](https://tailwindcss.com) | Styling |
| [next/image](https://nextjs.org/docs/app/building-your-application/optimizing/images) | Optimized product images |
| [next/link](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating) | Client-side navigation |
| [FakeStoreAPI](https://fakestoreapi.com/) | External API for authentication and products |
| Local Storage | Persisting cart and user state |

## Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout with providers
│   ├── page.js            # Home — product listing (client-side fetch)
│   ├── products/[id]/     # Dynamic product detail page
│   ├── promotions/        # Static promotions page
│   ├── faq/               # Static FAQ page
│   ├── about/             # Static about page
│   ├── cart/              # Shopping cart page
│   ├── checkout/          # Checkout page (protected)
│   ├── login/             # Login page
│   ├── admin/             # Admin dashboard
│   └── api/               # API Routes
│       └── products/
│           ├── route.js   # List and create products
│           └── [id]/
│               └── route.js # Get, update, delete single product
├── components/
│   ├── Header.js          # Navigation + cart + user info
│   ├── Footer.js
│   ├── ProductCard.js     # Reusable product card
│   ├── ProductGrid.js     # Product grid layout
│   ├── ProductListing.js  # Product listing with filters
│   ├── AddToCartButton.js # Add to cart button
│   └── Providers.js       # Context providers wrapper
├── context/
│   ├── CartContext.js     # Cart state
│   └── AuthContext.js     # Auth state
└── data/
    └── products.js        # Utility functions (formatPrice, etc.)
```

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Demo Credentials (FakeStoreAPI)
- Username: `mor_2314`
- Password: `83r5^_`

## Author

Calvin Marcellino
