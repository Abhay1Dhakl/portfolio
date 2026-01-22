import express from 'express';
import pool from '../config/database.js';

const router = express.Router();

// Get all education
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM education ORDER BY start_date DESC');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching education:', error);
        res.status(500).json({ error: 'Failed to fetch education' });
    }
});

export default router;
