# 🚀 Mohamed Banani - Professional Portfolio Website

A modern, bilingual (English/Arabic) portfolio website showcasing web development and fashion design expertise. Built with clean HTML, CSS, and JavaScript for optimal performance and easy customization.

---

## ✨ Features

### 🎨 Design & UI
- **Modern, Minimalist Design** - Clean aesthetic with professional teal/turquoise theme
- **Profile Image Integration** - Professional photo displayed in Hero and About sections
- **Fully Responsive** - Perfect viewing experience on all devices (mobile, tablet, desktop)
- **Bilingual Support** - Seamless switching between English and Arabic with proper RTL support
- **Smooth Animations** - Profile image pulse effects, hover animations, and scroll reveals
- **Accessibility** - WCAG compliant with keyboard navigation and skip links

### 🛠️ Technical Features
- **Pure HTML/CSS/JS** - No framework dependencies for fast loading
- **SEO Optimized** - Semantic HTML5, meta tags, and structured data ready
- **Performance Optimized** - Lazy loading, debounced scroll events, minimal assets
- **Cross-Browser Compatible** - Works on all modern browsers
- **Mobile-First Approach** - Designed for mobile, enhanced for desktop
- **Social Media Integration** - Direct links to LinkedIn, GitHub, Twitter, Instagram, and Email

### 📱 Interactive Elements
- Sticky navigation with scroll effects
- Mobile hamburger menu
- Scroll-triggered animations
- Active section highlighting
- Language toggle (EN ⟷ AR) with proper RTL
- Email copy-to-clipboard (double-click)
- Smooth scroll navigation
- Social media icon hover effects

---

## 📁 File Structure

```
portfolio/
│
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and animations
├── script.js           # Interactive functionality
├── profile.jpg         # Your professional profile photo
└── README.md           # Documentation (this file)
```

---

## 🚀 Quick Start

### Option 1: Open Locally
1. Download all files to a folder
2. Open `index.html` in your browser
3. Done! ✅

### Option 2: Use a Local Server (Recommended for testing)
```bash
# If you have Python installed:
python -m http.server 8000

# If you have Node.js:
npx serve

# Then open: http://localhost:8000
```

---

## 🌐 Deployment Options

### 1️⃣ **Netlify** (Recommended - Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your folder
3. Your site is live! 🎉

**Or via Git:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### 2️⃣ **Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### 3️⃣ **GitHub Pages** (Free)
1. Create a GitHub repository
2. Upload your files
3. Go to Settings → Pages
4. Select main branch → Save
5. Your site will be at `https://yourusername.github.io/repository-name`

### 4️⃣ **Custom Domain**
- Upload files to your hosting via FTP
- Point your domain to the hosting
- Configure SSL certificate

---

## 🎨 Customization Guide

### 1. **Update Personal Information**

In `index.html`, search for these sections and update:

**Hero Section:**
```html
<h1 class="hero-name fade-in-up delay-1">
    <span class="gradient-text">Mohamed Banani</span>
</h1>
```

**Email:**
```html
<a href="mailto:bananizero@gmail.com" class="email-link">
    bananizero@gmail.com
</a>
```

**Social Media Links:**
Update these URLs in the Contact section with your actual profiles:
```html
<!-- LinkedIn -->
<a href="https://linkedin.com/in/YOUR-USERNAME" class="social-link">

<!-- GitHub -->
<a href="https://github.com/YOUR-USERNAME" class="social-link">

<!-- Twitter -->
<a href="https://twitter.com/YOUR-USERNAME" class="social-link">

<!-- Instagram -->
<a href="https://instagram.com/YOUR-USERNAME" class="social-link">
```

### 2. **Add Your Projects**

Replace the placeholder project content in the Projects section:

```html
<div class="project-card">
    <div class="project-number">01</div>
    <div class="project-content">
        <h4 class="project-title">Your Project Title</h4>
        <p class="project-description">Your project description...</p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
        </div>
        <div class="project-results">
            <span class="result-badge">Achievement 1</span>
        </div>
    </div>
</div>
```

### 3. **Change Colors**

In `styles.css`, modify the CSS variables at the top:

```css
:root {
    --color-accent: #64FFDA;     /* Main accent color */
    --color-gold: #F4A460;       /* Fashion section accent */
    --color-navy: #0A192F;       /* Background */
    /* ... change as needed */
}
```

