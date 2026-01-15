# Tejas Ambekar - Portfolio

A modern, production-ready portfolio website showcasing my journey as a Data Scientist and AI Engineer. Built with React, TypeScript, and Tailwind CSS.

## � Live Demo

**[View Live Portfolio](https://modern-developer-por-lumd.bolt.host/)**

## �🌟 Features

- **Responsive Design** - Fully responsive across all devices with smooth animations
- **Modern UI** - Beautiful gradient designs and hover effects using Tailwind CSS
- **Dark & Light Themes** - Optimized color schemes for different sections
- **GitHub Integration** - Dynamically fetches and displays GitHub repositories
- **Smooth Navigation** - Scroll-based navigation with smooth transitions
- **SEO Optimized** - Meta tags and semantic HTML for better search engine visibility
- **Performance** - Vite for fast development and optimized production builds

## 📋 Sections

- **Home** - Eye-catching introduction with social links
- **About** - Background, education, and key highlights
- **Projects** - Featured projects and GitHub repositories
- **Skills** - Technical expertise organized by categories
- **Experience** - Professional timeline with achievements
- **Contact** - Multiple ways to connect and reach out
- **Footer** - Social links and copyright information

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **HTTP Client**: Fetch API
- **Code Quality**: ESLint + TypeScript ESLint

## 📦 Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "lucide-react": "^0.344.0",
  "@supabase/supabase-js": "^2.57.4"
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn installed

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run typecheck` | Run TypeScript type checking |

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── services/            # API services
│   │   └── github.ts        # GitHub API integration
│   ├── types/               # TypeScript types
│   │   └── github.ts
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   ├── index.css            # Global styles
│   └── vite-env.d.ts       # Vite environment types
├── public/                  # Static assets
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🔧 Configuration

### Vite Configuration
The project uses Vite for fast development and optimized builds. Lucide React is excluded from dependency optimization for better performance.

### Tailwind CSS
Custom animations are defined in `src/index.css`:
- `animate-fade-in` - Fade in with slide up effect
- `animate-pulse-slow` - Slow pulse animation for interactive elements

### TypeScript
Strict mode is enabled with comprehensive type checking:
- `strict: true` - All type checking options enabled
- `noUnusedLocals: true` - Flags unused variables
- `noUnusedParameters: true` - Flags unused function parameters


### Content
Update component files in `src/components/` to add your own content:
- Modify skill categories in [Skills.tsx](src/components/Skills.tsx)
- Update experience timeline in [Experience.tsx](src/components/Experience.tsx)
- Add featured projects in [Projects.tsx](src/components/Projects.tsx)

### Contact Information
Update contact details in [Contact.tsx](src/components/Contact.tsx):
- Email
- Phone number
- Location
- Social media links

## 📊 Performance

- **Lazy Loading** - Components are loaded on demand
- **Code Splitting** - Vite automatically splits code for optimization
- **Image Optimization** - Uses modern SVG and CSS gradients
- **Minimal Bundle** - ~100KB gzipped production build

## 🔒 Security

- No sensitive data stored in source code
- Environment variables can be configured via `.env` files
- Content Security Policy headers recommended for deployment

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

### Deploy to Popular Platforms

**Vercel**
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**GitHub Pages**
Update `vite.config.ts` with your repository name as base path, then push `dist/` folder.

## 🤝 Contributing

Feel free to fork this portfolio and customize it for your own use. Consider adding your own:
- Projects and achievements
- Skills and expertise
- Professional experience
- Contact information

## 📄 License

This project is open source and available under the MIT License.

## 📞 Contact

- **Email**: tejasambekarkumar@gmail.com
- **LinkedIn**: [Tejas Ambekar](https://www.linkedin.com/in/tejas-ambekar-kuamr/)
- **GitHub**: [@tejasambekar](https://github.com/tejasambekar)
- **Location**: Hyderabad, India

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Hosted on modern deployment platforms

---

**Last Updated**: January 2025

Made with ❤️ by Tejas Ambekar
