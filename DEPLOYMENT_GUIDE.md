# 🚀 Deployment Guide - Awake Agency Next.js

This guide covers multiple deployment options for your Awake Agency website.

## 📋 Pre-Deployment Checklist

- [ ] Test the website locally (`npm run dev`)
- [ ] Update content in `data/mock.js`
- [ ] Replace placeholder images with your own
- [ ] Update contact information
- [ ] Test the build process (`npm run build`)

## 🌐 Deployment Options

### 1. Static Hosting (Recommended for most cases)

#### Vercel (Easiest)
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Vercel will automatically deploy on every push

#### Netlify
1. Run `npm run build` 
2. Upload the `out` folder to Netlify
3. Or connect your GitHub repo for automatic deploys

#### GitHub Pages
1. Run `npm run build`
2. Push the `out` folder contents to `gh-pages` branch
3. Enable GitHub Pages in repository settings

#### Traditional Web Hosting
1. Run `npm run build`
2. Upload contents of `out` folder to your web server
3. Point your domain to the uploaded files

### 2. Server Deployment

#### VPS/Dedicated Server
```bash
# Install Node.js (if not installed)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone your project
git clone <your-repo-url>
cd awake-agency-nextjs

# Install dependencies
npm install

# Build the project
npm run build

# Start with PM2 (process manager)
npm install -g pm2
pm2 start npm --name "awake-agency" -- start
pm2 startup
pm2 save
```

#### Docker Deployment
Create `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t awake-agency .
docker run -p 3000:3000 awake-agency
```

### 3. CDN + Static Hosting

#### AWS S3 + CloudFront
1. Run `npm run build`
2. Upload `out` folder to S3 bucket
3. Configure CloudFront distribution
4. Point your domain to CloudFront

#### Google Cloud Storage
1. Run `npm run build`
2. Upload `out` folder to GCS bucket
3. Configure bucket for static website hosting
4. Set up Cloud CDN (optional)

## 🔧 Environment Configuration

### For Static Export (Current Setup)
- No server required
- All content is pre-built
- Fast loading times
- Works with any web host

### For Server-Side Rendering
Update `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' for SSR
  images: {
    unoptimized: true // Keep this for most deployments
  }
}

module.exports = nextConfig
```

## 🌍 Domain Setup

1. **Buy a domain** from any registrar
2. **Point DNS** to your hosting provider:
   - For static hosting: Point to hosting provider's nameservers
   - For server hosting: Point A record to your server's IP
3. **SSL Certificate**: Most hosts provide free SSL
4. **Test**: Verify your site loads at your domain

## 📊 Performance Tips

### Image Optimization
- Use WebP format when possible
- Implement proper image sizes
- Consider using a CDN for images

### Caching
- Enable browser caching
- Use CDN for static assets
- Implement service worker for offline support

### Monitoring
- Set up Google Analytics
- Monitor Core Web Vitals
- Use tools like GTmetrix or PageSpeed Insights

## 🚨 Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading
- Ensure image URLs are accessible
- Check CORS headers for external images
- Consider hosting images locally

### Routing Issues
- Verify all links use proper paths
- Check `.htaccess` for Apache servers
- Ensure 404 fallback is configured

## 📞 Support

If you encounter deployment issues:
1. Check the build logs for errors
2. Verify all dependencies are installed
3. Test locally before deploying
4. Check hosting provider documentation

---

**Happy Deploying! 🎉**