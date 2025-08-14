# Awake Agency - Next.js Website

A beautiful, responsive website clone of the Awake Agency built with Next.js, Tailwind CSS, and modern design principles.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetic with gradient backgrounds
- **Fully Responsive**: Optimized for all device sizes
- **Performance Optimized**: Built with Next.js for fast loading
- **Interactive Components**: Smooth animations and hover effects
- **SEO Friendly**: Proper meta tags and structure
- **Static Export Ready**: Can be deployed as static files

## 🏗️ Sections

- **Hero Section**: Eye-catching landing with gradient background
- **Brand Carousel**: Animated brand logos
- **Stats Section**: Key company metrics
- **Services**: 5 core service offerings
- **Portfolio**: Project showcase with hover effects
- **Team**: Team member profiles
- **Testimonials**: Customer reviews with carousel
- **Pricing**: Two-tier pricing plans
- **FAQ**: Expandable question sections
- **Awards**: Recognition and achievements
- **Contact**: Footer with contact information

## 📦 Installation

1. **Clone or download the project files**
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## 🚢 Deployment

### For Static Hosting (Recommended)

1. **Build and export the static site:**
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **The static files will be generated in the `out` directory**

3. **Upload the contents of the `out` directory to your web server**

### For Server Deployment

1. **Build the application:**
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Start the production server:**
   ```bash
   npm start
   # or
   yarn start
   ```

## 📁 Project Structure

```
awake-agency-nextjs/
├── components/          # React components
│   ├── ui/             # UI components
│   ├── Header.jsx      # Navigation header
│   ├── HeroSection.jsx # Landing section
│   ├── ...             # Other sections
├── data/               # Mock data
│   └── mock.js         # All static data
├── lib/                # Utility functions
├── pages/              # Next.js pages
├── public/             # Static assets
├── styles/             # Global styles
└── package.json        # Dependencies
```

## 🎨 Customization

### Content
- Edit `data/mock.js` to change text, images, and data
- Update images by replacing URLs in the mock data

### Styling
- Modify `styles/globals.css` for global styles
- Customize colors in `tailwind.config.js`
- Edit component styles directly in JSX files

### Components
- All sections are modular components
- Easy to remove, reorder, or modify sections
- Located in the `components/` directory

## 🖼️ Images

All images are sourced from Unsplash with proper optimization through Next.js Image component. For production, consider:

- Using your own images
- Optimizing image sizes
- Setting up proper CDN

## 🔧 Configuration

- **Next.js Config**: `next.config.js`
- **Tailwind Config**: `tailwind.config.js`
- **PostCSS Config**: `postcss.config.js`

## 📝 License

This project is for educational and demonstration purposes. Please ensure you have proper rights to any content you use in production.

## 🤝 Support

For questions or issues, please check the documentation or create an issue in the project repository.

---

**Built with ❤️ using Next.js and Tailwind CSS**