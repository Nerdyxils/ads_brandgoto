# BrandGoto Landing Page

A mobile-first, professional landing page built with ReactJS, Vanilla CSS, and Framer Motion animations. This landing page showcases BrandGoto's website development services with a focus on speed, quality, and affordability.

## 🎨 Design Features

- **BrandGoto Aesthetic**: Dark background (#000) with white text (#fff)
- **Accent Colors**: #F75F0B (primary), #ef2d56 (secondary), #023942, #CFF8FF
- **Typography**: Poppins font family for modern, clean sans-serif design
- **Mobile-First**: Fully responsive design optimized for all devices
- **Animations**: Subtle Framer Motion animations for enhanced user experience

## 🚀 Sections

1. **Hero Section**: Compelling headline and CTA button
2. **Explainer Section**: 3 key benefits with icons
3. **Portfolio Section**: Before/after mockups and testimonials
4. **Lead Capture Form**: Comprehensive contact form with validation
5. **Footer**: Brand information and navigation links

## 🛠️ Tech Stack

- **React 18** with Vite build tool
- **Framer Motion** for animations
- **Vanilla CSS** with CSS-in-JS styling
- **Responsive Design** with CSS Grid and Flexbox
- **Form Validation** with React state management

## 📱 Responsive Features

- Mobile-first approach
- Touch-friendly buttons and interactions
- Optimized layouts for mobile, tablet, and desktop
- Smooth scrolling and navigation

## 🎯 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lead-form
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎨 Customization

### Colors
The brand colors are defined in the CSS variables and can be easily modified:
- Primary: #F75F0B
- Secondary: #ef2d56
- Dark: #023942
- Light: #CFF8FF

### Content
All text content is easily editable in the component files:
- `src/components/HeroSection.jsx` - Main headline and subheadline
- `src/components/ExplainerSection.jsx` - Feature descriptions
- `src/components/PortfolioSection.jsx` - Testimonials and mockup labels
- `src/components/LeadFormSection.jsx` - Form labels and validation messages

### Styling
The design uses CSS-in-JS with styled-jsx for component-specific styling. Each component has its own style block that can be modified independently.

## 📋 Form Fields

The lead capture form includes:
- Full Name (required)
- Email Address (required, with validation)
- Phone Number (required)
- Business Type (dropdown with options)
- Project Description (required)

## 🔧 Development

### Project Structure
```
src/
├── components/
│   ├── HeroSection.jsx
│   ├── ExplainerSection.jsx
│   ├── PortfolioSection.jsx
│   ├── LeadFormSection.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

### Adding New Sections
1. Create a new component in the `components` directory
2. Import and add it to `App.jsx`
3. Style it using the existing CSS patterns

### Animation Customization
Framer Motion animations can be modified in each component:
- `initial`: Starting state
- `animate`: Final state
- `transition`: Animation timing and easing
- `whileHover`/`whileTap`: Interactive animations

## 🚀 Deployment

The project is configured for easy deployment:
- Build the project: `npm run build`
- Deploy the `dist` folder to your hosting service
- Configure your domain and SSL certificate

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions about this landing page template, please contact the BrandGoto team.

---

**Built with ❤️ by BrandGoto**