### 4. **Add Images**

To add profile pictures or project images:

1. Create an `assets` folder
2. Add your images
3. Insert in HTML:

```html
<img src="assets/profile.jpg" alt="Mohamed Banani" 
     style="width: 200px; border-radius: 50%;">
```

### 5. **Modify Sections**

To add/remove sections, just copy/paste section blocks in `index.html` and update content.

---

## 🌍 Language Translation

All translatable text uses `data-en` and `data-ar` attributes:

```html
<p data-en="Hello, World!" data-ar="مرحبا بالعالم!">
    Hello, World!
</p>
```

To add new translatable content:
1. Add both `data-en` and `data-ar` attributes
2. Default text should match `data-en`
3. The JavaScript will handle switching automatically

---

## 🎯 SEO Optimization

### Update Meta Tags in `index.html`:

```html
<meta name="description" content="Your custom description here">
<meta name="keywords" content="Your, Keywords, Here">
<meta property="og:title" content="Your Title">
<meta property="og:description" content="Your Description">
```

### Add Schema.org Markup (for better search results):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mohamed Banani",
  "jobTitle": "Web Developer & Fashion Designer",
  "email": "bananizero@gmail.com"
}
</script>
```

---

## 📊 Performance Tips

### 1. **Optimize Images**
- Use WebP format for images
- Compress images before uploading (use [TinyPNG](https://tinypng.com))
- Add `loading="lazy"` attribute to images

### 2. **Minify Files for Production**
```bash
# Install minification tools
npm install -g minify

# Minify CSS
minify styles.css > styles.min.css

# Minify JS
minify script.js > script.min.js
```

Then update `index.html` to use the minified versions.

### 3. **Enable Caching**
Add to your hosting's `.htaccess` file:
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
</IfModule>
```

---

## 🔧 Optional Features (Currently Commented)

These features are included in `script.js` but commented out. To enable:

1. **Typing Effect** - Uncomment lines ~90-95
2. **Cursor Glow** - Uncomment lines ~100-115
3. **Scroll Progress Bar** - Uncomment line ~200
4. **Preloader** - Uncomment line ~350

Simply remove the `//` comments to activate.

---

## 🐛 Troubleshooting

### Issue: Animations not working
**Solution:** Make sure JavaScript is enabled in your browser.

### Issue: Language toggle not working
**Solution:** Check browser console for errors. Ensure `script.js` is loaded correctly.

### Issue: Mobile menu not showing
**Solution:** Clear cache and refresh. Verify viewport meta tag is present.

### Issue: Styles not applying
**Solution:** Ensure `styles.css` path is correct and file is loading.

---

## 📱 Browser Support

✅ Chrome (latest)  
✅ Firefox (latest)  
✅ Safari (latest)  
✅ Edge (latest)  
✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🎯 Next Steps & Enhancements

### Recommended Additions:
1. **Blog Section** - Share your knowledge
2. **Contact Form** - Add FormSpree or Netlify Forms
3. **Analytics** - Add Google Analytics
4. **Project Images** - Add screenshots/mockups
5. **Testimonials** - Client feedback section
6. **Resume Download** - PDF resume link
7. **Social Links** - LinkedIn, GitHub, Instagram

### Advanced:
- Convert to React/Next.js for scalability
- Add CMS (Contentful, Sanity)
- Implement dark/light mode toggle
- Add blog with markdown support
- Create case study pages for projects

---

## 📄 License

This project is open source and available for personal use. Feel free to customize for your own portfolio.

**Built by Mohamed Banani with ❤️**

---

## 📞 Support & Contact

If you need help customizing this portfolio or have questions:

📧 Email: bananizero@gmail.com

---

## 🙏 Credits

- **Design Inspiration:** Modern portfolio trends
- **Fonts:** Google Fonts (Inter, Fira Code)
- **Icons:** Custom SVG icons
- **Color Palette:** Custom dark theme

---

## 📝 Changelog

### Version 1.0.0 (Current)
- Initial release
- Bilingual support (EN/AR)
- Fully responsive design
- All core sections complete
- Smooth animations
- Mobile menu
- SEO optimized

---

**Ready to launch your career? Deploy this portfolio and start landing opportunities! 🚀**
