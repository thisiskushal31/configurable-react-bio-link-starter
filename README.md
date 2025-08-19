# Configurable React Link Hub Starter

A modern, config-driven, personal link hub built with React, TypeScript, and Tailwind CSS. Perfect for DevOps engineers, platform engineers, and tech professionals to showcase their work, projects, courses, and curated resources. Deploy to GitHub Pages or any static host in minutes!

## ✨ Features

- 🌙 **Dark/Light Theme Toggle** - Seamless theme switching with persistent preferences
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Fast Loading** - Built with Vite for optimal performance
- 🎨 **Modern UI** - Clean, professional design with smooth animations
- 🔒 **Security** - Content Security Policy and secure external link handling
- 📋 **Share Functionality** - Easy profile sharing with clipboard integration
- 🔝 **Scroll to Top** - Smooth navigation with animated scroll-to-top button
- 🎯 **Accessibility** - ARIA labels and keyboard navigation support
- 🎨 **FontAwesome Icons** - Professional icon library for all links
- 🔗 **Social Media Integration** - Dedicated social links section
- 📱 **PWA Ready** - Progressive Web App capabilities

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/configurable-react-bio-link-starter.git
cd configurable-react-bio-link-starter

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will be available at `http://localhost:8080/`

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## ⚙️ Configuration

All configuration is centralized in `src/config/config.ts`:

### Profile Information

```typescript
export const profileConfig: ProfileConfig = {
  profileImage: "/profile.jpeg",
  name: "Your Name",
  about: "Your professional bio",
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: 'fab fa-github'
    },
    // Add more social links...
  ],
  sections: [
    // Add your link sections...
  ]
};
```

### Adding New Links

1. **Add a new section:**
   ```typescript
   {
     title: "Professional",
     links: [
       { 
         title: "My Portfolio", 
         url: "https://example.com", 
         icon: "Globe" 
       }
     ]
   }
   ```

2. **Available Icons:**
   - `Github`, `Linkedin`, `Globe`, `Mail`, `Twitter`
   - `MessageCircle`, `FileText`, `BookOpen`, `Instagram`
   - `Youtube`, `Twitch`, `Music`, `Code`, `Briefcase`
   - `Heart`, `Star`, `Users`, `Zap`

### Theme Customization

Colors and styling are defined in `src/index.css` using CSS custom properties for both light and dark themes.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── LinkCard.tsx    # Individual link card
│   ├── ProfileCard.tsx # Main profile component
│   ├── SocialLinks.tsx # Social media links
│   ├── ScrollToTop.tsx # Scroll to top button
│   └── ThemeToggle.tsx # Theme toggle component
├── config/
│   └── config.ts       # Centralized configuration
├── hooks/              # Custom React hooks
├── pages/              # Route pages
│   ├── Index.tsx       # Main page
│   └── NotFound.tsx    # 404 page
├── utils/
│   └── iconMapper.ts   # FontAwesome icon mapping
└── index.css           # Global styles and theme variables
```

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Icons**: FontAwesome, Lucide React
- **Theme**: next-themes for dark/light mode
- **Routing**: React Router with HashRouter for GitHub Pages compatibility
- **Deployment**: GitHub Pages, Netlify, Vercel, or any static host

## 🌐 Routing

This application uses **HashRouter** for GitHub Pages compatibility:

- **Local Development**: `http://localhost:8080/`
- **GitHub Pages**: `https://yourusername.github.io/repo-name/`
- **Other Routes**: `/#/route-name`
- **404 Page**: `/#/not-found`

HashRouter ensures that routing works correctly on GitHub Pages without requiring server-side configuration.

## 🔒 Security Features

- **Content Security Policy** - Prevents XSS and injection attacks
- **Secure External Links** - All external links use `noopener noreferrer`
- **Input Validation** - TypeScript ensures type safety
- **Error Boundaries** - Graceful error handling throughout the app

## ⚡ Performance Optimizations

- **Lazy Loading** - Components load only when needed
- **Optimized Images** - Proper image sizing and formats
- **Minimal Dependencies** - Only essential packages included
- **Efficient CSS** - Tailwind CSS for optimized styles
- **Fast Transitions** - Smooth animations with hardware acceleration

## 🚀 Deployment

This project can be deployed to various platforms:

### GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json:**
   ```json
   {
     "homepage": "https://yourusername.github.io/repo-name",
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run build && npm run deploy
   ```

### Netlify

1. Connect the repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel

1. Import the repository
2. Vercel auto-detects Vite configuration
3. Deploy with one click

### Any Static Host

Upload the contents of the `dist` directory to your preferred static hosting provider.

## 🌐 Configuring the Base URL

To ensure all share/copy links use the correct root, set the `homepage` in `package.json`:

```json
{
  "homepage": "https://yourdomain.com"
}
```

All share/copy links will use this as the root, so links will look like:
```
https://yourdomain.com/#/route-name
```

## 🧑‍💻 Customization Examples

### Changing Profile Information

Edit `src/config/config.ts`:

```typescript
export const profileConfig: ProfileConfig = {
  profileImage: "/your-photo.jpg",
  name: "Your Name",
  about: "Platform Engineer & DevOps Specialist building scalable cloud infrastructure",
  // ... rest of config
};
```

### Adding Custom Sections

```typescript
{
  title: "Projects",
  links: [
    { 
      title: "My Awesome Project", 
      url: "https://github.com/yourusername/project", 
      icon: "Code" 
    },
    { 
      title: "Portfolio", 
      url: "https://yourportfolio.com", 
      icon: "Globe" 
    }
  ]
}
```

### Customizing Colors

Edit `src/index.css` to customize the theme colors:

```css
:root {
  --primary: 168 45% 50%; /* Your primary color */
  --background: 0 0% 98%; /* Your background color */
  /* ... other colors */
}
```

## 🎨 Best Practices

- Use descriptive titles and URLs for your links
- Choose relevant FontAwesome icons
- Optimize your profile image (recommended: 400x400px)
- Test locally before publishing
- Use HTTPS URLs for all external links

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch and open a pull request

---

This project is open source and welcomes contributions from the community.

## 📄 License

MIT License - feel free to use this project for your own link hub!

## 🔗 Live Demo

**Live Demo**: [https://thisiskushal31.github.io/link/](https://thisiskushal31.github.io/link/)

---

**Built with ❤️ for the DevOps and Platform Engineering community**
