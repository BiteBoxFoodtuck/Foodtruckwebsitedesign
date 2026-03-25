# Bite Box Foodtruck Website

A modern, premium food truck website built with React, TypeScript, Tailwind CSS, and Motion animations.

## 🚀 Features

- Dark theme with yellow, red, and white accents
- Bold typography and street food branding
- Fully responsive mobile-friendly design
- Smooth scroll animations
- Interactive hover effects
- Clean menu layout with pricing

## 📦 Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **Motion (Framer Motion)** - Animations
- **Lucide React** - Icons

## 🛠️ Local Development

### Prerequisites

- Node.js 20 or higher
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🌐 Deploy to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

#### Steps:

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Click on **Settings** > **Pages**
   - Under **Source**, select **GitHub Actions**
   - The site will automatically deploy on every push to `main`

3. **Your site will be live at:**
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
   ```

### Method 2: Manual Deployment

If you prefer to deploy manually:

```bash
# Build the project
pnpm build

# The dist folder contains your built files
# You can upload the contents to any static hosting service
```

## 📝 Configuration

### Update Repository Name

If your repository name is not `bite-box-foodtruck`, update the `base` in `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/YOUR_REPO_NAME/', // Update this
  // ... rest of config
})
```

For a custom domain or root path, use:

```typescript
base: './', // Current setting - works for most cases
```

## 🎨 Customization

### Menu Items

Edit the menu in `/src/app/App.tsx` - search for the burger, sides, and other menu item arrays.

### Colors

The color scheme uses:
- **Background**: `bg-black`, `bg-zinc-900`
- **Primary**: `text-yellow-400`, `border-yellow-400`
- **Accent**: `bg-red-600`, `text-red-600`
- **Text**: `text-white`, `text-gray-400`

### Contact Information

Update phone, Instagram, and TikTok links in the Contact section of `/src/app/App.tsx`.

## 📱 Contact

- **Phone**: 070-751 46 95
- **Instagram**: [@bite_box_food_truck](https://instagram.com/bite_box_food_truck)
- **TikTok**: [@bite.box.foodtruck](https://tiktok.com/@bite.box.foodtruck)

## 📄 License

© 2026 Bite Box Foodtruck. All rights reserved.
