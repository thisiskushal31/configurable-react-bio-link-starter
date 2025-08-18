# LinkHub - Personal Link Hub

A modern, responsive personal link hub built with React, TypeScript, and Tailwind CSS. Deployed on GitHub Pages at [https://thisiskushal31.github.io/link/](https://thisiskushal31.github.io/link/).

## Features

- 🌙 **Dark/Light Theme Toggle** - Seamless theme switching with persistent preferences
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Fast Loading** - Built with Vite for optimal performance
- 🎨 **Modern UI** - Clean, professional design with smooth animations
- 🔒 **Security** - Content Security Policy and secure external link handling
- 📋 **Share Functionality** - Easy profile sharing with clipboard integration
- 🔝 **Scroll to Top** - Smooth navigation with animated scroll-to-top button
- 🎯 **Accessibility** - ARIA labels and keyboard navigation support

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Icons**: FontAwesome, Lucide React
- **Theme**: next-themes for dark/light mode
- **Routing**: React Router with HashRouter for GitHub Pages compatibility
- **Deployment**: GitHub Pages

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will be available at `http://localhost:8080/`

### Deployment

This project is configured for GitHub Pages deployment:

1. **Repository Setup**: Ensure your repository is named `thisiskushal31.github.io`
2. **Branch**: Deploy from the `main` branch
3. **Directory**: Set the source directory to `/docs` or `/dist`
4. **Routing**: Uses HashRouter for GitHub Pages compatibility

### Configuration

All configuration is centralized in `src/config/config.ts`:

- Profile information (name, about, image)
- Social media links
- Organized link sections
- Theme preferences

## Project Structure

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

## Customization

### Adding New Links

Edit `src/config/config.ts` to add new links:

```typescript
{
  title: "New Section",
  links: [
    { 
      title: "My Link", 
      url: "https://example.com", 
      icon: "Globe" 
    }
  ]
}
```

### Available Icons

The app uses FontAwesome icons. Available icon names in `iconMapper.ts`:
- `Github`, `Linkedin`, `Globe`, `Mail`, `Twitter`
- `MessageCircle`, `FileText`, `BookOpen`, `Instagram`
- `Youtube`, `Twitch`, `Music`, `Code`, `Briefcase`
- `Heart`, `Star`, `Users`, `Zap`

### Theme Customization

Colors and styling are defined in `src/index.css` using CSS custom properties for both light and dark themes.

## Routing

This application uses **HashRouter** for GitHub Pages compatibility:

- **Local Development**: `http://localhost:8080/`
- **GitHub Pages**: `https://thisiskushal31.github.io/link/`
- **404 Page**: `/#/not-found`

HashRouter ensures that routing works correctly on GitHub Pages without requiring server-side configuration.

## Security Features

- **Content Security Policy** - Prevents XSS and injection attacks
- **Secure External Links** - All external links use `noopener noreferrer`
- **Input Validation** - TypeScript ensures type safety
- **Error Boundaries** - Graceful error handling throughout the app

## Performance Optimizations

- **Lazy Loading** - Components load only when needed
- **Optimized Images** - Proper image sizing and formats
- **Minimal Dependencies** - Only essential packages included
- **Efficient CSS** - Tailwind CSS for optimized styles
- **Fast Transitions** - Smooth animations with hardware acceleration

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use this project for your own link hub!

---

**Live Demo**: [https://thisiskushal31.github.io/link/](https://thisiskushal31.github.io/link/)
