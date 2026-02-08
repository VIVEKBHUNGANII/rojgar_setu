# Rojgar Setu – Labour Booking System

A static React web application (Uber-like UI) for booking labour services. **College academic project** – no backend, database, or real authentication. **Installable on mobile** as a Progressive Web App (PWA).

## Features

- **Two user roles**: Customer (books labour) and Labour (provides services)
- **Role selection** at registration: "Register as Customer" / "Register as Labour"
- **Customer dashboard**: Browse labours, filter by skill, search, book labour, view My Bookings
- **Labour dashboard**: Profile, availability status, booking requests, earnings summary, edit profile
- **Static auth**: Dummy login/register; redirect to correct dashboard by role
- **PWA**: Install on phone (Android / iOS) from the browser; runs standalone with offline-friendly caching

## Tech Stack

- React (functional components)
- React Router
- Context API (auth state)
- Tailwind CSS
- Vite
- **vite-plugin-pwa** (Progressive Web App: manifest, service worker, install prompt)

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Demo Credentials

| Role     | Email             | Password |
| -------- | ----------------- | -------- |
| Customer | customer@demo.com | demo123  |
| Labour   | labour@demo.com   | demo123  |

Or register a new account and choose **Register as Customer** or **Register as Labour**.

## Pages

- **/** – Home
- **/login** – Login
- **/register** – Registration (role selection)
- **/customer** – Customer dashboard (labour list, search, filter)
- **/customer/bookings** – My Bookings
- **/customer/book/:id** – Book a labour (UI only)
- **/labour** – Labour dashboard (requests, earnings)
- **/labour/profile** – Edit profile (UI only)

## Build

```bash
npm run build
npm run preview   # optional: test production build locally at http://localhost:4173
```

Output is in the `dist/` folder. Deploy `dist/` to any static host (Vercel, Netlify, GitHub Pages, etc.).

## Install on Mobile (PWA)

The app is a **Progressive Web App (PWA)**. After deploying, users can install it on their phone:

1. **Android**: Open the app URL in **Chrome** → menu (⋮) → **Install app** or **Add to Home screen**.
2. **iPhone / iPad**: Open in **Safari** → **Share** → **Add to Home Screen**.

When opened from the home screen, the app runs in **standalone** mode (full screen, no browser UI). On Android Chrome, an in-app install banner may also appear.

## Purpose

Academic project to demonstrate role-based UI, React routing, component structure, and frontend logic. No backend, database, payment, or real-time features.
