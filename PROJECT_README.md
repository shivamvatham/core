# CORE - Enterprise Dashboard Application

A modern, responsive enterprise dashboard application built with React, TypeScript, and Tailwind CSS.

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd core
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## 🛠️ Tech Stack

### Core Technologies
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Custom CSS** - For specific component styling

### UI Components & Icons
- **Lucide React** - Icon library
- **Custom Components** - Reusable component architecture

### Development Tools
- **ESLint** - Code linting
- **TypeScript Compiler** - Type checking

## 📁 Project Structure

```
core/
├── src/
│   ├── assets/          # Static assets (images, vectors)
│   ├── components/      # Reusable UI components
│   │   └── EmployeeCard.tsx
│   ├── layouts/         # Layout components
│   │   ├── MainLayout.tsx
│   │   ├── Navbar.tsx
│   │   └── Sidebar.tsx
│   ├── pages/           # Page components
│   │   ├── Dashboard.tsx
│   │   ├── People.tsx
│   │   └── ...
│   ├── router.tsx       # Route configuration
│   └── main.tsx         # Application entry point
├── public/              # Public static files
└── package.json         # Dependencies and scripts
```

## 🎯 Key Features

### Responsive Design
- **Mobile**: 2 cards per row, collapsible sidebar with overlay
- **Tablet**: 3 cards per row
- **Desktop**: 4+ cards per row, toggleable sidebar with push behavior

### Navigation
- **Sidebar**: Collapsible navigation with active state indicators
- **Navbar**: Dynamic route labels, real-time clock, user profile
- **Responsive Behavior**: 
  - Mobile: Sidebar closes on navigation
  - Desktop: Sidebar stays open, content shifts right

### People Page
- **Search**: Real-time filtering by employee name
- **Pagination**: Configurable rows per page (8, 16, 24, 50)
- **Grid Layout**: Responsive card grid with auto-fit
- **Employee Cards**: 
  - Profile images with gear badge overlay
  - Status indicators (4 colored dots)
  - Role and name display

### UI/UX Features
- Smooth transitions and animations
- Custom scrollbar styling
- Hover effects and active states
- Accessible form controls
- Touch-friendly mobile interface

## 📝 Assumptions Made

### Design Decisions
1. **Card Width**: Fixed at 248px for consistency across all screen sizes
2. **Gap Spacing**: 10px between cards as specified
3. **Color Scheme**: 
   - Primary: #3D3936 (dark brown)
   - Accent: #947550 (gold/amber)
   - Status colors: #FFC83E, #70D32E, #6194EC, #FB8C3D

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Data Management
- Employee data is currently static (mock data)
- Search is client-side filtering
- Pagination is handled in-memory
- No backend API integration (ready for implementation)

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript features
- CSS Grid and Flexbox

### Functionality Assumptions
1. **Sidebar Behavior**:
   - Desktop: Toggleable, pushes content when open
   - Mobile: Overlay mode, closes on navigation
   
2. **Search**:
   - Case-insensitive
   - Searches employee names only
   - Resets to page 1 on search

3. **Pagination**:
   - Shows actual count based on filtered results
   - Disables navigation buttons appropriately
   - Resets to page 1 when changing rows per page

4. **Time Display**:
   - Shows local system time
   - 24-hour format
   - Updates every second

## 🔧 Configuration

### Tailwind Configuration
The project uses Tailwind CSS with custom configurations for:
- Custom colors
- Custom spacing
- Responsive breakpoints
- Custom scrollbar utilities

### TypeScript Configuration
- Strict mode enabled
- Path aliases configured
- Type checking for all files

## 🚦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Behavior Summary

| Screen Size | Sidebar | Cards per Row | Navbar |
|------------|---------|---------------|--------|
| Mobile (<640px) | Overlay | 2 | Full width |
| Tablet (640-1024px) | Overlay | 3 | Full width |
| Desktop (>1024px) | Push content | 4+ (auto-fit) | Shifts with sidebar |

## 🎨 Design System

### Typography
- Font: System font stack
- Sizes: Responsive (text-sm to text-lg)
- Weights: 400 (normal), 500 (medium), 700 (bold)

### Spacing
- Consistent gap spacing (2.5, 4, 6)
- Padding: 4, 6 units
- Margins: Responsive based on screen size

### Border Radius
- Small: rounded-lg (8px)
- Medium: rounded-xl (12px)
- Large: rounded-3xl (24px)
- Full: rounded-full

## 🔐 Security Considerations

- No sensitive data stored in localStorage
- Avatar images from external CDN (pravatar.cc)
- No authentication implemented (ready for integration)

## 🚀 Future Enhancements

- Backend API integration
- User authentication
- Real-time data updates
- Advanced filtering options
- Export functionality
- Dark mode support
- Internationalization (i18n)

## 📄 License

This project is private and proprietary.

## 👥 Contact

For questions or support, please contact the development team.
