# Krontiva Website - Complete Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Features](#features)
5. [Pages and Routes](#pages-and-routes)
6. [Components](#components)
7. [API Routes](#api-routes)
8. [Configuration](#configuration)
9. [Development Setup](#development-setup)
10. [Code Architecture](#code-architecture)
11. [Environment Variables](#environment-variables)
12. [Deployment](#deployment)

---

## Project Overview

**Krontiva Website** is a modern, full-stack web application built with Next.js 15, designed for Krontiva Africa - an industry-leading transformation company. The website serves as both a corporate website showcasing services and a content management system for publishing articles and news.

### Key Characteristics
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Library**: Custom components with Framer Motion animations
- **Content Management**: Rich text editor (TipTap) for article creation
- **Authentication**: JWT-based authentication system
- **Backend Integration**: RESTful API integration with external backend

---

## Technology Stack

### Core Technologies
- **Next.js 15.1.6** - React framework with App Router
- **React 19.0.0** - UI library
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 3.4.1** - Utility-first CSS framework

### Key Dependencies
- **framer-motion 12.4.2** - Animation library
- **@tiptap/react 2.11.5** - Rich text editor
- **lucide-react 0.474.0** - Icon library
- **@radix-ui/react-dialog 1.1.6** - Accessible UI components
- **class-variance-authority** - Component variant management
- **clsx & tailwind-merge** - Conditional class utilities

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundler (dev mode)

---

## Project Structure

```
krontiva-website/
├── app/                          # Next.js App Router directory
│   ├── about/                    # About page
│   ├── api/                      # API routes
│   │   ├── articles/            # Article CRUD endpoints
│   │   │   ├── [id]/           # Individual article operations
│   │   │   └── route.ts        # List/create articles
│   │   └── auth/                # Authentication endpoints
│   │       ├── login/          # Login endpoint
│   │       └── me/              # User details endpoint
│   ├── components/              # React components
│   │   ├── editor/             # Rich text editor components
│   │   ├── forms/              # Form components
│   │   ├── hero/               # Hero section components
│   │   ├── layout/             # Layout components (Header, Footer, Navigation)
│   │   ├── sections/           # Page section components
│   │   └── ui/                 # Reusable UI components
│   ├── contact/                # Contact page
│   ├── cookies/                # Cookie policy page
│   ├── jobs/                   # Careers/jobs page
│   ├── news/                   # News listing and detail pages
│   │   ├── [id]/              # Individual article page
│   │   └── page.tsx           # News listing page
│   ├── privacy/                # Privacy policy page
│   ├── projects/               # Projects showcase
│   │   ├── [slug]/           # Individual project page
│   │   └── page.tsx          # Projects listing
│   ├── services/               # Service pages
│   │   ├── customer-transformation/
│   │   ├── financial-transformation/
│   │   ├── operational-transformation/
│   │   ├── workforce-transformation/
│   │   └── page.tsx          # Services overview
│   ├── terms/                 # Terms of service page
│   ├── write/                 # Article writing/editing interface
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx              # Home page
├── lib/                       # Utility libraries
│   └── utils.ts              # Helper functions
├── public/                    # Static assets
│   ├── gallery/              # Image gallery
│   ├── projects/             # Project images
│   └── team/                 # Team member photos
├── types/                     # TypeScript type definitions
│   └── custom.d.ts          # Custom type declarations
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies and scripts
└── README.md                 # Basic project readme
```

---

## Features

### Public Features
1. **Homepage**
   - Hero section with video background
   - Innovation showcase
   - Services overview
   - Statistics display
   - Latest news/articles

2. **Services Pages**
   - Customer Transformation
   - Financial Transformation
   - Operational Transformation
   - Workforce Transformation
   - Each with detailed features and descriptions

3. **News/Articles System**
   - Article listing page (`/news`)
   - Individual article pages (`/news/[id]`)
   - Category filtering (UPDATES, INSIGHTS, NEWS)
   - Author information
   - Featured images

4. **Projects Showcase**
   - Project listing (`/projects`)
   - Individual project pages (`/projects/[slug]`)
   - Project images and descriptions

5. **About Page**
   - Company information
   - Team members
   - Company values and mission

6. **Contact Form**
   - Contact information
   - Form submission interface

7. **Legal Pages**
   - Privacy Policy (`/privacy`)
   - Terms of Service (`/terms`)
   - Cookie Policy (`/cookies`)

8. **Jobs/Careers**
   - Job listings and career opportunities

### Admin Features
1. **Authentication System**
   - JWT-based login (`/write`)
   - Protected routes
   - User session management
   - Token storage in localStorage

2. **Article Management**
   - Create new articles
   - Edit existing articles
   - Delete articles
   - Rich text editor with formatting tools
   - Image upload (max 2MB)
   - Tag management
   - Category selection
   - Slug generation
   - Article preview list

3. **Content Editor**
   - TipTap rich text editor
   - Toolbar with formatting options
   - Image insertion
   - Link insertion
   - HTML content support

---

## Pages and Routes

### Public Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `app/page.tsx` | Homepage with hero, services, stats, and news |
| `/about` | `app/about/page.tsx` | About page with company info and team |
| `/services` | `app/services/page.tsx` | Services overview page |
| `/services/customer-transformation` | `app/services/customer-transformation/page.tsx` | Customer transformation details |
| `/services/financial-transformation` | `app/services/financial-transformation/page.tsx` | Financial transformation details |
| `/services/operational-transformation` | `app/services/operational-transformation/page.tsx` | Operational transformation details |
| `/services/workforce-transformation` | `app/services/workforce-transformation/page.tsx` | Workforce transformation details |
| `/news` | `app/news/page.tsx` | News/articles listing page |
| `/news/[id]` | `app/news/[id]/page.tsx` | Individual article detail page |
| `/projects` | `app/projects/page.tsx` | Projects listing page |
| `/projects/[slug]` | `app/projects/[slug]/page.tsx` | Individual project detail page |
| `/contact` | `app/contact/page.tsx` | Contact page with form |
| `/jobs` | `app/jobs/page.tsx` | Careers/jobs page |
| `/privacy` | `app/privacy/page.tsx` | Privacy policy page |
| `/terms` | `app/terms/page.tsx` | Terms of service page |
| `/cookies` | `app/cookies/page.tsx` | Cookie policy page |

### Admin Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/write` | `app/write/page.tsx` | Article writing/editing interface (protected) |

---

## Components

### Layout Components

#### `Header` (`app/components/layout/Header.tsx`)
- Responsive navigation header
- Mobile menu with slide-out sheet
- Dropdown menu for "About" section
- Logo display
- Active route highlighting
- Framer Motion animations

#### `Footer` (`app/components/layout/Footer.tsx`)
- Site footer with links
- Company information
- Social media links
- Copyright information

#### `Navigation` (`app/components/layout/Navigation.tsx`)
- Navigation menu structure
- Route definitions

### Hero Components

#### `MainHero` (`app/components/hero/MainHero.tsx`)
- Main homepage hero section
- Video background support
- Call-to-action buttons
- Animated text

#### `Hero` (`app/components/hero/Hero.tsx`)
- Reusable hero component
- Customizable content

### Section Components

#### `Innovation` (`app/components/sections/Innovation.tsx`)
- Innovation showcase section
- Feature highlights

#### `Services` (`app/components/sections/Services.tsx`)
- Services grid display
- Service cards with icons
- Links to service detail pages

#### `Stats` (`app/components/sections/Stats.tsx`)
- Statistics/metrics display
- Animated counters

#### `LatestNews` (`app/components/sections/LatestNews.tsx`)
- Latest articles preview
- Article cards
- Links to full articles

#### `CustomerTransform`, `FinancialTransform`, `OperationalTransform`, `WorkforceTransform`
- Service-specific transformation sections
- Feature lists
- Descriptions

#### `FAQ` (`app/components/sections/FAQ.tsx`)
- Frequently asked questions
- Accordion-style display

#### `Industries` (`app/components/sections/Industries.tsx`)
- Industry showcase
- Industry-specific information

#### `TransformationServices` (`app/components/sections/TransformationServices.tsx`)
- Transformation services overview

#### `TransformStacks` (`app/components/sections/TransformStacks.tsx`)
- Technology stack information

### Editor Components

#### `ArticleEditor` (`app/components/editor/ArticleEditor.tsx`)
- Rich text editor using TipTap
- Content editing interface
- HTML content output
- Integrated with Toolbar component

#### `Toolbar` (`app/components/editor/Toolbar.tsx`)
- Editor formatting toolbar
- Bold, italic, headings, lists
- Link and image insertion
- Text alignment options

### Form Components

#### `ContactForm` (`app/components/forms/ContactForm.tsx`)
- Contact form
- Form validation
- Submission handling

### UI Components

#### `Modal` (`app/components/ui/Modal.tsx`)
- Reusable modal/dialog component
- Success/error message display
- Confirmation dialogs

#### `CookieConsent` (`app/components/ui/CookieConsent.tsx`)
- Cookie consent banner
- GDPR compliance

#### `Sheet` (`app/components/ui/sheet.tsx`)
- Slide-out panel component
- Used for mobile navigation

#### Icons (`app/components/ui/icons/`)
- Custom SVG icon components
- Menu icons
- Arrow icons
- Various UI icons

---

## API Routes

### Articles API

#### `GET /api/articles`
- **Purpose**: Fetch all articles
- **Authentication**: Not required (public)
- **Response**: Array of article objects
- **Implementation**: `app/api/articles/route.ts`

#### `POST /api/articles`
- **Purpose**: Create a new article
- **Authentication**: Required (Bearer token)
- **Request Body**: FormData with:
  - `title` (required)
  - `slug` (required)
  - `category` (required)
  - `excerpt` (required)
  - `content` (required)
  - `date` (required)
  - `authors_id` (required)
  - `tags` (JSON string, optional)
  - `image` (File or JSON string, required)
- **Response**: Created article object
- **Implementation**: `app/api/articles/route.ts`

#### `GET /api/articles/[id]`
- **Purpose**: Fetch a single article by ID
- **Authentication**: Not required (public)
- **Response**: Article object
- **Implementation**: `app/api/articles/[id]/route.ts`

#### `PATCH /api/articles/[id]`
- **Purpose**: Update an existing article
- **Authentication**: Required (Bearer token)
- **Request Body**: FormData (same as POST)
- **Response**: Updated article object
- **Implementation**: `app/api/articles/[id]/route.ts`

#### `DELETE /api/articles/[id]`
- **Purpose**: Delete an article
- **Authentication**: Required (Bearer token)
- **Response**: Success message
- **Implementation**: `app/api/articles/[id]/route.ts`

### Authentication API

#### `POST /api/auth/login`
- **Purpose**: Authenticate user and get JWT token
- **Request Body**: JSON
  ```json
  {
    "email": "user@example.com",
    "password": "password"
  }
  ```
- **Response**: JSON
  ```json
  {
    "authToken": "jwt-token-here",
    "user": { ... }
  }
  ```
- **Implementation**: `app/api/auth/login/route.ts`

#### `GET /api/auth/me`
- **Purpose**: Get current authenticated user details
- **Authentication**: Required (Bearer token in Authorization header)
- **Response**: User object
  ```json
  {
    "id": "user-id",
    "name": "User Name",
    "email": "user@example.com",
    "role": "admin"
  }
  ```
- **Implementation**: `app/api/auth/me/route.ts`

### API Integration
All API routes act as proxies to an external backend API defined by the `API_URL` environment variable. The routes handle:
- Request forwarding
- Error handling
- Response transformation
- Authentication token management

---

## Configuration

### Next.js Configuration (`next.config.ts`)
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

### Tailwind Configuration (`tailwind.config.ts`)
- Custom font families (Inter, Plus Jakarta Sans)
- Custom typography scale (Display, Heading, Body, Caption)
- Custom color system
- Animation configurations
- Content paths for JIT compilation

### TypeScript Configuration (`tsconfig.json`)
- Strict type checking enabled
- Path aliases configured
- Next.js type definitions included

---

## Development Setup

### Prerequisites
- Node.js (v18 or higher recommended)
- npm, yarn, pnpm, or bun package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd krontiva-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   API_URL=https://your-backend-api-url.com
   NODE_ENV=development
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

---

## Code Architecture

### Design Patterns

1. **Component-Based Architecture**
   - Reusable React components
   - Separation of concerns
   - Props-based data flow

2. **Server Components & Client Components**
   - Server Components by default (Next.js App Router)
   - Client Components (`"use client"`) for interactivity
   - Optimal performance with minimal JavaScript

3. **API Route Pattern**
   - Next.js API routes as backend proxies
   - Centralized error handling
   - Consistent response format

4. **State Management**
   - React hooks (useState, useEffect, useCallback)
   - Local component state
   - localStorage for authentication tokens

### Code Organization

1. **Feature-Based Structure**
   - Pages organized by route
   - Components grouped by functionality
   - Shared components in `components/ui`

2. **Type Safety**
   - TypeScript interfaces for all data structures
   - Type definitions in component files
   - Custom types in `types/` directory

3. **Styling Approach**
   - Tailwind CSS utility classes
   - Custom design system via Tailwind config
   - Responsive design with mobile-first approach

### Key Architectural Decisions

1. **App Router vs Pages Router**
   - Uses Next.js 15 App Router for modern routing
   - Server Components for better performance
   - Route handlers for API endpoints

2. **Authentication Strategy**
   - JWT tokens stored in localStorage
   - Token passed in Authorization header
   - Client-side route protection

3. **Content Management**
   - TipTap for rich text editing
   - HTML content storage
   - Image upload via FormData

4. **Animation Strategy**
   - Framer Motion for page transitions
   - CSS animations for micro-interactions
   - Performance-optimized animations

---

## Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `API_URL` | Backend API base URL | `https://api.example.com` |
| `NODE_ENV` | Environment mode | `development` or `production` |

### Environment File Setup

Create `.env.local` for local development:
```env
API_URL=https://your-api-url.com
NODE_ENV=development
```

For production, set these variables in your hosting platform's environment configuration.

---

## Deployment

### Build Process

1. **Production Build**
   ```bash
   npm run build
   ```

2. **Start Production Server**
   ```bash
   npm run start
   ```

### Deployment Platforms

#### Vercel (Recommended)
- Automatic deployments from Git
- Environment variable configuration
- Serverless functions for API routes
- Edge network for global CDN

#### Other Platforms
- Any Node.js hosting platform
- Docker containerization supported
- Static export option available

### Pre-Deployment Checklist

- [ ] Set `API_URL` environment variable
- [ ] Set `NODE_ENV=production`
- [ ] Run `npm run build` successfully
- [ ] Test all routes and features
- [ ] Verify API connectivity
- [ ] Check image optimization
- [ ] Verify authentication flow
- [ ] Test responsive design
- [ ] Check browser compatibility

---

## Data Models

### Article Model
```typescript
interface Article {
  id: string;
  title: string;
  slug: string;
  category: 'UPDATES' | 'INSIGHTS' | 'NEWS';
  date: string; // ISO date string
  excerpt: string;
  content: string; // HTML content
  tags: Array<{ tag: string }>;
  image: {
    url: string;
    name: string;
  };
  authors: Array<{
    id: string;
    name: string;
    email: string;
  }>;
}
```

### User Model
```typescript
interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
}
```

---

## Security Considerations

1. **Authentication**
   - JWT tokens for API authentication
   - Tokens stored in localStorage (consider httpOnly cookies for production)
   - Token validation on protected routes

2. **Input Validation**
   - Form validation on client side
   - Server-side validation in API routes
   - File size limits (2MB for images)
   - File type validation

3. **Error Handling**
   - Generic error messages for users
   - Detailed errors only in development mode
   - Proper HTTP status codes

4. **CORS & API Security**
   - API routes act as proxy to backend
   - Backend handles CORS and security
   - No sensitive data in client-side code

---

## Performance Optimizations

1. **Next.js Optimizations**
   - Image optimization with `next/image`
   - Automatic code splitting
   - Server Components for reduced bundle size
   - Static generation where possible

2. **Code Splitting**
   - Route-based code splitting
   - Dynamic imports for heavy components
   - Lazy loading for images

3. **Caching**
   - Next.js automatic caching
   - Static asset caching
   - API response caching (via backend)

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement approach
- Graceful degradation for older browsers

---

## Contributing Guidelines

1. **Code Style**
   - Follow TypeScript best practices
   - Use ESLint configuration
   - Consistent naming conventions

2. **Component Development**
   - Write reusable components
   - Add TypeScript types
   - Include proper error handling

3. **Commit Messages**
   - Clear, descriptive commit messages
   - Reference issue numbers if applicable

---

## Troubleshooting

### Common Issues

1. **API Connection Errors**
   - Verify `API_URL` environment variable
   - Check backend API availability
   - Verify CORS configuration

2. **Authentication Issues**
   - Clear localStorage
   - Verify token format
   - Check token expiration

3. **Build Errors**
   - Clear `.next` directory
   - Reinstall dependencies
   - Check TypeScript errors

4. **Image Upload Issues**
   - Verify file size (max 2MB)
   - Check file format (JPG, PNG, GIF)
   - Verify API endpoint configuration

---

## Future Enhancements

Potential areas for improvement:
- [ ] Server-side authentication with httpOnly cookies
- [ ] Image optimization and CDN integration
- [ ] Search functionality for articles
- [ ] Comment system for articles
- [ ] Newsletter subscription
- [ ] Analytics integration
- [ ] SEO optimization improvements
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Advanced article filtering and sorting

---

## License

[Specify license if applicable]

---

## Contact & Support

For questions or support regarding this application, please contact the development team or refer to the project repository.

---

**Last Updated**: [Current Date]
**Version**: 0.1.0
**Maintained by**: Krontiva Development Team

