# 🎯 Quick Start Guide

Welcome! This guide will help you get your portfolio up and running in minutes.

## 📋 Prerequisites

Before you begin, make sure you have:

1. **Docker Desktop** installed
   - Download from: https://www.docker.com/products/docker-desktop/
   - Make sure Docker is running

2. **Git** (optional, for version control)

## 🚀 Quick Setup (3 Steps)

### Step 1: Navigate to Project Directory

\`\`\`bash
cd /Users/abhaydhakal/Downloads/protfolio
\`\`\`

### Step 2: Create Environment File

\`\`\`bash
cp .env.example .env
\`\`\`

### Step 3: Start the Application

**Option A: Using the setup script (Recommended)**
\`\`\`bash
./setup.sh
\`\`\`

**Option B: Manual Docker Compose**
\`\`\`bash
docker-compose up -d --build
\`\`\`

### Step 4: Access Your Portfolio

Once the containers are running:

- **Portfolio Website**: http://localhost:3000
- **API Health Check**: http://localhost:5000/health

## 📊 Project Structure

\`\`\`
protfolio/
├── frontend/              # React application
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── services/      # API integration
│   │   └── index.css      # Design system
│   └── Dockerfile
├── backend/               # Express API
│   ├── routes/            # API endpoints
│   ├── config/            # Database config
│   ├── init.sql           # Database schema
│   └── Dockerfile
├── docker-compose.yml     # Container orchestration
└── README.md
\`\`\`

## 🎨 Features

✅ **Modern Design**
- Apple-inspired UI with glassmorphism
- Smooth animations with Framer Motion
- Fully responsive across all devices

✅ **Tech Stack**
- Frontend: React + Vite
- Backend: Node.js + Express
- Database: PostgreSQL
- DevOps: Docker Compose

✅ **Sections**
- Hero with dynamic introduction
- About with education timeline
- Work experience with details
- Featured projects showcase
- Skills with animated progress bars
- Contact form with validation

## 🔧 Common Commands

### View Logs
\`\`\`bash
docker-compose logs -f
\`\`\`

### Stop Application
\`\`\`bash
docker-compose down
\`\`\`

### Restart Application
\`\`\`bash
docker-compose restart
\`\`\`

### Rebuild Containers
\`\`\`bash
docker-compose up -d --build
\`\`\`

### Stop and Remove All
\`\`\`bash
docker-compose down -v
\`\`\`

## 🐛 Troubleshooting

### Port Already in Use

If you get a port conflict error:

1. Check what's using the port:
   \`\`\`bash
   lsof -i :3000  # or :5000 or :5432
   \`\`\`

2. Stop the conflicting service or change ports in \`.env\`

### Database Connection Issues

1. Make sure PostgreSQL container is healthy:
   \`\`\`bash
   docker-compose ps
   \`\`\`

2. Check database logs:
   \`\`\`bash
   docker-compose logs postgres
   \`\`\`

### Frontend Not Loading

1. Clear browser cache
2. Check frontend logs:
   \`\`\`bash
   docker-compose logs frontend
   \`\`\`

## 🎯 Next Steps

1. **Customize Content**
   - Edit \`backend/init.sql\` to update your personal information
   - Restart containers to apply changes

2. **Add Images**
   - Place your images in \`frontend/public/\`
   - Reference them in components

3. **Deploy**
   - Consider using platforms like:
     - Railway
     - Render
     - DigitalOcean
     - AWS

## 📝 Development

### Run Without Docker (Development Mode)

**Backend:**
\`\`\`bash
cd backend
npm install
npm run dev
\`\`\`

**Frontend:**
\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`

⚠️ **Note**: You'll need to install and run PostgreSQL locally.

## 🎨 Customization

### Change Colors

Edit \`frontend/src/index.css\` and update CSS variables:

\`\`\`css
:root {
  --color-primary: #007AFF;
  --color-secondary: #5E5CE6;
  /* ... modify as needed */
}
\`\`\`

### Update Content

All content comes from PostgreSQL database. To modify:

1. Edit \`backend/init.sql\`
2. Restart database container:
   \`\`\`bash
   docker-compose restart postgres
   \`\`\`

## 💡 Tips

- The design is fully responsive - test on different devices
- All animations are optimized for performance
- The contact form stores messages in the database
- Skills have animated progress bars
- Projects can be marked as "featured"

## 🤝 Need Help?

If you encounter any issues:

1. Check the logs: \`docker-compose logs\`
2. Ensure all containers are running: \`docker-compose ps\`
3. Verify environment variables in \`.env\`
4. Make sure ports 3000, 5000, and 5432 are available

---

**Enjoy your new portfolio! 🎉**

Made with ❤️ by Abhaya Dhakal
