# Labour Booking System

A static React web application (Uber-like UI) for booking labour services. **College academic project** – no backend, database, or real authentication.

## Features

- **Two user roles**: Customer (books labour) and Labour (provides services)
- **Role selection** at registration: "Register as Customer" / "Register as Labour"
- **Customer dashboard**: Browse labours, filter by skill, search, book labour, view My Bookings
- **Labour dashboard**: Profile, availability status, booking requests, earnings summary, edit profile
- **Static auth**: Dummy login/register; redirect to correct dashboard by role

## Tech Stack

- React (functional components)
- React Router
- Context API (auth state)
- Tailwind CSS
- Vite

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

## Build & Install on Mobile (PWA)

The app is a **Progressive Web App (PWA)**. You can install it on your phone like a native app.

1. **Build and host** the app (e.g. deploy to Vercel, Netlify, or any static host):

   ```bash
   npm run build
   ```

   Then upload the `dist` folder or connect your repo to a host.

2. **Install on phone**
   - **Android**: Open the app URL in Chrome → menu (⋮) → “Install app” or “Add to Home screen”.
   - **iPhone/iPad**: Open in Safari → Share → “Add to Home Screen”.

When opened from the home screen, the app runs in standalone mode (full screen, no browser UI).

## Build (local)

```bash
npm run build
npm run preview
```

## Purpose

Academic project to demonstrate role-based UI, React routing, component structure, and frontend logic. No backend, database, payment, or real-time features.
