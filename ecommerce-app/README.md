# E-Commerce Product Listing Page

A pixel-perfect, fully responsive e-commerce product listing page built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✅ **Pixel-perfect UI** matching Figma design
- ✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ✅ **Product Filtering** - Filter by price, color, brand, and category
- ✅ **Sorting** - Sort by name, price, or popularity
- ✅ **Pagination** - Navigate through products with smooth pagination
- ✅ **View Modes** - Switch between grid and list views
- ✅ **Accessibility** - ARIA labels, keyboard navigation, focus management
- ✅ **Performance** - Optimized re-renders, lazy loading ready
- ✅ **URL State Management** - Filter states reflected in URL params

## 📦 Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd ecommerce-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

## 🛠 Tech Stack

- **React 18** - UI Framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons
- **clsx** - Conditional classnames

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── common/      # Generic components (Badge, Rating, Pagination)
│   ├── filters/     # Filter components (Sidebar, PriceFilter, etc.)
│   ├── layout/      # Layout components (Navbar, Footer, HeroBanner)
│   └── products/    # Product components (ProductCard, ProductGrid)
├── hooks/           # Custom React hooks
├── types/           # TypeScript type definitions
├── data/            # Mock data and constants
├── utils/           # Helper functions
├── styles/          # Global styles
├── App.tsx          # Main application component
└── main.tsx         # Application entry point
```

## 🎨 Design System

### Colors
- Primary: `#40BFFF`
- Secondary: `#FB7181`
- Hot Badge: `#FF6875`

### Breakpoints
- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## ✨ Key Features Implementation

### 1. Product Filtering
- Price range slider
- Color selection with visual feedback
- Brand checkboxes
- Category filtering

### 2. Sorting
- Name (A-Z)
- Price (Low to High)
- Popularity (Rating)

### 3. Pagination
- Dynamic page calculation
- Smooth scroll to top
- URL state persistence

### 4. Responsive Design
- Mobile-first approach
- Collapsible sidebar on mobile
- Adaptive grid layout

## 🔧 Configuration Files

- `tailwind.config.js` - Tailwind CSS configuration
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS configuration

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Performance Optimizations

- Memoized filtering and sorting with `useMemo`
- Debounced search input
- Lazy loading support for images
- Optimized re-renders with proper React patterns

## 🔐 Accessibility Features

- ARIA labels on interactive elements
- Keyboard navigation support
- Focus management
- Semantic HTML structure
- Screen reader friendly

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Your Name

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
