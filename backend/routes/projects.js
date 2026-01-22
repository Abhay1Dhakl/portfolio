import express from 'express';
import pool from '../config/database.js';

const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM projects ORDER BY sort_order ASC'
        );
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
});

// Get featured projects
router.get('/featured', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM projects WHERE featured = true ORDER BY sort_order ASC'
        );
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching featured projects:', error);
        res.status(500).json({ error: 'Failed to fetch featured projects' });
    }
});

export default router;
