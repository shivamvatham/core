# CORE - Enterprise Dashboard

Hey! Thanks for checking out my project. This is a responsive enterprise dashboard I built for the interview assignment.

## Quick Start

Getting this running is pretty straightforward:

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## What I Built

This is a people management dashboard with:
- A collapsible sidebar that works differently on mobile vs desktop
- A people listing page with search and pagination
- Employee cards with profile pictures and status indicators
- A navbar with a working clock

## Tech Stack

I went with:
- **React 18** + **TypeScript** - For type safety and modern React features
- **Vite** - Super fast dev server, way better than CRA
- **Tailwind CSS** - Makes responsive design much easier
- **React Router** - For navigation between pages
- **Lucide React** - Clean, consistent icons

## Project Structure

I organized it like this:
```
src/
├── components/     # Reusable stuff like EmployeeCard
├── layouts/        # MainLayout, Navbar, Sidebar
├── pages/          # Actual pages (People, Dashboard, etc.)
└── router.tsx      # All the routes
```

## Key Features I Implemented

### Responsive Sidebar
- **Mobile**: Slides in as an overlay, closes when you tap outside
- **Desktop**: Pushes the content to the right when open, stays open while navigating
- The hamburger menu hides on desktop when the sidebar is open (cleaner look)

### People Page
- **Search**: Type to filter employees by name in real-time
- **Pagination**: Choose 8, 16, 24, or 50 rows per page
- **Responsive Grid**: 
  - Mobile: 2 cards per row
  - Desktop: Auto-fits as many 248px cards as possible
- Each card has a gear badge overlay (used the VectorGear.png from assets)

### Little Details
- Custom scrollbar styling (thin, subtle)
- Smooth transitions everywhere
- Active route highlighting in the sidebar
- Real-time clock in the navbar
- Status dots with specific colors (#FFC83E, #70D32E, #6194EC, #FB8C3D)

## Design Decisions & Assumptions

### What I Assumed
1. **Card Size**: Kept it fixed at 248px width as per the design specs
2. **Gap Spacing**: Used 10px between cards consistently
3. **Mobile Behavior**: Sidebar should close after navigation on mobile, but stay open on desktop
4. **Data**: Used mock data since there's no backend (but structured it so it's easy to swap in an API)

### Responsive Breakpoints
I used Tailwind's defaults:
- `sm`: 640px (tablet)
- `md`: 768px
- `lg`: 1024px (desktop)
- `xl`: 1280px