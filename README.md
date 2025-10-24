# Tria Contact List

A modern, responsive React application for managing contacts with real-time search functionality and smooth animations.

## 🚀 Live Demo

[View Live Demo on Vercel](https://tria-contact-list.vercel.app)

## 📋 Features

- **Contact Management**: View, search, and add contacts
- **Real-time Search**: Debounced search with 300ms delay for optimal performance
- **Responsive Design**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **Local Storage**: Persistent data storage using localStorage
- **Loading States**: Beautiful loading spinners and empty states
- **Form Validation**: Client-side validation with error messages
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Zustand** - Lightweight state management
- **Local Storage** - Client-side data persistence

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tria-contact-list.git
   cd tria-contact-list
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── AddContactModal.tsx
│   ├── ContactCard.tsx
│   ├── ContactList.tsx
│   ├── Loader.tsx
│   └── SearchBar.tsx
├── data/               # Mock data
│   └── mockContacts.ts
├── store/              # State management
│   └── contactStore.ts
├── types/              # TypeScript types
│   └── contact.ts
├── utils/              # Utility functions
│   └── debounce.ts
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🎨 Design Features

### UI/UX Highlights

- **Clean Minimal Design**: Modern, uncluttered interface
- **Card-based Layout**: Each contact displayed in an elegant card
- **Hover Effects**: Subtle animations on interaction
- **Responsive Grid**: Adapts to different screen sizes
- **Loading States**: Smooth loading indicators
- **Empty States**: Friendly messages when no data is available

### Animation Details

- **Page Load**: Staggered animations for contact cards
- **Search**: Smooth filtering with fade transitions
- **Modal**: Scale and fade animations for modal dialogs
- **Hover**: Subtle lift effects on contact cards
- **Form**: Real-time validation feedback

## 🔧 Key Components

### ContactStore (Zustand)
- Centralized state management
- Contact CRUD operations
- Search and filtering logic
- Local storage integration

### SearchBar
- Debounced search input (300ms delay)
- Real-time filtering
- Clean, accessible design

### AddContactModal
- Form validation
- Error handling
- Smooth modal animations
- Responsive design

### ContactCard
- Avatar display with fallbacks
- Contact information layout
- Hover animations
- Status indicators

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your GitHub repository to Vercel**
2. **Set build command**: `npm run build`
3. **Set output directory**: `dist`
4. **Deploy automatically on push**

### Manual Deployment

```bash
npm run build
# Upload the 'dist' folder to your hosting provider
```

## 🧪 Testing the Application

### Manual Testing Checklist

- [ ] Load contacts on page load
- [ ] Search functionality works with debounce
- [ ] Add new contact with form validation
- [ ] Responsive design on different screen sizes
- [ ] Animations work smoothly
- [ ] Local storage persistence
- [ ] Empty states display correctly
- [ ] Loading states work properly

## 🎯 Performance Optimizations

- **Debounced Search**: Prevents excessive API calls
- **Lazy Loading**: Components load as needed
- **Optimized Animations**: Hardware-accelerated transitions
- **Efficient State Management**: Minimal re-renders with Zustand
- **Bundle Optimization**: Vite's tree-shaking and code splitting

## 🔮 Future Enhancements

- [ ] Contact editing functionality
- [ ] Contact deletion with confirmation
- [ ] Bulk operations (select multiple contacts)
- [ ] Export contacts (CSV, JSON)
- [ ] Contact categories/tags
- [ ] Advanced search filters
- [ ] Dark mode toggle
- [ ] Contact import functionality

## 📝 Assumptions & Design Decisions

### Technical Assumptions
- Modern browsers with ES2020 support
- Local storage availability
- JavaScript enabled
- Network connectivity for initial load

### Design Decisions
- **Zustand over Redux**: Simpler state management for this use case
- **Framer Motion**: Smooth, performant animations
- **Tailwind CSS**: Rapid development and consistent styling
- **TypeScript**: Better developer experience and fewer bugs
- **Vite**: Faster development and build times

### UX Decisions
- **Debounced Search**: Better performance and user experience
- **Card Layout**: Easy to scan and visually appealing
- **Modal for Add**: Focused interaction without navigation
- **Loading States**: Clear feedback during operations
- **Empty States**: Helpful guidance for users

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Rahul RS**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

Built with ❤️ for the Tria Frontend Assignment
