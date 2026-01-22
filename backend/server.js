import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv';
import profileRoutes from './routes/profile.js';
import educationRoutes from './routes/education.js';
import experienceRoutes from './routes/experience.js';
import projectsRoutes from './routes/projects.js';
import skillsRoutes from './routes/skills.js';
import certificationsRoutes from './routes/certifications.js';
import contactRoutes from './routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'Portfolio API is running',
        timestamp: new Date().toISOString()
    });
});

// API Routes
app.use('/api/profile', profileRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/certifications', certificationsRoutes);
app.use('/api/contact', contactRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(err.status || 500).json({
        error: err.message || 'Internal server error',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`
🚀 Portfolio API Server Started!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 Server: http://localhost:${PORT}
🔒 Environment: ${process.env.NODE_ENV || 'development'}
🗄️  Database: ${process.env.DB_NAME || 'portfolio_db'}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  `);
});

export default app;
