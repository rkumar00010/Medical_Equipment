# Medical Equipment Website - Setup Guide

## Installation Steps

### 1. Install Material UI Dependencies

Run the following command in your terminal:

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```

### 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Features Implemented

✅ **Modern Navbar** with Material UI
- Sticky top navigation bar
- White background with blue accent (#1976d2)
- Professional medical theme

✅ **Navigation Tabs**
- Home
- Products (with mega menu)
- Categories
- Services
- Industries
- Brands (with mega menu)
- About
- Contact

✅ **Mega Menus**
- Products dropdown with 6 categories
- Brands dropdown with logo grid (6 brands)

✅ **Right Side Icons**
- Search icon
- Wishlist icon (with badge)
- Cart icon (with badge)

✅ **Responsive Design**
- Mobile drawer menu
- Fully responsive layout
- Touch-friendly interface

✅ **Attractive Homepage**
- Hero section with gradient background
- Key categories showcase
- Features section
- Call-to-action section

## Project Structure

```
app/
├── components/
│   └── Navbar.tsx          # Main navbar component
├── providers/
│   └── ThemeProvider.tsx   # MUI theme configuration
├── layout.tsx              # Root layout with ThemeProvider
├── page.tsx                # Homepage
└── globals.css             # Global styles
```

## Next Steps

1. Install the dependencies using the command above
2. Customize the brand colors if needed (currently using #1976d2)
3. Add actual product pages and content
4. Implement search functionality
5. Add wishlist and cart functionality
6. Create individual pages for Categories, Services, Industries, Brands, About, and Contact

## Customization

- **Colors**: Edit `app/providers/ThemeProvider.tsx` to change the primary color
- **Navbar Items**: Edit `app/components/Navbar.tsx` to modify navigation items
- **Homepage**: Edit `app/page.tsx` to customize the homepage content

