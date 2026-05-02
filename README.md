# Institute Of Information Technology (IIT) - Modern Website

A complete modern website for the Institute Of Information Technology built with **React.js** and **Tailwind CSS**. Features a responsive design, smooth scrolling, beautiful animations, and fully functional components.

## 🚀 Features

- ✅ **Responsive Design** - Mobile, tablet, and desktop optimized
- ✅ **Fixed Navigation Bar** - With hamburger menu for mobile
- ✅ **Hero Image Slider** - Auto-rotating carousel with 7 IT courses
- ✅ **About Us Section** - With YouTube video embed
- ✅ **Courses Grid** - 7 popular IT courses with icons and descriptions
- ✅ **Success Stories** - Student testimonials with ratings
- ✅ **Contact Form** - Fully functional with validation
- ✅ **Professional Footer** - With links and social media
- ✅ **Smooth Animations** - CSS transitions and keyframe animations
- ✅ **Clean Code Architecture** - Reusable components and modular structure

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Fixed navigation with mobile menu
│   ├── HeroSlider.jsx      # Image carousel slider
│   ├── AboutUs.jsx         # About section with video
│   ├── Courses.jsx         # Course cards grid
│   ├── Testimonials.jsx    # Student reviews
│   ├── ContactUs.jsx       # Contact form with validation
│   └── Footer.jsx          # Footer with links and social media
├── pages/
│   └── Home.jsx            # Main home page
├── assets/
│   └── images/             # Image assets folder (for future use)
├── App.jsx                 # Main app component
├── index.css               # Tailwind CSS & global styles
└── main.jsx                # Entry point
```

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool
- **lucide-react** - Beautiful icon library
- **JavaScript ES6+** - Modern JavaScript

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Navigate to the project:**
   ```bash
   cd "path/to/IIT"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output files will be in the `dist/` folder ready for deployment.

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |

## 🎨 Components Documentation

### Navbar
- Fixed positioning at the top
- Logo with institute name
- Desktop menu with navigation links
- Mobile hamburger menu (responsive)
- Smooth transitions on hover

### HeroSlider
- Full-screen image carousel
- Auto-rotating every 5 seconds
- 7 different course topics
- Previous/Next navigation buttons
- Dot indicators for slide selection
- Animated overlay text

### AboutUs
- Two-column layout
- Text content with features list
- Embedded YouTube video player
- Responsive grid design

### Courses
- Grid layout (responsive: 1→2→3→4 columns)
- 7 course cards with icons
- Hover effects with elevation
- Enroll button on each card
- Gradient backgrounds for visual appeal

### Testimonials
- 4 student testimonials
- Star ratings
- Emoji avatars
- Hover shadow effects
- Animated entrance

### ContactUs
- Contact information on left
- Contact form on right
- Input validation
- Success/Error messages
- Form reset after submission

### Footer
- Company information
- Quick navigation links
- Contact details with icons
- Social media links
- Copyright information

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Hamburger menu on mobile devices
- Touch-friendly buttons and forms

### Animations & Effects
- Fade-in animations
- Slide-in animations
- Hover effects on cards
- Scale transitions on buttons
- Smooth scrolling

### Form Validation
- Name length validation (min 3 characters)
- Required field checking
- User feedback with status messages
- Form reset after successful submission

### Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance

## 🔧 Customization

### Update Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#1e40af',
      secondary: '#7c3aed',
      accent: '#f59e0b',
    },
  },
}
```

### Add Images
Place images in `src/assets/images/` and import them in components:
```javascript
import heroImage from '../assets/images/hero.png'
```

### Modify Navigation Links
Edit the `menuItems` array in `Navbar.jsx`:
```javascript
const menuItems = [
  { name: 'Home', href: '#home' },
  // Add more items...
];
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available for educational and commercial use.

---

**Happy Coding! 🎉**
