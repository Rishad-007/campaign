# Political Campaign Website

A modern, responsive political campaign portfolio website built with React and Vite. Features a red and green color theme perfect for political campaigns.

## 🚀 Features

- **Modern Hero Section** - Eye-catching hero with candidate photo and party logo
- **About Section** - Detailed background, education, experience, and values
- **Key Issues** - Interactive cards showcasing policy priorities
- **Achievements Timeline** - Visual timeline of accomplishments
- **Vision & Mission** - Clear presentation of campaign goals
- **Photo Gallery** - Dynamic gallery with lightbox view
- **Contact Form** - Easy-to-use contact form for supporters
- **Responsive Design** - Perfect on desktop, tablet, and mobile
- **Smooth Animations** - Professional animations throughout
- **Social Media Integration** - Links to all social platforms

## 🎨 Color Theme

The website uses a red and green color theme:

- Primary Red: #DC143C
- Primary Green: #2E7D32
- Plus complementary shades for depth and contrast

## 📸 Image Setup

Replace the following placeholder images with actual photos:

1. **Party Logo** (`public/party-logo.png`) - Your party's official logo/flag
2. **Candidate Photo** (`public/politician-photo.jpg`) - Professional portrait of the candidate
3. **Gallery Images** (`public/gallery-1.jpg` through `gallery-8.jpg`) - Campaign event photos

### Recommended Image Sizes:

- Party Logo: 500x500px (PNG with transparent background)
- Candidate Photo: 800x1000px (Portrait orientation)
- Gallery Images: 1200x900px (Landscape orientation)

## 🛠️ Installation & Setup

1. **Navigate to the project directory:**

   ```bash
   cd campaign-site
   ```

2. **Install dependencies** (already done):

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser** and visit the URL shown in terminal (usually `http://localhost:5173`)

## 📝 Customization

### Update Content:

1. **Candidate Information** - Edit `src/components/Hero.jsx` and `src/components/About.jsx`
2. **Key Issues** - Modify `src/components/KeyIssues.jsx`
3. **Achievements** - Update `src/components/Achievements.jsx`
4. **Vision & Mission** - Edit `src/components/Vision.jsx`
5. **Contact Details** - Modify `src/components/Contact.jsx` and `src/components/Footer.jsx`

### Update Colors:

Edit the CSS variables in `src/App.css`:

```css
:root {
  --primary-red: #dc143c;
  --primary-green: #2e7d32;
  /* Modify these values */
}
```

## 🚢 Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy to any static hosting service.

## 📱 Responsive Breakpoints

- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: Below 768px

## 🌟 Components Structure

```
src/
├── components/
│   ├── Header.jsx/css      # Navigation bar
│   ├── Hero.jsx/css        # Hero section with photo
│   ├── About.jsx/css       # About the candidate
│   ├── KeyIssues.jsx/css   # Policy priorities
│   ├── Achievements.jsx/css # Timeline of achievements
│   ├── Vision.jsx/css      # Vision & mission
│   ├── Gallery.jsx/css     # Photo gallery
│   ├── Contact.jsx/css     # Contact form
│   └── Footer.jsx/css      # Footer with links
├── App.jsx                  # Main app component
└── App.css                  # Global styles
```

## 🎯 Key Campaign Elements Included

✅ Candidate photo prominently displayed  
✅ Party logo/flag featured (larger display)  
✅ Red & green color theme  
✅ Modern, professional design  
✅ Healthcare, Education, Jobs, Infrastructure sections  
✅ Environmental protection policy  
✅ Justice & equality commitment  
✅ Donation button  
✅ Volunteer signup  
✅ Social media integration  
✅ Contact form  
✅ Newsletter subscription  
✅ Mobile-friendly design

## 📞 Support

For questions or issues, refer to the [Vite documentation](https://vitejs.dev/) or [React documentation](https://react.dev/).

## 📄 License

This template is free to use for political campaigns and personal projects.

---

**Built with ❤️ for democratic engagement**
