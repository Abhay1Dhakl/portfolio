# 🚀 Abhaya Dhakal - Portfolio

A stunning, Apple-inspired portfolio website built with React, PostgreSQL, and Docker. Features smooth animations, glassmorphism design, and a premium user experience.

![Portfolio Preview](https://via.placeholder.com/1200x600/667eea/ffffff?text=Abhaya+Dhakal+Portfolio)

## ✨ Features

- **🎨 Apple-Inspired Design**: Premium aesthetics with glassmorphism and smooth animations
- **⚡ React + Vite**: Lightning-fast development and production builds
- **🗄️ PostgreSQL Database**: Robust data storage for portfolio content
- **🐳 Docker Compose**: One-command deployment with containerization
- **📱 Fully Responsive**: Beautiful on all devices from mobile to desktop
- **🎭 Framer Motion**: Buttery-smooth animations and transitions
- **🔥 Modern Tech Stack**: React, Node.js, Express, PostgreSQL

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Framer Motion (animations)
- Axios (API calls)
- Modern CSS with custom design system

### Backend
- Node.js
- Express
- PostgreSQL 16
- CORS, Helmet, Compression

### DevOps
- Docker
- Docker Compose

## 📦 Project Structure

```
protfolio/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── services/         # API services
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css         # Design system
│   ├── Dockerfile
│   └── package.json
├── backend/                  # Express API
│   ├── routes/               # API routes
│   ├── config/               # Database config
│   ├── server.js
│   ├── init.sql              # Database schema
│   ├── Dockerfile
│   └── package.json
└── docker-compose.yml        # Container orchestration
```

## 🚀 Getting Started

### Prerequisites

- Docker & Docker Compose
- Git

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <your-repo-url>
   cd protfolio
   \`\`\`

2. **Create environment file**
   \`\`\`bash
   cp .env.example .env
   \`\`\`

3. **Start with Docker Compose**
   \`\`\`bash
   docker-compose up -d
   \`\`\`

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Database: localhost:5432

### Manual Setup (Without Docker)

#### Backend

\`\`\`bash
cd backend
npm install
npm run dev
\`\`\`

#### Frontend

\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`

## 📝 Environment Variables

Create a \`.env\` file in the root directory:

\`\`\`env
# Database
DB_HOST=postgres
DB_PORT=5432
DB_USER=portfolio_user
DB_PASSWORD=portfolio_password
DB_NAME=portfolio_db

# Backend
PORT=5000
NODE_ENV=development

# Frontend
VITE_API_URL=http://localhost:5000/api
\`\`\`

## 🎨 Design System

The portfolio uses a comprehensive design system inspired by Apple's design language:

- **Color Palette**: Premium gradients and dark theme
- **Typography**: Inter font family with perfect hierarchy
- **Spacing**: Consistent spacing scale
- **Animations**: Smooth transitions using Framer Motion
- **Glassmorphism**: Modern backdrop blur effects
- **Responsive**: Mobile-first approach

## 📊 Database Schema

The PostgreSQL database includes:
- Profile information
- Education history
- Work experience
- Projects portfolio
- Skills & certifications
- Contact messages

## 🔧 API Endpoints

### Portfolio Endpoints
- `GET /api/profile` - Get profile information
- `GET /api/education` - Get education history
- `GET /api/experience` - Get work experience
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/skills` - Get skills by category
- `GET /api/certifications` - Get certifications
- `POST /api/contact` - Submit contact form

## 🚀 Deployment

### Using Docker Compose (Recommended)

\`\`\`bash
docker-compose up -d --build
\`\`\`

### Production Build

\`\`\`bash
# Frontend
cd frontend
npm run build

# Backend
cd backend
npm start
\`\`\`

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: 769px - 1024px
- Large Desktop: > 1024px

## 🎯 Performance Optimizations

- Lazy loading of components
- Optimized images and assets
- CSS-in-JS with minimal bundle size
- Database query optimization
- Docker multi-stage builds

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Abhaya Dhakal**
- Email: abhaydhakal@gmail.com
- Location: Kavrestihali, Kathmandu
- GitHub: [Your GitHub Profile]

## 🙏 Acknowledgments

- Inspired by Apple's design philosophy
- Framer Motion for amazing animations
- React community for awesome tools

---

Made with ❤️ using React & PostgreSQL
\`\`\`
